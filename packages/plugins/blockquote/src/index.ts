import { child, StatefulPlugin } from '@edtr-io/plugin'
import { createIcon, faQuoteRight } from '@edtr-io/ui'

import { BlockquoteRenderer } from './renderer'

export const blockquoteState = child()

export const blockquotePlugin: StatefulPlugin<typeof blockquoteState> = {
  Component: BlockquoteRenderer,
  state: blockquoteState,
  title: 'Zitat',
  description: 'Erzeuge eingerückten Text, zum Beispiel für Zitate.',
  icon: createIcon(faQuoteRight)
}
