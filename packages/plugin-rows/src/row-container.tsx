import { styled } from '@edtr-io/editor-ui'

import { RowsConfig } from '.'

export const RowContainer = styled.div<{
  isFirst?: boolean
  editable: boolean
  noHeight?: boolean
  expanded?: boolean
  config: RowsConfig
}>(({ isFirst, editable, noHeight, expanded, config }) => {
  const theme = config.theme
  return {
    ...(!noHeight
      ? {
          minHeight: '10px',
          marginBottom: '25px',
          marginTop: isFirst ? '25px' : '0px'
        }
      : {}),
    marginLeft: editable ? '15px' : undefined,
    position: 'relative',
    borderLeft: '2px solid transparent',
    paddingLeft: '5px',
    transition: '250ms all ease-in-out',

    ...(expanded
      ? {
          borderColor: theme.color,
          paddingTop: 0,
          paddingBottom: 0
        }
      : {})
  }
})
