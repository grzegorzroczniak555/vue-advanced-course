const getChildrenTextContent = children => {
  return children.map(node => {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}

export default {
    name: 'AnchoredHeader',
    props: {
      level: {
        type: Number,
        required: true
      }
    },
    render(createElement) {
      //console.log(this.$slots.default)
      const linkHref = getChildrenTextContent(this.$slots.default)
        .toLowerCase()
        .replace(/\W+/g, '-')
        .replace(/(^-|-$)/g, '');

      return createElement(
        `h${this.level}`,
        [
          createElement('a', {
            attrs: {
              href: `#${linkHref}`
            }
          }, this.$slots.default)
        ]
      )
    }
  }