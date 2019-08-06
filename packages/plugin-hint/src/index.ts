import { StateType } from '@edtr-io/core'
import { createExpandableBoxPlugin } from '@edtr-io/plugin-expandable-box'


export const hintState = StateType.object({
  title: StateType.string(''),
  content: StateType.child('rows')
})

export function createHintPlugin() {
  return createExpandableBoxPlugin({
    title: 'Hinweis',
    theme: {
      toggleBackgroundColor: '#d9edf7',
      containerBorderColor: '#333'
    }
  })
}
