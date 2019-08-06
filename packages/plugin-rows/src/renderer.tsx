import { StatefulPluginProps, selectors, useStore } from '@edtr-io/core'
import * as React from 'react'

import { RowContainer } from './row-container'
import { RowsConfig, rowsState } from '.'

export const RowsRenderer = (
  props: StatefulPluginProps<typeof rowsState, RowsConfig>
) => {
  const store = useStore()

  return (
    <React.Fragment>
      {props.state().map(row => {
        const doc = selectors.getDocument(store.getState(), row.id)

        return (
          <RowContainer
            editable={props.editable || false}
            config={props.config}
            key={row.id}
            noHeight={doc ? doc.plugin === 'notes' : false}
          >
            {row.render()}
          </RowContainer>
        )
      })}
    </React.Fragment>
  )
}
