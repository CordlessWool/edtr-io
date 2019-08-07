import { StatefulPlugin, StateType} from '@edtr-io/core'

import { VideoEditor } from './editor'

export const videoState = StateType.string()

export function createVideoPlugin(): StatefulPlugin<typeof videoState> {
  return {
    Component: VideoEditor,
    config: {},
    state: videoState,
    onPaste(clipboardData: DataTransfer) {
      const value = clipboardData.getData('text')

      const regex = /^(https?:\/\/)?(.*?(youtube\.com\/watch\?(.*&)?v=.+|youtu\.be\/.+|vimeo\.com\/.+|upload\.wikimedia\.org\/.+(\.webm|\.ogg)?|br\.de\/.+))/
      if (regex.test(value)) {
        return { state: value }
      }
    }
  }
}
