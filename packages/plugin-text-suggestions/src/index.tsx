import { HoveringOverlay } from '@edtr-io/editor-ui'
import {
  TextPluginPlugin,
  TextPluginClosure
} from '@edtr-io/plugin-text-plugin'
import * as React from 'react'
import { HotKeys } from 'react-hotkeys'
import { Editor } from 'slate'

import { SuggestionProps, Suggestions } from './suggestions'

function mapPlugins(
  plugins: SuggestionPluginConfig['plugins'],
  editor: Editor
) {
  const search = editor.value.document.text.replace('/', '')
  const pluginsStartingWithSearchString = Object.keys(plugins)
    .filter(pluginKey => {
      const plugin = plugins[pluginKey]
      if (pluginKey === name || pluginKey === 'rows') return false
      if (!search.length) return true

      return plugin.title.toLowerCase().startsWith(search.toLowerCase())
    })
    .map(pluginName => [plugins[pluginName].title || pluginName, pluginName])
  const otherPluginsContainingSearchString = Object.keys(plugins)
    .filter(pluginKey => {
      const plugin = plugins[pluginKey]
      if (pluginKey === name || pluginKey === 'rows') return false

      return (
        plugin.title.toLowerCase().includes(search.toLowerCase()) &&
        !plugin.title.toLowerCase().startsWith(search.toLowerCase())
      )
    })
    .map(pluginName => [plugins[pluginName].title || pluginName, pluginName])
  return [
    ...pluginsStartingWithSearchString,
    ...otherPluginsContainingSearchString
  ]
}

function insertPlugin(editor: Editor) {
  return (option: string) => {
    editor.command('replaceWithPlugin', {
      plugin: option
    })
  }
}

export function createSuggestionsPlugin(
  config: SuggestionPluginConfig
): TextPluginPlugin {
  const plugins = config.plugins
  return () => {
    return {
      renderEditor(props, editor, next) {
        const { text } = editor.value.document

        if (!editor.readOnly && text.startsWith('/')) {
          const mappedPlugins = mapPlugins(plugins, editor)
          return (
            <SuggestionsBox
              onSelect={insertPlugin(editor)}
              options={mappedPlugins}
              currentValue={text.substr(1)}
              name={pluginClosure.current ? pluginClosure.current.name : ''}
            >
              {next()}
            </SuggestionsBox>
          )
        }

        return next()
      },
      onKeyDown(event, editor, next) {
        const { text } = editor.value.document

        if (text.startsWith('/') && mapPlugins(plugins, editor).length > 0) {
          const { key } = (event as unknown) as KeyboardEvent
          if (['ArrowDown', 'ArrowUp', 'Enter'].includes(key)) {
            event.preventDefault()
            return
          }
        }

        next()
      }
    }
  }
}

interface SuggestionPluginConfig {
  plugins: Record<string, { title: string }>
}

function SuggestionsBox({
  children,
  ...props
}: SuggestionProps & {
  children: React.ReactNode
}) {
  const [selected, setSelected] = React.useState(0)
  const optionsCount = props.options.length

  return (
    <HotKeys
      keyMap={{
        DEC: 'up',
        INC: 'down',
        INSERT: 'enter'
      }}
      handlers={{
        DEC: () => {
          setSelected((selected + optionsCount - 1) % optionsCount)
        },
        INC: () => {
          setSelected((selected + 1) % optionsCount)
        },
        INSERT: () => {
          const option = props.options[selected]
          if (!option) return
          setTimeout(() => {
            props.onSelect(option[1])
          })
        }
      }}
    >
      {children}
      <HoveringOverlay position={'below'}>
        <Suggestions selected={selected} {...props} />
      </HoveringOverlay>
    </HotKeys>
  )
}
