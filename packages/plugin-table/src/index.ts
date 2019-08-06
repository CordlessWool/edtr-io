import { LegacyStatefulPlugin, StateType } from '@edtr-io/core'

import { TableEditor } from './editor'

export const tableState = StateType.string()

export const tablePlugin: LegacyStatefulPlugin<typeof tableState> = {
  Component: TableEditor,
  state: tableState,
  title: 'Tabelle',
  description: 'Erstelle eine Tabelle mit Markdown'
}
