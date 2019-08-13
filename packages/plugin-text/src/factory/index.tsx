import { createTextEditor, SlateEditorAdditionalProps } from './editor'
import { TextPluginOptions } from './types'
import { StateType, LegacyStatefulPlugin } from '@edtr-io/core'
import { Value, ValueJSON } from 'slate'
import { StateDescriptorValueType } from '@edtr-io/core/src/plugin-state'
import { createIcon, faParagraph } from '@edtr-io/editor-ui'

export const defaultNode = 'paragraph'

export const textState = StateType.scalar<ValueJSON>({
  document: {
    nodes: [
      {
        object: 'block',
        type: defaultNode,
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                object: 'leaf',
                text: ''
              }
            ]
          }
        ]
      }
    ]
  }
})

export const createTextPlugin = (
  options: TextPluginOptions
): LegacyStatefulPlugin<typeof textState, SlateEditorAdditionalProps> => {
  return {
    Component: createTextEditor(options),
    config: theme => {
      const blue = '#1794c1',
          green = '#469a40',
          orange = '#ff6703'
      return {
        theme: R.mergeDeepLeft(config.theme, {
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
        })
      }
    },
    state: textState,
    icon: createIcon(faParagraph),
    title: 'Text',
    description: 'Schreibe Text und Matheformeln und formatiere sie.',
    onKeyDown() {
      return false
    },
    isEmpty: (state: StateDescriptorValueType<typeof textState>) => {
      const value = Value.fromJSON(state)
      return isValueEmpty(value)
    }
  }
}

export function isValueEmpty(value: Value) {
  return (
    value.document.text === '' &&
    value.document.nodes.size === 1 &&
    value.document.nodes.get(0).type === defaultNode &&
    value.document.getTexts().size === 1
  )
}
