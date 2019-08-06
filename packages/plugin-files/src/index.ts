import { StatefulPlugin, StateType } from '@edtr-io/core'

import { FilesEditor } from './editor'
import { FileType, UploadedFile, UploadFileConfig } from './types'

export const filesState = StateType.list(
  StateType.upload<UploadedFile>({
    location: '',
    name: '',
    type: FileType.Other
  })
)

export function createFilesPlugin(
  config: FilesConfig
): StatefulPlugin<typeof filesState, FilesConfig> {
  return {
    Component: FilesEditor,
    config,
    state: filesState,
    onPaste: (clipboardData: DataTransfer) => {
      const files = getFilesFromDataTransfer(clipboardData)
      if (files.length) {
        return {
          state: files.map(file => ({ pending: file }))
        }
      }
    }
  }
}

export function getFilesFromDataTransfer(clipboardData: DataTransfer) {
  const items = clipboardData.files
  let files: File[] = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (!item) continue
    files.push(item)
  }
  return files
}

export type FilesConfig = UploadFileConfig

export * from './types'
export { parseFileType } from './upload'
