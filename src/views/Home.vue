<template>
  <div class="aboutMe">
    <h1 class="aboutMe__h1">Личный сайт студента GeekBrains</h1>

    <div class="aboutMe__block">
      <div class="aboutMe__img">
        <img src="../assets/whoami.jpg" alt="Iam" />
      </div>
      <div class="aboutMe__text">
        <p class="aboutMe__p">
          <b>Добрый день</b>. Меня зовут <i>Алексей</i>. Я совсем недавно начал
          программировать, однако уже кое-чему научился.
        </p>

        <p class="aboutMe__p">
          В этом мне помог IT-портал
          <a href="https://geekbrains.ru" target="_blank">GeekBrains</a>
        </p>
        <p class="aboutMe__p">
          Также я занимаюсь продажей и монтажем слаботочных систем. В основном,
          делаю под ключ системы видеонаблюдения.
        </p>
        <p>
          На этом сайте вы сможете сыграть в несколько игр, которые я написал во
          время учебы. Это конечно не квака третья и не контра. Но, это как
          научиться ходить. Ты что-то делаешь, у тебя получается, и тебя это еще
          больше затягивает.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="sass">
.aboutMe
  display: flex
  justify-content: flex-start
  align-items: center
  flex-direction: column
  padding: 0 calc(50vw - 900px / 2)
  &__h1
    padding: 32px
  &__block
    display: flex
  &__text
    padding-left: 32px
    min-width: 300px
  &__p
    padding-bottom: 16px
</style>
