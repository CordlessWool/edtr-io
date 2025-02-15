import { addStory } from '../src'

addStory('Plugins/Text/Initial State', {
  state: {
    plugin: 'rows',
    state: [
      {
        plugin: 'text'
      }
    ]
  }
})

addStory('Plugins/Text/Short Prefilled', {
  state: JSON.parse(
    '{"plugin":"rows","state":[{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"some ","marks":[]}]},{"object":"inline","type":"@splish-me/a","data":{"href":"https://www.example.com"},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"link","marks":[]}]}]},{"object":"text","leaves":[{"object":"leaf","text":", ","marks":[]},{"object":"leaf","text":"bold","marks":[{"object":"mark","type":"@splish-me/strong","data":{}}]},{"object":"leaf","text":" and ","marks":[]},{"object":"leaf","text":"italic","marks":[{"object":"mark","type":"@splish-me/em","data":{}}]},{"object":"leaf","text":" text and also some ","marks":[]},{"object":"leaf","text":"inline code","marks":[{"object":"mark","type":"code","data":{}}]},{"object":"leaf","text":".  Try using hotkeys for bold (Ctrl / Cmd + B), italic (Ctrl /Cmd + I), link (Ctrl/Cmd + K) and code (Ctrl/Cmd +Q). ","marks":[]}]}]}]}}}]}'
  )
})

addStory('Plugins/Text/Long Prefilled', {
  state: JSON.parse(
    '{"plugin":"rows","state":[{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Cupcake ipsum dolor sit amet croissant I love sweet roll. I love liquorice gingerbread I love macaroon tart tootsie roll powder danish. Bear claw chocolate cake I love I love I love jujubes ","marks":[]},{"object":"leaf","text":"marzipan","marks":[{"object":"mark","type":"@splish-me/em","data":{}}]},{"object":"leaf","text":". I love chocolate cake tart. Gummi bears croissant cupcake pastry jelly beans icing. Gummi bears cake tootsie roll muffin macaroon caramels apple pie. Ice cream halvah ","marks":[]}]},{"object":"inline","type":"@splish-me/a","data":{"href":"https://placekitten.com/"},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"cheesecake","marks":[]}]}]},{"object":"text","leaves":[{"object":"leaf","text":" sweet roll. Pastry muffin halvah danish cookie. Tootsie roll marzipan chocolate cake halvah gummies wafer cupcake.","marks":[]}]}]}]}}},{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"I love sweet roll bear claw jelly-o candy ice cream I love ice cream I love. Cake topping pie danish pudding brownie powder. Cake macaroon sugar plum cheesecake apple pie cupcake sweet biscuit. ","marks":[]},{"object":"leaf","text":"Gummies carrot cake","marks":[{"object":"mark","type":"@splish-me/strong","data":{}}]},{"object":"leaf","text":" gummies cheesecake apple pie. Donut bear claw topping. Wafer soufflé biscuit powder.","marks":[]}]}]}]}}},{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Candy canes carrot cake apple pie sesame snaps tootsie roll lemon drops. Cupcake topping I love lollipop bonbon lollipop powder chocolate bar. ","marks":[]}]}]}]}}},{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Pie macaroon cheesecake dragée cotton candy. Cupcake I love I love dragée marzipan icing. Bonbon toffee I love carrot cake pudding macaroon jelly tootsie roll. I love sweet roll gingerbread cookie I love croissant caramels lemon drops halvah. Tootsie roll marzipan ","marks":[]}]},{"object":"inline","type":"@splish-me/a","data":{"href":"https://placekitten.com/"},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"fruitcake marshmallow I love cookie I love I love biscuit. Ice cream halvah","marks":[]}]}]},{"object":"text","leaves":[{"object":"leaf","text":" toffee chupa chups pie cotton candy I love dessert. Carrot cake chocolate cake. Brownie pudding biscuit pastry icing caramels I love cookie.","marks":[]}]}]}]}}},{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Cake danish chocolate. Gummies oat cake sweet I love candy canes sugar plum dragée. Topping biscuit chupa chups ice cream dessert gummies. Powder fruitcake candy jujubes cake I love ","marks":[]},{"object":"leaf","text":"chupa chups chocolate powder. Jelly I love cookie marshmallow. Sweet gummies chocolate cake I love I l","marks":[{"object":"mark","type":"@splish-me/strong","data":{}}]},{"object":"leaf","text":"ove I love caramels sweet bonbon. Chocolate bar topping icing liquorice I love bear claw biscuit dessert biscuit. Pastry dragée cotton candy donut I love chocolate gummi bears I love chocolate bar.","marks":[]}]}]}]}}},{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Brownie candy sweet roll bonbon dessert ice cream tiramisu jelly-o sesame snaps. Pudding caramels cupcake I love jujubes chupa chups chocolate topping. Apple pie danish I love gummi bears pudding. I love chupa chups biscuit ice cream cookie. Topping donut topping sweet roll topping caramels tiramisu tart. Donut donut pudding. Macaroon oat cake oat cake jelly-o sweet roll sweet candy canes icing lemon drops.","marks":[{"object":"mark","type":"@splish-me/em","data":{}}]}]}]}]}}},{"plugin":"text","state":{"document":{"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[{"object":"mark","type":"@splish-me/em","data":{}}]}]}]}]}}}]}'
  )
})

addStory('Plugins/Text/Prefilled with Math', {
  state: JSON.parse(
    '{"plugin":"rows","state":[{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"some ","marks":[]}]},{"object":"inline","type":"@splish-me/a","data":{"href":"https://www.example.com"},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"link","marks":[]}]}]},{"object":"text","leaves":[{"object":"leaf","text":", ","marks":[]},{"object":"leaf","text":"bold","marks":[{"object":"mark","type":"@splish-me/strong","data":{}}]},{"object":"leaf","text":" and ","marks":[]},{"object":"leaf","text":"italic","marks":[{"object":"mark","type":"@splish-me/em","data":{}}]},{"object":"leaf","text":" text.  Try using hotkeys for bold (Ctrl / Cmd + B) and italic (Ctrl /Cmd + I) and opening the overlay by selecting a link and pressing Enter key.","marks":[]}]}]}]}}},{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Also look at this beautiful formula: ","marks":[]}]},{"object":"inline","type":"@splish-me/katex-inline","data":{"formula":"f(x) = \\\\int_{-\\\\infty}^\\\\infty\\n    g(\\\\xi)\\\\ e^{2 \\\\pi i \\\\xi x} \\n    \\\\ d\\\\xi","inline":true},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]}]}}}]}'
  )
})

addStory('Plugins/Text/Custom', {
  state: {
    plugin: 'rows',
    state: [
      {
        plugin: 'customText'
      }
    ]
  }
})
