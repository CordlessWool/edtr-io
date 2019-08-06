import { LegacyStatefulPluginEditorProps } from '@edtr-io/core'
import * as React from 'react'

import { blockquoteState } from '.'

export function BlockquoteRenderer(
  props: LegacyStatefulPluginEditorProps<typeof blockquoteState>
) {
  return <blockquote>{props.state.render()}</blockquote>
}
