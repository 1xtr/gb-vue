<template>
  <div class="guess">
    <div class="guess__title row">
      <h1>Игра угадайка</h1>
    </div>
    <div class="guess__description row">Угадайте число от 0 до 100.</div>
    <div class="guess__gamer guess__user1">Игрок 1</div>
    <div class="guess__gamer guess__user2">Игрок 2</div>
    <div class="guess__input_user1"><input class="guess__input" type="text" /></div>
    <div class="guess__input_user2"><input class="guess__input" type="text" /></div>
    <div class="guess__help_user1"></div>
    <div class="guess__result"></div>
    <div class="guess__help_user2"></div>
    <div class="guess__check row">
      <button class="guess__button">Check</button>
    </div>
    <div class="guess__newGame row">
      <button class="guess__button">New game</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Guess",
};
</script>

<style lang="sass" scoped>
.row
  grid-column: 1/4
.guess
  margin: 50px 0
  display: grid
  justify-content: center
  align-items: center
  grid-template-columns: repeat(3, 200px)
  grid-template-rows: repeat(7, 50px)
  &__title, &__description
    display: flex
    justify-content: center
    padding: 12px
  &__input
    width: 150px
    padding: 5px
    &_user1
      grid-column: 1/2
    &_user2
      grid-column: 3/4
  &__user1,
  &__user2,
  &__help_user1
    display: flex
    justify-content: center
    grid-column: 1/2
  &__user2,
  &__help_user2
    grid-column: 3/4
  &__result
    grid-column: 2/3
  &__button
    width: 100px
    padding: 5px

</style>
