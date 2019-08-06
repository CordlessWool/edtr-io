import { StatefulPlugin, StateType } from '@edtr-io/core'

import { ImageEditor } from './editor'

export const imageState = StateType.object({
  src: StateType.upload(''),
  href: StateType.string(''),
  target: StateType.string(''),
  rel: StateType.string(''),
  description: StateType.string(''),
  maxWidth: StateType.number(0)
})
export const createImagePlugin = (
  config: ImageConfig
): StatefulPlugin<typeof imageState, ImageConfig> => {
  return {
    Component: ImageEditor,
    config,
    state: imageState,
    onPaste: (clipboardData: DataTransfer) => {
      const value = clipboardData.getData('text')

      if (/\.(jpe?g|png|bmp|gif|svg)$/.test(value.toLowerCase())) {
        return {
          state: {
            src: value,
            href: '',
            target: '',
            rel: '',
            description: '',
            maxWidth: 0
          }
        }
      }

      const files = getFilesFromDataTransfer(clipboardData)
      if (files.length === 1) {
        const file = files[0]
        const validation = config.validate(file)
        if (validation.valid) {
          return {
            state: {
              src: { pending: files[0] },
              href: '',
              target: '',
              rel: '',
              description: '',
              maxWidth: 0
            }
          }
        }
      }
    }
  }
}

function getFilesFromDataTransfer(clipboardData: DataTransfer) {
  const items = clipboardData.files
  let files: File[] = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (!item) continue
    files.push(item)
  }
  return files
}

export type SecondInputType = 'description' | 'link'

export interface ImageConfig {
  upload: StateType.UploadHandler<string>
  validate: StateType.UploadValidator
  secondInput?: SecondInputType
}

export { Upload } from './upload'
