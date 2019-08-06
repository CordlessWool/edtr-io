import {
  StatefulPluginProps,
  selectors,
  useStore,
  ScopeContext
} from '@edtr-io/core'
import * as React from 'react'

import { RowsConfig, rowsState } from '..'
import { Row } from './row'

export const RowsEditor = (
  props: StatefulPluginProps<typeof rowsState, RowsConfig>
) => {
  const rows = props.state
  const store = useStore()
  const { scope } = React.useContext(ScopeContext)
  return (
    <React.Fragment>
      {rows.items.map((row, index) => {
        const doc = selectors.getDocument(store.getState(), row.id)

        if (!doc) return null

        return (
          <div key={row.id} style={{ position: 'relative' }}>
            <Row
              {...props}
              index={index}
              doc={doc}
              fullStore={store}
              moveRow={rows.move}
              insert={rows.insert}
              scope={scope}
            />
          </div>
        )
      })}
    </React.Fragment>
  )
}
