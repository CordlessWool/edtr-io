import { addStory } from '../src'

addStory('Theming', {
  state: {
    plugin: 'rows',
    state: [{ plugin: 'text' }]
  },
  theme: {
    editor: {
      color: '#222',
      backgroundColor: '#d9edf7',
      primary: {
        background: '#007ec1'
      }
    },
    editorUi: {
      button: {
        color: 'green',
        backgroundColor: 'red',
        hoverBackgroundColor: 'green',
        hoverBorderColor: 'green'
      },
      checkbox: {
        boxSelectedColor: 'green',
        boxDeselectedColor: 'red',
        color: 'green'
      },
      input: {
        color: 'red',
        backgroundColor: 'green',
        highlightColor: 'black'
      },
      textarea: {
        color: 'red',
        backgroundColor: 'green',
        highlightColor: 'black'
      }
    },
    rendererUi: {
      expandableBox: {
        toggleColor: 'red'
      }
    },
    plugins: {
      spoiler: {
        color: 'red'
      },
      rows: {
        backgroundColor: 'red',
        color: 'green',
        highlightColor: 'purple',
        lightBackgroundColor: 'pink',
        menu: {
          highlightColor: 'purple',
          primary: {
            backgroundColor: 'red',
            color: 'green'
          },
          secondary: {
            backgroundColor: 'pink',
            color: 'lightgreen'
          }
        }
      }
    }
  }
})
