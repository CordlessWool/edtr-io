import { StatefulPlugin, StateType } from '@edtr-io/core'

import { SerloInjectionEditor } from './editor'

export const serloInjectionState = StateType.string()

export function createSerloInjectionPlugin(): StatefulPlugin<
  typeof serloInjectionState
> {
  return {
    Component: SerloInjectionEditor,
    config: {},
    state: serloInjectionState
  }
}
