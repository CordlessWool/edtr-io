import { LegacyStatefulPlugin, StateType } from '@edtr-io/core'

import { SolutionEditor } from './editor'
import { createIcon, faCheckSquare } from '@edtr-io/editor-ui'

export const solutionState = StateType.object({
  title: StateType.string(''),
  content: StateType.child('rows')
})

export const solutionPlugin: LegacyStatefulPlugin<typeof solutionState> = {
  Component: SolutionEditor,
  state: solutionState,
  icon: createIcon(faCheckSquare),
  title: 'Lösung',
  description:
    'Gestalte in dieser ausklappbaren Box eine ausführliche Lösung zu deinen Aufgaben.',
  getFocusableChildren(state) {
    return [state().content]
  }
}
