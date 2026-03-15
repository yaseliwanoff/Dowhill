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
              img.other-hightlight(
                src="/files/icons/hightlight.svg"
                alt="hightlight"
              )
              button.make-btn.font-head записаться на&nbsp;обучение
      .hero-image-wrapper
        img.scatter(
          src="/files/images/png/Img-main-page-cover.png"
          alt="scatter"
        )
    .hero-bottom
      .bottom-container
        .hero-bottom-texts
          .hero-bottom-top-texts
            span.another-title Обучение
            h2 
              | Давно мечтаете 
              span.text-color покорить 
              | снежные склоны? Или хотите
              span.text-color &nbsp;усовершенствовать 
              | свои навыки? А&nbsp;может быть 
              span.text-color не&nbsp;хватает адреналина?
          .hero-bottom-description
            p Downhill предлагает обучение горным лыжам и&nbsp;сноуборду для всех уровней навыков&nbsp;&mdash; от&nbsp;начинающих до&nbsp;опытных спортсменов. Мы&nbsp;специализируемся на&nbsp;профессиональном индивидуальном обучении.
            p Наши программы включают в&nbsp;себя теоретические и&nbsp;практические занятия, упражнения по&nbsp;развитию баланса, поворотов, техники падений и&nbsp;безопасности.
    .hero-links-wrapper
      .hero-links-container(v-for="item in items" :key="item.index")
        CardInfo(
          :color="item.color"
          :title="item.title"
          :anotherText="item.anotherText"
          :description="item.description"
          :link="item.link"
        )
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      items: [
        {
          index: 0,
          color: "blue",
          title: "В компании друзей или кругу семьи ",
          anotherText: "до 6 человек",
          description: "Если вы хотите разделить впечатления с близкими или отвлечься от серых будней. Ведь лыжи и сноуборд — это не только спорт, но и радость от свежего воздуха и прекрасных видов.",
          link: "/family"
        },
        {
          index: 1,
          color: "primary",
          title: "Взрослые",
          anotherText: "",
          description: "Хотите научиться кататься с нуля или улучшить вашу технику? Мы сделаем ваше обучение лёгким и эффективным, внимательно следуя вашему темпу и обеспечивая комфортную обстановку.",
          link: "/older"
        },
        {
          index: 2,
          color: "gray",
          title: "Дети",
          anotherText: "от 3х лет",
          description: "Индивидуальные занятия — самая безопасная форма обучения для детей. 100% внимания инструктора помогает достигать быстрых результатов.",
          link: "/skis"
        },
        {
          index: 3,
          color: "black",
          title: "фрирайд",
          anotherText: "",
          description: "Для тех, кому просто поворачивать уже надоело. Наши опытные инструкторы и гиды покажут вам живописные окрестности и позаботятся о вашей безопасности.",
          link: "/freeride"
        },
      ]
    };
  },
}
</script>

<style scoped lang="sass">
section
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

        .top-title, .bottom-titles
          display: flex
          pointer-events: none

        .top-title
          z-index: 0
          @media (max-width: 1552px)
            font-size: 130px

        .bottom-titles
          gap: 59px

          h1
            font-size: 140px
            @media (max-width: 1552px)
              font-size: 110px
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
            @media (max-width: 1552px)
              padding-inline: 100px
            
            .other-hightlight
              position: absolute
              bottom: 3%

            p
              position: relative
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
        top: 14%
        transform: translateX(-50%)
        pointer-events: none
        max-width: 660px
        max-height: 769px
        z-index: 0

  .hero-bottom
    margin-top: 165px
    background-color: transparent
    height: 830px
    background-image: url("/files/images/png/bg-shape.png")
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    display: flex
    align-items: flex-end
    padding-bottom: 30px

    .bottom-container
      max-width: 1560px
      padding-inline: 20px
      margin: 0 auto
      width: 100%

      .hero-bottom-texts
        display: flex
        flex-direction: column

        .hero-bottom-top-texts
          display: flex
          align-items: start

          .another-title
            font-family: "Oswald"
            font-size: 16px
            font-weight: 600
            text-transform: uppercase

          h2
            font-size: 56px
            line-height: 110%
            font-weight: 500
            max-width: 1180px
            text-align: center
            margin-left: 120px

            .text-color
              color: var(--color-primary)

        .hero-bottom-description
          display: flex
          flex-direction: column
          justify-content: center
          padding-left: 57%
          margin-top: 30px
          
          p
            max-width: 365px

            &:first-child
              margin-bottom: 10px

  .hero-links-wrapper
    background-color: var(--color-white)
    display: flex
    align-items: stretch

    .hero-links-container
      width: fit-content
      overflow: hidden
</style>
