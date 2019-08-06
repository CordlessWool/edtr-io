import { LegacyStatefulPluginEditorProps } from '@edtr-io/core'
import { ThemeProvider } from '@edtr-io/ui'
import { ExpandableBox } from '@edtr-io/renderer-ui'
import * as React from 'react'

import { hintState } from '.'
import { EditorInput, styled } from '@edtr-io/editor-ui'

const EditorInputWithMarginLeft = styled(EditorInput)({
  marginLeft: '5px',
  paddingLeft: '3px',
  '&:focus': {
    borderColor: 'black'
  }
})

const hintTheme = {
  rendererUi: {
    expandableBox: {
      toggleBackgroundColor: '#d9edf7',
      containerBorderColor: '#333'
    }
  }
}

export function HintEditor({
  state,
  editable,
  focused
}: LegacyStatefulPluginEditorProps<typeof hintState>) {
  const title = (
    <React.Fragment>
      Hinweis
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
    <ThemeProvider theme={hintTheme}>
      <ExpandableBox title={title} editable={editable}>
        {state.content.render()}
      </ExpandableBox>
    </ThemeProvider>
  )
}
