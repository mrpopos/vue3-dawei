import { defineComponent } from 'vue'

const MyComponent = defineComponent({
  name: 'MyComponent',
  props: {},
  setup(props, { attrs, slots }) {
    console.log('props, { attrs, slots }', props, { attrs, slots })
    return () => (
      <div>
        <h1>Hello, Vite + Vue 3 + TSX!</h1>
        <h2>every bodies good!</h2>
      </div>
    )
  },
})

export default MyComponent
