import * as React from 'react'
import { Editor, MarkJSON, NodeJSON, Range as CoreRange } from 'slate'
import { Rule } from 'slate-html-serializer'
import {
  EditorProps,
  Plugin,
  RenderMarkProps,
  RenderNodeProps
} from 'slate-react'

import { createUiPlugin, Controls } from './controls'
import { plugins } from './plugins'
import { createTextPlugin } from './factory'
import {DeepPartial} from '@edtr-io/ui'

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
  placeholder: (
    <React.Fragment>
      Schreibe etwas oder füge mit &#x2295; Aufgaben und Tools hinzu
    </React.Fragment>
  )
})

export interface TextConfig {
  theme?: DeepPartial<TextTheme>
}

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

export function getTrimmedSelectionRange(editor: Editor) {
  // get trimmed selection, without changing editor (e.g. for checking active marks)
  const native = document.getSelection()
  let selection = editor.value.selection.toRange()
  if (native) {
    let str = native.toString()
    while (str.startsWith(' ')) {
      selection = selection.moveStartForward(1)
      str = str.substring(1)
    }
    while (str.endsWith(' ')) {
      selection = selection.moveEndBackward(1)
      str = str.substring(0, str.length - 1)
    }
  }
  return CoreRange.create(selection)
}

export * from './factory'
