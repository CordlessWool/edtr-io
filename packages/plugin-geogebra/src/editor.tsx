import { LegacyStatefulPluginEditorProps } from '@edtr-io/core'
import * as React from 'react'

import { GeogebraRenderer } from './renderer'
import { geogebraState } from '.'
import { EditorInput, PrimarySettings } from '@edtr-io/editor-ui'

export const GeogebraEditor = (
  props: LegacyStatefulPluginEditorProps<typeof geogebraState>
) => {
  const { focused, editable, state } = props

  return (
    <React.Fragment>
      <GeogebraRenderer {...props} disableCursorEvents={editable} />
      {focused ? (
        <PrimarySettings>
          <EditorInput
            label="Geogebra Link oder ID:"
            placeholder="12345"
            value={state.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              state.set(e.target.value)
            }}
            textfieldWidth="70%"
            editorInputWidth="100%"
          />
        </PrimarySettings>
      ) : null}
    </React.Fragment>
  )
}
