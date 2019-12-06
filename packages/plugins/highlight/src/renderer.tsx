import { PluginEditorProps } from '@edtr-io/plugin'
import * as React from 'react'
import SyntaxHighlight from 'react-syntax-highlighter'

import { highlightState } from '.'

export function HighlightRenderer({
  state
}: PluginEditorProps<typeof highlightState>) {
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
