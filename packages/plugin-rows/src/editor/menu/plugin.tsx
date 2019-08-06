import * as React from 'react'
import { Plugin as EditorPlugin } from '@edtr-io/core'
import { styled, EdtrIcon, edtrRowsControls } from '@edtr-io/editor-ui'

import { RowsConfig } from '../..'

const StyledPlugin = styled.div<{ config: RowsConfig }>(({ config }) => {
  const theme = config.theme
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '15px',
    width: '175px',
    borderRadius: '5px',
    padding: '15px',
    cursor: 'pointer',
    transition: '250ms all ease-in-out',
    color: theme.menu.primary.color,

    '&:hover': {
      backgroundColor: theme.menu.secondary.backgroundColor
    }
  }
})

const DefaultIcon = styled(EdtrIcon)({
  height: '100%',
  width: '100%'
})

const IconWrapper = styled.div({
  height: '50px'
})

const Title = styled.h3({
  marginTop: '15px',
  fontSize: '24px',
  marginBottom: '10px',
  fontWeight: 'bold',
  textAlign: 'center'
})

const Description = styled.p({
  margin: 0,
  textAlign: 'center',
  fontSize: '16px'
})

export const Plugin = ({
  config,
  plugin,
  pluginName,
  onClick
}: {
  config: RowsConfig
  plugin: EditorPlugin
  pluginName: string
  onClick: () => void
}) => {
  return (
    <StyledPlugin config={config} onClick={onClick}>
      <IconWrapper>
        {/*{plugin.icon ? (*/}
        {/*  <plugin.icon />*/}
        {/*) : (*/}
        <DefaultIcon icon={edtrRowsControls.defaultPlugin} />
        {/*)}*/}
      </IconWrapper>
      {/*<Title>{plugin.title || pluginName}</Title>*/}
      <Title>{pluginName}</Title>
      {/*{plugin.description && <Description>{plugin.description}</Description>}*/}
    </StyledPlugin>
  )
}
