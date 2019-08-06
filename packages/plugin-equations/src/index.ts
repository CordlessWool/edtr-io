import { StateType, StatefulPlugin } from '@edtr-io/core'

import { EquationsEditor } from './editor'

export const StepProps = StateType.object({
  left: StateType.child(),
  right: StateType.child(),
  transform: StateType.child()
})

export const equationsState = StateType.object({
  steps: StateType.list(StepProps)
})

export function createEquationsPlugin(): StatefulPlugin<typeof equationsState> {
  return {
    Component: EquationsEditor,
    config: {},
    state: equationsState,
    getFocusableChildren(state) {
      return state()
        .steps()
        .reduce(
          (children, step) => {
            return [...children, step().left, step().right, step().transform]
          },
          [] as { id: string }[]
        )
    }
  }
}

export * from './editor'
