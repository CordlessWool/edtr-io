import { StatefulPlugin, StateType } from '@edtr-io/core'

import { GeogebraEditor } from './editor'

export const geogebraState = StateType.string()

export function createGeogebraPlugin(): StatefulPlugin<typeof geogebraState> {
  return {
    Component: GeogebraEditor,
    config: {},
    state: geogebraState,
    onPaste(clipboardData: DataTransfer) {
      const value = clipboardData.getData('text')

      if (/geogebra\.org\/m\/(.+)/.test(value)) {
        return { state: value }
      }
    }
  }
}
