import { StateType } from '@edtr-io/core'
import { createExpandableBoxPlugin } from '@edtr-io/plugin-expandable-box'

export const spoilerState = StateType.object({
  title: StateType.string(''),
  content: StateType.child('rows')
})

export function createSpoilerPlugin() {
  return createExpandableBoxPlugin({
    theme: {
      toggleBackgroundColor: '#f5f5f5',
      toggleColor: '#333333',
      containerBorderColor: '#f5f5f5'
    }
  })
}
