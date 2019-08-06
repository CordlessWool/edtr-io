import * as React from 'react'

import {
  StateDescriptor,
  StateDescriptorReturnType,
  StateDescriptorSerializedType,
  StateDescriptorValueType
} from './plugin-state'

export type Plugin<
  State extends StateDescriptor = StateDescriptor,
  Config = undefined
> = StatelessPlugin<Config> | StatefulPlugin<State, Config>

export interface StatelessPlugin<Config = undefined> {
  Component: React.ComponentType<StatelessPluginEditorProps<Config>>
  onPaste?: (data: DataTransfer) => void | { state?: undefined }
}

export interface StatefulPlugin<
  State extends StateDescriptor,
  Config = undefined
> {
  Component: React.ComponentType<StatefulPluginEditorProps<State, Config>>
  state: State
  onPaste?: (
    data: DataTransfer
  ) => void | { state?: StateDescriptorSerializedType<State> }
  isEmpty?: (state: StateDescriptorValueType<State>) => boolean
  onKeyDown?: (e: KeyboardEvent) => boolean
  getFocusableChildren?: (
    state: StateDescriptorReturnType<State>
  ) => { id: string }[]
}

export interface StatelessPluginEditorProps<Config = undefined> {
  name: string
  config: Config
  editable?: boolean
  focused?: boolean
}

export interface StatefulPluginEditorProps<
  State extends StateDescriptor = StateDescriptor,
  Config = undefined
> extends StatelessPluginEditorProps<Config> {
  state: StateDescriptorReturnType<State>
}

export function isStatefulPlugin<
  State extends StateDescriptor,
  Config = unknown
>(plugin: Plugin<State, Config>): plugin is StatefulPlugin<State, Config> {
  return (plugin as StatefulPlugin<State, Config>).state !== undefined
}

export function isStatelessPlugin<Config = unknown>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugin: Plugin<any, Config>
): plugin is StatelessPlugin<Config> {
  return !isStatefulPlugin(plugin)
}

/** @deprecated */
export type LegacyPlugin<
  State extends StateDescriptor = StateDescriptor,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Props extends Record<string, unknown> = any
> = LegacyStatelessPlugin<Props> | LegacyStatefulPlugin<State, Props>

/** @deprecated */
export interface LegacyStatelessPlugin<
  Props extends Record<string, unknown> = {}
> {
  Component: React.ComponentType<LegacyStatelessPluginEditorProps<Props>>
  onPaste?: (data: DataTransfer) => void | { state?: undefined }
  title?: string
  icon?: React.ComponentType
  description?: string
}

/** @deprecated */
export type LegacyStatelessPluginEditorProps<Props = {}> = {
  name: string
  editable?: boolean
  focused?: boolean
} & Props

/** @deprecated */
export interface LegacyStatefulPlugin<
  State extends StateDescriptor,
  Props = {}
> {
  Component: React.ComponentType<LegacyStatefulPluginEditorProps<State, Props>>
  state: State
  onPaste?: (
    data: DataTransfer
  ) => void | { state?: StateDescriptorSerializedType<State> }
  title?: string
  icon?: React.ComponentType
  description?: string
  isEmpty?: (state: StateDescriptorValueType<State>) => boolean
  onKeyDown?: (e: KeyboardEvent) => boolean
  getFocusableChildren?: (
    state: StateDescriptorReturnType<State>
  ) => { id: string }[]
}

/** @deprecated */
export type LegacyStatefulPluginEditorProps<
  State extends StateDescriptor = StateDescriptor,
  Props = {}
> = LegacyStatelessPluginEditorProps<Props> & {
  state: StateDescriptorReturnType<State>
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/** @deprecated */
export function isLegacyStatefulPlugin<State extends StateDescriptor>(
  plugin: LegacyPlugin<State>
): plugin is LegacyStatefulPlugin<State, any> {
  return (
    typeof (plugin as LegacyStatefulPlugin<State, any>).state !== 'undefined'
  )
}

/** @deprecated */
export function isLegacyStatelessPlugin(
  plugin: LegacyPlugin
): plugin is LegacyStatelessPlugin<any> {
  return !isLegacyStatefulPlugin(plugin)
}
/* eslint-enable @typescript-eslint/no-explicit-any */
