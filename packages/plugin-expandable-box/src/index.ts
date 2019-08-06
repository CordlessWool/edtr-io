import { StatefulPlugin, StateType } from '@edtr-io/core'
import { DeepPartial } from '@edtr-io/ui'
import * as R from 'ramda'

import { ExpandableBoxEditor } from './editor'

export const expandableBoxState = StateType.object({
  title: StateType.string(''),
  content: StateType.child('rows')
})

export function createExpandableBoxPlugin(
  config: {
    title?: string
    theme?: DeepPartial<ExpandableBoxTheme>
  } = {}
): StatefulPlugin<typeof expandableBoxState, ExpandableBoxConfig> {
  return {
    Component: ExpandableBoxEditor,
    config: {
      title: config.title,
      theme: R.mergeDeepRight(
        {
          containerBorderColor: 'transparent',
          toggleColor: '#337ab7',
          toggleBackgroundColor: '#337ab7'
        },
        config.theme
      )
    },
    state: expandableBoxState,
    getFocusableChildren(state) {
      return [state().content]
    }
  }
}

export interface ExpandableBoxConfig {
  title?: string
  theme: ExpandableBoxTheme
}

export interface ExpandableBoxTheme {
  containerBorderColor: string
  toggleBackgroundColor: string
  toggleColor: string
}
