import { StatefulPlugin, StateType } from '@edtr-io/core'
import * as React from 'react'

import { BlockquoteRenderer } from './renderer'

export const blockquoteState = StateType.child()

export function createBlockquotePlugin(
  config: BlockquoteConfig = {
    Component: 'blockquote'
  }
): StatefulPlugin<typeof blockquoteState, BlockquoteConfig> {
  return {
    Component: BlockquoteRenderer,
    config,
    state: blockquoteState,
    getFocusableChildren(state) {
      return [state]
    }
  }
}

export interface BlockquoteConfig {
  Component: React.ComponentType | string
}
