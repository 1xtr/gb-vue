<template>
  <div class="guess">
    <div class="guess__title row">
      <h1>Игра угадайка</h1>
    </div>
    <div class="guess__description row">
      <span v-show="!showGuess">Угадайте число от 0 до 100.</span>
      <span v-show="showGuess">Загаданное число: {{ guessNumber }}</span>
    </div>
    <div class="guess__gamer guess__user1">Игрок 1</div>
    <div class="guess__gamer guess__user2">Игрок 2</div>
    <div class="guess__input_user1">
      <input
        :class="user1.answer > 100 ? 'numberMoreThan100' : ''"
        class="guess__input"
        type="number"
        min="0"
        max="100"
        v-model="user1.answer"
      />
    </div>
    <div class="guess__input_user2">
      <input
        :class="user2.answer > 100 ? 'numberMoreThan100' : ''"
        class="guess__input"
        type="number"
        min="0"
        max="100"
        v-model="user2.answer"
      />
    </div>
    <div class="guess__help_user1">{{ user1.textArea }}</div>
    <div class="guess__help_user2">{{ user2.textArea }}</div>
    <div class="guess__check row">
      <button class="guess__button" @click="check" v-show="showCheck">
        Check
      </button>
      <button class="guess__button" v-show="showNewGame" @click="newGame">
        New game
      </button>
    </div>
    <div class="guess__result row" v-show="tryCount">
      Попытка номер {{ tryCount }}
    </div>
  </div>
</template>

<script>
import Tools from "./Tools";
export default {
  name: "Guess",
  data() {
    return {
      guessNumber: -1,
      tryCount: 0,
      maxTryCount: 100,
      user1: {
        answer: "",
        textArea: "",
      },
      user2: {
        answer: "",
        textArea: "",
      },
      answers: {
        small: "Вы ввели слишком маленькое число",
        big: "Вы ввели слишком большое число",
        victory: "Поздравляю, Вы угадали!",
        warning: "Введите число до 100",
      },
      showGuess: false,
      showNewGame: false,
      showCheck: true,
    };
  },
  methods: {
    getGuess() {
      this.guessNumber = Tools.methods.getRandomNumber(100);
    },
    check() {
      this.compareAnswers(this.user1);
      this.compareAnswers(this.user2);
      this.tryCount++;
    },
    compareAnswers(user) {
      if (user.answer === this.guessNumber) {
        user.textArea = this.answers.victory;
        this.showNewGame = this.showGuess = true;
        this.showCheck = false;
      }
      if (user.answer > this.guessNumber) {
        user.textArea = this.answers.big;
      }
      if (user.answer < this.guessNumber) {
        user.textArea = this.answers.small;
      }
    },
    newGame() {
      this.user1.textArea = this.user2.textArea = "";
      this.user1.answer = this.user2.answer = "";
      this.tryCount = 0;
      this.showCheck = true;
      this.showNewGame = this.showGuess = false;
      this.getGuess();
    },
  },
  mounted() {
    this.getGuess();
  },
  updated() {
    this.user1.answer = +this.user1.answer;
    this.user2.answer = +this.user2.answer;
  },
};
</script>

<style lang="sass" scoped>
.numberMoreThan100
  outline: dashed 3px red
.row
  grid-column: span 2
.guess
  display: grid
  justify-content: center
  align-items: center
  grid-template-columns: repeat(2, 180px)
  grid-template-rows: repeat(7, 50px)
  text-align: center
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
      grid-column: 2/3
  &__user1,
  &__user2,
  &__help_user1,
  &__help_user2
    display: flex
    justify-content: center
    grid-column: 1/2
  &__user2,
  &__help_user2
    grid-column: 2/3
  &__result
    display: flex
    justify-content: center
  &__button
    width: 100px
    padding: 5px
</style>
