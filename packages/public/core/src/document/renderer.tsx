/**
 * @module @edtr-io/core
 */
/** Comment needed because of https://github.com/christopherthielen/typedoc-plugin-external-module-name/issues/337 */
import { getDocument, getPlugin } from '@edtr-io/store'
import * as React from 'react'

import { DocumentProps } from '.'
import { useScopedSelector } from '../store'

export function DocumentRenderer({ id, pluginProps }: DocumentProps) {
  const document = useScopedSelector(getDocument(id))
  const plugin = useScopedSelector(
    state => document && getPlugin(document.plugin)(state)
  )
  const focusRef = React.useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  if (!document) return null
  if (!plugin) {
    // TODO:
    // eslint-disable-next-line no-console
    console.log('Plugin does not exist')
    return null
  }

  const pluginState = plugin.state.init(document.state, () => {})
  return (
    <plugin.Component
      {...pluginProps}
      state={pluginState}
      id={id}
      name={document.plugin}
      editable={false}
      focused={false}
      defaultFocusRef={focusRef}
      renderIntoSettings={() => null}
    />
  )
}
