import { StatefulPluginProps, StateType } from '@edtr-io/core'
import {
  EditorButton,
  edtrClose,
  EdtrIcon,
  faRedoAlt,
  Icon,
  styled
} from '@edtr-io/editor-ui'
import * as React from 'react'

import { FileRenderer, FilesRenderer } from './renderer'
import { parseFileType, Upload } from './upload'
import { FilesConfig, filesState, getFilesFromDataTransfer } from '.'

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

export function FilesEditor(
  props: StatefulPluginProps<typeof filesState, FilesConfig>
) {
  const { config, focused, state } = props
  StateType.usePendingFilesUploader(state.items, config.upload)

  function onPaste(data: DataTransfer) {
    const files = getFilesFromDataTransfer(data)
    if (files.length) {
      files.forEach(file => {
        state.insert(state().length, {
          pending: file
        })
      })
    }
  }

  if (!props.editable) return <FilesRenderer {...props} />

  return (
    <div
      onPaste={event => {
        onPaste(event.clipboardData)
      }}
    >
      {state.items.map((file, i) => {
        if (!StateType.isTempFile(file.value)) {
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
                    onClick={() => file.upload(tmpFile, config.upload)}
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
              state.insert(state.items.length, {
                pending: file
              })
            })
          }}
        />
      ) : null}
    </div>
  )
}
