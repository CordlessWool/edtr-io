import { StatefulPlugin, StateType } from '@edtr-io/core'

import { AnchorEditor } from './editor'

export const anchorState = StateType.string()

export function createAnchorPlugin(): StatefulPlugin<typeof anchorState> {
  return {
    Component: AnchorEditor,
    state: anchorState
  }
}
