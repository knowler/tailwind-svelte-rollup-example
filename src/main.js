import './main.css'
import App from './App.svelte'

export default new App({
  target: document.body,
  props: {
    name: 'world',
  },
})
