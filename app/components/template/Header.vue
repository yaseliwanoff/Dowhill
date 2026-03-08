<template lang="pug">
header
  .header-wrapper
    .header-block
      a.header-logo(href="/")
        img(src="/files/icons/logo.svg" alt="logo")

    .header-block
      a.header-item(href="#")
        .wrap
          span 01
          span Услуги
    .header-block
      a.header-item(href="#")
        .wrap
          span 02
          span О нас
    .header-block
      a.header-item(href="#")
        .wrap
          span 03
          span Контакты
    .header-block
      a.header-item(href="#")
        .wrap
          span 04
          span Полезное

    .header-block.phone
      a(href="tel:77872191662") 7 (787) 219-16-62
</template>

<style lang="sass" scoped>
header
  z-index: 9999

  .header-wrapper
    display: grid
    grid-template-columns: repeat(6, minmax(100px, 1fr))
    gap: 2px
    background: #F0F0F0

    .header-block:hover .wrap::before
      transform: scaleX(1)
  
    .header-block
      min-width: 0
      background: #FFFFFF
      padding-inline: 20px
      height: 60px
      transition: 0.1s linear

      a
        width: 100%
        height: 100%
        display: flex
        align-items: center

      &:hover
        background: #F0F0F0

    .header-item
      .wrap
        display: flex
        gap: 10px
        font-weight: 600
        position: relative

        &::before
          content: ""
          position: absolute
          background: black
          width: 100%
          height: 2px
          bottom: 0
          left: 0
          transform: scaleX(0)
          transform-origin: left
          transition: transform .2s ease

    .header-menu
      display: flex
      gap: 2px
      height: 100%

      .header-block
        flex: 1 1 265px
        min-width: 100px

      .header-logo
        img
          max-width: 133px
          height: 26px

  .phone
    font-size: 20px
    font-weight: 600
</style>
