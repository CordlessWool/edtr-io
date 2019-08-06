import { StatefulPluginProps } from '@edtr-io/core'
import { EditorInput, styled } from '@edtr-io/editor-ui'
import * as React from 'react'

import { ExpandableBox } from './expandable-box'
import { ExpandableBoxConfig, expandableBoxState } from '.'

const EditorInputWithMarginLeft = styled(EditorInput)({
  marginLeft: '5px',
  paddingLeft: '3px',
  '&:focus': {
    borderColor: 'black'
  }
})

export function ExpandableBoxEditor({
  config,
  state,
  editable,
  focused
}: StatefulPluginProps<typeof expandableBoxState, ExpandableBoxConfig>) {
  const title = (
    <React.Fragment>
      {config.title}
      {editable && focused ? (
        <EditorInputWithMarginLeft
          onChange={e => state.title.set(e.target.value)}
          value={state.title()}
          placeholder="Zusätzlicher Name"
        />
      ) : state.title() ? (
        <span> ({state.title()})</span>
      ) : null}
    </React.Fragment>
  )

  return (
    <ExpandableBox title={title} editable={editable} config={config}>
      {state.content.render()}
    </ExpandableBox>
  )
}
