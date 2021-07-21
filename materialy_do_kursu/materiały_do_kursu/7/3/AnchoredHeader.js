export default {
    name: 'AnchoredHeader',
    props: {
      level: {
        type: Number,
        required: true
      }
    },
    render(createElement) {
      return createElement(
        `h${this.level}`,
        this.$slots.default
      )
    }
  }