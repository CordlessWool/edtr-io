import { StateType } from '@edtr-io/core'
import { styled, Icon, faCopy, faTrashAlt } from '@edtr-io/editor-ui'
import * as React from 'react'

import { RowsConfig, rowsState } from '../..'

const StyledGlobals = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const IconContainer = styled.div<{ disabled?: boolean; config: RowsConfig }>(
  ({ disabled, config }) => {
    const theme = config.theme
    return {
      height: '30px',
      margin: '0 5px 0 15px',

      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? theme.menu.secondary.color : theme.menu.primary.color,
      '&:hover': {
        color: disabled ? theme.menu.secondary.color : theme.highlightColor
      }
    }
  }
)

const Copy = ({ duplicateRow, close, config }: GlobalsProps) => {
  return (
    <IconContainer
      config={config}
      onClick={() => {
        duplicateRow()
        close()
      }}
    >
      <Icon size="2x" icon={faCopy} />
    </IconContainer>
  )
}

const Remove = ({ rows, index, close, config }: GlobalsProps) => {
  return (
    <IconContainer
      config={config}
      disabled={rows.items.length === 1}
      onClick={() => {
        if (rows.items.length === 1) return
        rows.remove(index)
        close()
      }}
    >
      <Icon size="2x" icon={faTrashAlt} />
    </IconContainer>
  )
}

interface GlobalsProps {
  config: RowsConfig
  index: number
  rows: StateType.StateDescriptorReturnType<typeof rowsState>
  close: () => void
  duplicateRow: () => void
}

export const Globals = (props: GlobalsProps) => {
  return (
    <StyledGlobals>
      <Copy {...props} />
      <Remove {...props} />
    </StyledGlobals>
  )
}
