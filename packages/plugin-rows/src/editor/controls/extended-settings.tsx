import { StateType } from '@edtr-io/core'
import { EdtrIcon, edtrRowsControls, styled } from '@edtr-io/editor-ui'
import * as React from 'react'

import { RowsConfig, rowsState } from '../..'
import { Globals } from './globals'

const Overlay = styled.div<{ visible?: boolean; config: RowsConfig }>(
  ({ visible, config }) => {
    const theme = config.theme
    return {
      width: '100vw',
      height: '100vh',
      backgroundColor: theme.menu.secondary.backgroundColor,
      position: 'fixed',
      zIndex: 9999,
      top: 0,
      left: 0,
      display: visible ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
)

const Content = styled.div<{ config: RowsConfig }>(({ config }) => {
  const theme = config.theme
  return {
    backgroundColor: theme.backgroundColor,
    position: 'relative',
    padding: '15px',
    width: '98%',
    maxWidth: '600px',
    margin: 'auto'
  }
})

const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between'
})

const CloseBtnContainer = styled.div<{ config: RowsConfig }>(({ config }) => {
  const theme = config.theme
  return {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    color: theme.menu.primary.color,
    '&:hover': {
      color: theme.menu.highlightColor
    }
  }
})

const Footer = styled.div<{ config: RowsConfig }>(({ config }) => {
  const theme = config.theme
  return {
    paddingTop: '10px',
    marginTop: '25px',
    borderTop: `1px solid ${theme.lightBackgroundColor}`, //rgba(182,182,182,1)
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

const CloseCaption = styled.div<{ config: RowsConfig }>(({ config }) => {
  const theme = config.theme
  return {
    color: theme.menu.highlightColor,
    cursor: 'pointer'
  }
})

interface ExtendedSettingsProps {
  hideExtendedSettings: () => void
  expanded: boolean
  index: number
  rows: StateType.StateDescriptorReturnType<typeof rowsState>
  duplicateRow: () => void
  extendedSettingsVisible: boolean
  config: RowsConfig
}

// eslint-disable-next-line react/display-name
export const ExtendedSettingsWrapper = React.forwardRef<
  HTMLDivElement,
  ExtendedSettingsProps
>(
  (
    {
      hideExtendedSettings,
      expanded,
      index,
      rows,
      duplicateRow,
      extendedSettingsVisible,
      config
    }: ExtendedSettingsProps,
    ref
  ) => {
    React.useEffect(() => {
      function closeListener(evt: KeyboardEvent) {
        if (evt.key === 'Escape') {
          hideExtendedSettings()
        }
      }
      window.addEventListener('keydown', closeListener)

      return () => {
        window.removeEventListener('keydown', closeListener)
      }
    }, [hideExtendedSettings])

    // render only the expanded, so only one extended settings exist
    if (!expanded) return null
    // render even if not yet visible, because of ref.
    return (
      <Overlay visible={extendedSettingsVisible} config={config}>
        <Content config={config}>
          <Header>
            <h4 style={{ marginRight: 25 }}>Erweiterte Einstellungen</h4>
            <CloseBtnContainer onClick={hideExtendedSettings} config={config}>
              <EdtrIcon icon={edtrRowsControls.close} />
            </CloseBtnContainer>
          </Header>
          <div ref={ref} />
          <Footer config={config}>
            <Globals
              close={hideExtendedSettings}
              index={index}
              rows={rows}
              duplicateRow={duplicateRow}
              config={config}
            />
            <CloseCaption onClick={hideExtendedSettings} config={config}>
              Schließen
            </CloseCaption>
          </Footer>
        </Content>
      </Overlay>
    )
  }
)
