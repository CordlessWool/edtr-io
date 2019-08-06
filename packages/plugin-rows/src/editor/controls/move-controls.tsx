import { EdtrIcon, edtrRowsControls, styled } from '@edtr-io/editor-ui'
import { StateType } from '@edtr-io/core'
import * as React from 'react'

import {RowsConfig, rowsState, rowState} from '../..'
import { MoveControlsProps } from '.'

const StyledControls = styled.div({
  display: 'flex'
})

const IconContainer = styled.div<{ disabled?: boolean; config: RowsConfig }>(
  ({ disabled, config }) => {
    const theme = config.theme
    return {
      height: '24px',
      marginBottom: '15px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? theme.menu.secondary.color : theme.menu.primary.color,
      pointerEvents: disabled ? 'none' : undefined,
      '&:hover': {
        color: disabled ? theme.menu.secondary.color : theme.menu.highlightColor
      }
    }
  }
)

const DragIcon = styled(IconContainer)({
  marginBottom: '5px',
  marginTop: '-3px',
  cursor: 'grab',
  userSelect: 'none',
  '&:active': {
    cursor: 'grabbing'
  }
})

const Drag: React.FunctionComponent<
  IconProps & { connectDragSource: Function }
> = ({ rows, connectDragSource, config }) => {
  return connectDragSource(
    <div>
      <DragIcon
        config={config}
        draggable={false}
        disabled={rows.items.length === 1}
      >
        <EdtrIcon icon={edtrRowsControls.dragHandle} />
      </DragIcon>
    </div>
  )
}

interface IconProps {
  config: RowsConfig
  index: number
  rows: StateType.StateDescriptorReturnType<typeof rowsState>
  row: StateType.StateDescriptorReturnType<typeof rowState>
}

export const MoveControls = ({
  index,
  rows,
  row,
  config,
  connectDragSource
}: MoveControlsProps) => {
  return (
    <StyledControls>
      <Drag
        rows={rows}
        index={index}
        row={row}
        connectDragSource={connectDragSource}
        config={config}
      />
    </StyledControls>
  )
}
