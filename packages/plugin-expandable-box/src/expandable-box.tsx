import * as React from 'react'

import { faSortDown, faSortUp, Icon, styled } from '@edtr-io/renderer-ui'
import { ExpandableBoxConfig } from '.'

const Wrapper = styled.div<{ collapsed: boolean }>(({ collapsed }) => {
  return {
    borderRadius: '5px',
    boxShadow: `0 5px 5px rgba(0, 0, 0, ${collapsed ? 0 : 0.05})`
  }
})

const Toggle = styled.div<{
  collapsed: boolean
  editable?: boolean
  alwaysVisible?: boolean
  config: ExpandableBoxConfig
}>(({ collapsed, editable, alwaysVisible, config }) => {
  const { toggleBackgroundColor, toggleColor } = config.theme

  return {
    backgroundColor:
      alwaysVisible || !collapsed ? toggleBackgroundColor : 'transparent',
    '& a': {
      color: toggleColor
    },
    padding: '10px 15px 10px 10px',
    marginBottom: '10px',
    position: 'relative',
    textAlign: 'left',
    borderRadius: alwaysVisible && collapsed ? '5px' : undefined,
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    cursor: editable ? undefined : 'pointer'
  }
})

const Content = styled.div<{ collapsed: boolean }>(({ collapsed }) => {
  return {
    display: collapsed ? 'none' : 'block',
    position: 'relative',
    padding: '5px 0'
  }
})

const StyledIcon = styled(Icon)<{
  collapsed: boolean
  config: ExpandableBoxConfig
}>(({ collapsed, config }) => {
  const { toggleColor } = config.theme
  return {
    marginRight: '10px',
    marginBottom: collapsed ? '3px' : '-3px',
    color: toggleColor
  }
})

export function ExpandableBox({
  children,
  editable,
  alwaysVisible,
  title,
  config
}: {
  children?: React.ReactNode
  editable?: boolean
  alwaysVisible?: boolean
  title: React.ReactNode
  config: ExpandableBoxConfig
}) {
  let [collapsed, setCollapsed] = React.useState(true)

  return (
    <Wrapper collapsed={collapsed}>
      <Toggle
        editable={editable}
        alwaysVisible={alwaysVisible}
        collapsed={collapsed}
        onClick={() => {
          setCollapsed(!collapsed)
        }}
        config={config}
      >
        <React.Fragment>
          <StyledIcon
            collapsed={collapsed}
            icon={collapsed ? faSortDown : faSortUp}
            config={config}
          />
          <a>{title}</a>
        </React.Fragment>
      </Toggle>
      <Content collapsed={collapsed}>{children}</Content>
    </Wrapper>
  )
}
