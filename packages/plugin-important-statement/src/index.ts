import { StatefulPlugin, StateType } from '@edtr-io/core'

import { ImportantStatementRenderer } from './renderer'

export const importantStatementState = StateType.child()

export function createImportantStatementPlugin(): StatefulPlugin<
  typeof importantStatementState
> {
  return {
    Component: ImportantStatementRenderer,
    config: {},
    state: importantStatementState,
    getFocusableChildren(state) {
      return [state]
    }
  }
}
