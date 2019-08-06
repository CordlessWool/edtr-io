import { StatefulPluginProps } from '@edtr-io/core'
import { styled } from '@edtr-io/ui'
import * as React from 'react'

import { anchorState } from '.'

const Anchor = styled.a({
  visibility: 'hidden'
})

export function AnchorRenderer(
  props: StatefulPluginProps<typeof anchorState>
) {
  return <Anchor id={props.state.value} />
}
