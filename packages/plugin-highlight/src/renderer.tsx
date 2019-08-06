import { StatefulPluginProps } from '@edtr-io/core'
import SyntaxHighlight from 'react-syntax-highlighter'
import * as React from 'react'

import { highlightState } from '.'

export function HighlightRenderer({
  state
}: StatefulPluginProps<typeof highlightState>) {
  return (
    <SyntaxHighlight
      language={state.language.value}
      showLineNumbers={state.lineNumbers.value}
    >
      {state.text.value ||
        'Switch into edit mode then paste your sourcecode here...'}
    </SyntaxHighlight>
  )
}
