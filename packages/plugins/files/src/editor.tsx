import { EditorButton } from '@edtr-io/editor-ui'
import {
  isTempFile,
  usePendingFilesUploader,
  StatefulPluginEditorProps,
  UploadHandler
} from '@edtr-io/plugin'
import { Icon, faRedoAlt, styled, EdtrIcon, edtrClose } from '@edtr-io/ui'
import * as React from 'react'

import { fileState, getFilesFromDataTransfer } from '.'
import { FileRenderer } from './renderer'
import { UploadedFile } from './types'
import { parseFileType, Upload } from './upload'

export const Wrapper = styled.div({
  display: 'inline-block',
  margin: '0 10px'
})

export const Temporary = styled(Wrapper)({
  color: '#aaa'
})

export const Failed = styled(Wrapper)({
  color: '#f77'
})

export const Center = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export function createFilesEditor(
  uploadHandler: UploadHandler<UploadedFile>
): React.FunctionComponent<StatefulPluginEditorProps<typeof fileState>> {
  return function FilesEditor(props) {
    const { focused, state } = props

    usePendingFilesUploader(state, uploadHandler)

    function onPaste(data: DataTransfer) {
      const files = getFilesFromDataTransfer(data)
      if (files.length) {
        files.forEach(file => {
          state.insert(state.length, {
            pending: file
          })
        })
      }
    }

    return (
      <div
        onPaste={event => {
          onPaste(event.clipboardData)
        }}
      >
        {state.map((file, i) => {
          if (!isTempFile(file.value)) {
            // finished uploading
            return <FileRenderer key={i} file={file.value} />
          }

          if (file.value.loaded) {
            // finished loading as DataUrl, being uploaded atm
            const tmpFile = file.value.loaded
            return (
              <Temporary key={i}>
                <Center>
                  <FileRenderer
                    file={{
                      location: tmpFile.dataUrl,
                      name: tmpFile.file.name,
                      type: parseFileType(tmpFile.file.name)
                    }}
                  />
                  <EditorButton onClick={() => state.remove(i)}>
                    <EdtrIcon icon={edtrClose} />
                  </EditorButton>
                </Center>
              </Temporary>
            )
          }

          if (file.value.failed) {
            const tmpFile = file.value.failed
            return (
              <Failed key={i}>
                <Center>
                  <FileRenderer
                    file={{
                      location: '',
                      name: tmpFile.name,
                      type: parseFileType(tmpFile.name)
                    }}
                  />
                  <span>Fehlgeschlagen</span>
                  <span>
                    <EditorButton
                      onClick={() => file.upload(tmpFile, uploadHandler)}
                    >
                      <Icon icon={faRedoAlt} />
                    </EditorButton>
                    <EditorButton onClick={() => state.remove(i)}>
                      <EdtrIcon icon={edtrClose} />
                    </EditorButton>
                  </span>
                </Center>
              </Failed>
            )
          }

          return null
        })}
        {focused ? (
          <Upload
            onFiles={files => {
              files.forEach(file => {
                state.insert(state.length, {
                  pending: file
                })
              })
            }}
          />
        ) : null}
      </div>
    )
  }
}
