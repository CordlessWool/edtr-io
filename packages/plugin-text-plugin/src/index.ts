import { DocumentState, selectors } from '@edtr-io/core'
import { OverlayContextValue } from '@edtr-io/editor-ui'
import * as React from 'react'
import { Editor, ValueJSON } from 'slate'
import { Rule } from 'slate-html-serializer'
import { Plugin } from 'slate-react'

export type TextPluginPlugin = (
  pluginClosure: TextPluginClosure
) => Plugin &
  Rule & {
    // FIXME: This type should exist in slate somewhere...
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    commands?: { [key: string]: (editor: Editor, ...args: any[]) => Editor }
  }

export type TextPluginClosure = React.RefObject<{
  // overlayContext: OverlayContextValue
  // name: string
  // parent?: TextPluginAdditionalProps
  // replace?: (options?: DocumentState) => void
  // plugins: ReturnType<typeof selectors.getPlugins>
}>

export interface TextPluginAdditionalProps {
  // name: string
  // insert?: (options?: { plugin: string; state?: unknown }) => void
  // replace?: (options?: { plugin: string; state?: unknown }) => void
  // remove?: () => void
  // parent?: TextPluginAdditionalProps
  // mergeWithNext?: (merge: (next: ValueJSON) => void) => void
  // mergeWithPrevious?: (merge: (previous: ValueJSON) => void) => void
}
