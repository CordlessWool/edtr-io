import { StateType } from '@edtr-io/core'
import { createExpandableBoxPlugin } from '@edtr-io/plugin-expandable-box'

export const solutionState = StateType.object({
  title: StateType.string(''),
  content: StateType.child('rows')
})

export function createSolutionPlugin() {
  return createExpandableBoxPlugin({
    title: 'Lösung',
    theme: {
      toggleBackgroundColor: '#d9edf7',
      containerBorderColor: '#d9edf7'
    }
  })
}
