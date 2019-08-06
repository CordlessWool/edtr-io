import { StatefulPluginProps } from '@edtr-io/core'
import * as React from 'react'

import { BlockquoteConfig, blockquoteState } from '.'

export function BlockquoteRenderer(
  props: StatefulPluginProps<typeof blockquoteState, BlockquoteConfig>
) {
  return <props.config.Component>{props.state.render()}</props.config.Component>
}
