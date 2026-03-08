<template lang="pug">
  section.hero.bg-background
    .hero-wrapper
      .hero-text-wrapper
        .hero-text-title-wrapper
          h1.top-title.text-primary Искусство движения
          .bottom-titles
            h1.text-primary на&nbsp;снежных
            h1.text-primary.top склонах
        .hero-other-text-wrapper
          .container.mx-auto
            .other-wrapper
              p.font-head.text-black Ваши навыки&nbsp;&mdash; наша миссия!
              button.make-btn.font-head записаться на&nbsp;обучение
      .hero-image-wrapper
        img.scatter(
          src="/files/images/png/Img-main-page-cover.png"
          alt="scatter"
        )
</template>

<style scoped lang="sass">
section
  overflow: hidden
  height: 900px

  .hero-wrapper
    padding-top: 100px
    position: relative

    .hero-text-wrapper
      .hero-text-title-wrapper
        position: relative
        display: flex
        flex-direction: column
        align-items: center
        text-align: center
        z-index: 1

        .top-title, .bottom-titles
          display: flex
          pointer-events: none

        .top-title
          z-index: 1

        .bottom-titles
          gap: 59px

          h1
            font-size: 140px
            &.top
              position: relative
              z-index: 3

      .hero-other-text-wrapper
        .container
          max-width: 1374px

          .other-wrapper
            margin-top: 15px
            display: flex
            justify-content: space-between

            p
              font-size: 16px
              text-transform: uppercase
              font-weight: 600

            .make-btn
              cursor: pointer
              font-size: 16px
              font-weight: 600
              text-transform: uppercase
              background-color: #1C1C1C
              color: #FFFFFF
              padding: 15px 50px
              border-radius: 999px

    .hero-image-wrapper
      .scatter
        position: absolute
        left: 50%
        top: 10%
        transform: translateX(-50%)
        pointer-events: none
        max-width: 660px
        max-height: 769px
        z-index: 2
</style>
