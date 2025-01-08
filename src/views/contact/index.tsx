import { defineComponent } from 'vue'

const ContactPage = defineComponent({
  name: 'ContactPage',
  props: {},
  setup(props, { attrs, slots }) {
    console.log('props, { attrs, slots }', props, { attrs, slots })
    return () => (
      <div>
        <h1>contact</h1>
      </div>
    )
  },
})

export default ContactPage
