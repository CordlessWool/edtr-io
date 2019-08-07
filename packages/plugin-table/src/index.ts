import { StatefulPlugin, StateType } from '@edtr-io/core'

import { TableEditor } from './editor'

export const tableState = StateType.string()

export const tablePlugin: StatefulPlugin<typeof tableState> = {
  Component: TableEditor,
  config: {},
  state: tableState
}
