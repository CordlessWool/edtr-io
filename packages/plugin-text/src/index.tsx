import { Editor, MarkJSON, NodeJSON } from 'slate'
import { Rule } from 'slate-html-serializer'
import {
  EditorProps,
  Plugin,
  RenderMarkProps,
  RenderNodeProps
} from 'slate-react'
import { plugins } from './plugins'
import { createTextPlugin } from './factory'
import { createUiPlugin, Controls } from './controls'
import { createPluginTheme, PluginThemeFactory } from '@edtr-io/ui'

export type MarkEditorProps = RenderMarkProps

export interface MarkRendererProps {
  mark: MarkJSON
}

export type NodeEditorProps = RenderNodeProps
export type NodeControlsProps = EditorProps & {
  editor: Editor
}
export interface NodeRendererProps {
  node: NodeJSON
}

export type TextPlugin = Plugin &
  Rule & {
    // FIXME: This type should exist in slate somewhere...
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    commands?: { [key: string]: (editor: Editor, ...args: any[]) => Editor }
  }

export const textPlugin = createTextPlugin({
  plugins: [...plugins, createUiPlugin({ Component: Controls })],
  placeholder: 'Write some text here...'
})

export interface TextTheme {
  backgroundColor: string
  color: string
  hoverColor: string
  active: {
    backgroundColor: string
    color: string
  }
  dropDown: {
    backgroundColor: string
  }
  plugins: {
    colors: {
      colors: string[]
      defaultColor: string
    }
  }
}

export const textPluginThemeFactory: PluginThemeFactory<TextTheme> = theme => {
  const blue = '#1794c1',
    green = '#469a40',
    orange = '#ff6703'
  return {
    backgroundColor: 'transparent',
    color: theme.editor.color,
    hoverColor: theme.editor.primary.background,
    active: {
      backgroundColor: '#b6b6b6',
      color: theme.editor.backgroundColor
    },
    dropDown: {
      backgroundColor: theme.editor.backgroundColor
    },
    plugins: {
      colors: {
        colors: [blue, green, orange],
        defaultColor: 'black'
      }
    }
  }
}
export const createTextPluginTheme = createPluginTheme<TextTheme>(
  textPluginThemeFactory
)

export function trimSelection(editor: Editor) {
  // Trimm selection before applying transformation
  const selection = document.getSelection()
  if (selection) {
    let str = selection.toString()
    while (str.startsWith(' ')) {
      editor.moveStartForward(1)
      str = str.substring(1)
    }
    while (str.endsWith(' ')) {
      editor.moveEndBackward(1)
      str = str.substring(0, str.length - 1)
    }
  }
}

export * from './factory'
