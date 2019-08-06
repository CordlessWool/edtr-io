import { LegacyStatefulPlugin, StateType } from '@edtr-io/core'

import { SerloInjectionEditor } from './editor'

export const serloInjectionState = StateType.string()

export const serloInjectionPlugin: LegacyStatefulPlugin<
  typeof serloInjectionState
> = {
  Component: SerloInjectionEditor,
  state: serloInjectionState,
  title: 'Serlo Inhalt',
  description: 'Binde einen Inhalt von serlo.org via ID ein'
}
