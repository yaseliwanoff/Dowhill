<template lang="pug">
  a.link-card(:href="link" :class="getColorClass()")
    .card-top
      .card-top-left
        h4.card-title {{ title }}
        p.card-desc {{ anotherText }}
      .card-top-right
        svg(width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg")
          path(fill-rule="evenodd" clip-rule="evenodd" d="M7.59138 0.5L33.4982 0.5V25.8983L30.4982 25.8983V5.62132L3.05882 33.0607L0.9375 30.9393L28.3768 3.5L7.59138 3.5V0.5Z" :fill="svgColor")
    .card-bottom
      p {{ description }}
</template>

<script>
export default {
  name: "CardInfo",
  props: {
    color: {
      type: String,
      default: "gray"
    },
    title: {
      type: String,
      required: true
    },
    anotherText: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    svgColor() {
      switch(this.color) {
        case 'gray':
          return 'var(--color-black)';
        case 'blue':
          return 'var(--color-black)';
        case 'black':
          return 'var(--color-primary)';
        default:
          return 'var(--color-white)';
      }
    }
  },
  methods: {
    getColorClass() {
      return `link-card--${this.color}`;
    }
  }
}
</script>

<style lang="sass">
.link-card
  padding: 20px
  max-width: 400px
  height: 100vh
  max-height: 500px
  display: flex
  flex-direction: column

  svg
    transition: transform 0.3s ease

  &:hover
    svg
      transform: scale(1.4)

  &--gray
    background-color: var(--color-gray)
    
  &--blue
    background-color: var(--color-blue)
    .card-title,
    .card-desc,
    .card-bottom p
      color: var(--color-black)
      
  &--primary
    background-color: var(--color-primary)
    .card-title,
    .card-desc,
    .card-bottom p
      color: var(--color-white)
      
  &--black
    background-color: var(--color-black)
    .card-title,
    .card-desc,
    .card-bottom p
      color: var(--color-primary)
  
  .card-top
    display: flex
    align-items: flex-start
    justify-content: space-between
    flex: 1
    
    .card-top-left
      max-width: 216px
      height: 100%
      display: flex
      flex-direction: column
      
      .card-title
        margin-bottom: 10px
      
      .card-desc
        margin-top: 0px
        word-break: break-word
        
    .card-top-right
      margin-top: 6px
      
  .card-bottom
    margin-top: auto
    
    p
      word-break: break-word
</style>
