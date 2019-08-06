import {
  defaultEditorTheme,
  EditorTheme,
  EditorUiTheme
} from '@edtr-io/editor-ui'
import * as R from 'ramda'
import * as React from 'react'
import styled, {
  ThemeContext as StyledThemeContext,
  ThemeProps as StyledThemeProps,
  ThemeProvider as StyledThemeProvider,
  ThemeProviderProps as StyledThemeProviderProps
} from 'styled-components'

export { styled }

export interface Theme {
  editor: EditorTheme
  editorUi: DeepPartial<EditorUiTheme>
}

export type CustomTheme = DeepPartial<Theme>
export type ThemeProps = StyledThemeProps<Theme>

const defaultTheme: Theme = {
  editor: defaultEditorTheme,
  editorUi: {}
}

export function RootThemeProvider(
  props: StyledThemeProviderProps<CustomTheme>
) {
  const theme = React.useMemo(
    () => R.mergeDeepRight(defaultTheme, props.theme),
    [props.theme]
  )
  return <StyledThemeProvider {...props} theme={theme} />
}

export const ThemeContext: React.Context<Theme> = StyledThemeContext
export const ThemeConsumer: React.Context<Theme>['Consumer'] =
  ThemeContext.Consumer
export function useTheme() {
  return React.useContext(ThemeContext)
}

export function ThemeProvider(props: StyledThemeProviderProps<CustomTheme>) {
  const defaultTheme = useTheme()
  const theme = React.useMemo(() => {
    return R.mergeDeepRight(defaultTheme, props.theme)
  }, [props.theme, defaultTheme])
  return <StyledThemeProvider {...props} theme={theme} />
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? (DeepPartial<U>)[]
    : T[P] extends readonly (infer U)[]
    ? readonly DeepPartial<U>[]
    : DeepPartial<T[P]>
}
