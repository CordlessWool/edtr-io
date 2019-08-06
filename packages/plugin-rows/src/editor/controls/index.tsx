import { StateType } from '@edtr-io/core'
import * as React from 'react'

import {RowsConfig, rowsState, rowState} from '../..'
export { ExtendedSettingsWrapper } from './extended-settings'
import { Settings } from './settings'
import { MoveControls } from './move-controls'

export interface SettingsProps {
  config: RowsConfig
  expanded: boolean
  setShowExtendedSettings: (showExtendedSettings: boolean) => void
}

export interface MoveControlsProps {
  config: RowsConfig
  index: number
  rows: StateType.StateDescriptorReturnType<typeof rowsState>
  row: StateType.StateDescriptorReturnType<typeof rowState>
  connectDragSource: Function //TODO fix me
}

type ControlsProps = SettingsProps & MoveControlsProps

export const Controls = ({
  index,
  expanded,
  setShowExtendedSettings,
  config,
  rows,
  row,
  connectDragSource
}: ControlsProps) => {
  return (
    <React.Fragment>
      <Settings
        config={config}
        expanded={expanded}
        setShowExtendedSettings={setShowExtendedSettings}
      >
        <MoveControls
          config={config}
          index={index}
          rows={rows}
          row={row}
          connectDragSource={connectDragSource}
        />
      </Settings>
    </React.Fragment>
  )
}
