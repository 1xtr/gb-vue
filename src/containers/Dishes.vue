<template>
  <div class="field center">
    <div class="tutorial">
      Игра в мыльницы =). Кликаем на блок с вопросом, откроется игровая кость,
      следом откроется выбор компьютера. Reset обнуляет победы. Open All откроет
      все мыльницы после выбора.
    </div>
    <div class="top top__buttons">
      <button class="button" id="new-game" @click="newGame">New game</button>
      <button class="button" id="resetWins" @click="resetWins">Reset</button>
      <button
        class="button"
        v-show="showAllButton"
        id="showAllDishes"
        @click="showAllDishes"
      >
        Show All
      </button>
    </div>
    <div class="top top__user">
      Игрок:<span class="score__user_current">{{ humanScore.totalWins }}</span>
    </div>
    <div class="top top__comp">
      Компьютер:<span class="score__comp_current">{{
        computerScore.totalWins
      }}</span>
    </div>
    <Dish
      v-for="dish of dishes"
      :key="dish.index"
      :dish="dish"
      @dishClick="startGame"
      :humanStep="humanStep"
    />
  </div>
</template>

<script>
import Dish from "../components/DishItem";
import Tools from "./Tools";
export default {
  name: "Dishes_comp",
  components: { Dish },
  data() {
    return {
      draw: false,
      humanStep: true,
      humanScore: {
        totalWins: 0,
        targetDish: {},
      },
      computerScore: {
        totalWins: 0,
        targetDish: {},
      },
      dishes: [],
      dices: [],
      showAllButton: false,
    };
  },
  methods: {
    getDices() {
      for (let i = 0; i < 12; i++) {
        this.dices[i] = Tools.methods.getRandomNumberFromRange(1, 6);
      }
    },
    createDishes() {
      for (let j = 0; j < 12; j++) {
        // Создаем массив объектов с мыльницами
        this.dishes.push({
          index: j,
          dice: this.dices[j], // получаем игровую кость
          markup: require(`../assets/dices/${this.dices[j]}.png`), // получаем путь до картинки игровой кости по айди
          diceClassName: "hidden",
          dishClassName: "",
          guess: "?",
        });
      }
    },
    startGame(obj) {
      this.humanScore.targetDish = obj; // clicked Component assign to Human
      this.gameSteps(this.humanScore.targetDish); // do steps with DIV etc.
      this.humanStep = false; // set next step to Computer
      this.computerChoice(); // Computer step
      this.gameSteps(this.computerScore.targetDish); // do steps with DIV computer chosed etc.
      this.compareDices();
      this.showAllButton = true;
    },
    gameSteps(item) {
      this.paintDish(item); // paint Human clicked Node to some style
      item.diceClassName = item.guess = ""; // Show dice and hide guess symbol
    },
    paintDish(el) {
      if (this.humanStep) {
        el.dishClassName = "humanChoice";
      } else {
        el.dishClassName = "computerChoice";
      }
    },
    computerChoice() {
      do {
        this.computerScore.targetDish = this.dishes[
          Tools.methods.getRandomNumberFromRange(0, 11)
        ];
      } while (this.humanScore.targetDish === this.computerScore.targetDish);
    },
    compareDices() {
      let gamerScore = this.humanScore.targetDish.dice;
      let compScore = this.computerScore.targetDish.dice;
      if (gamerScore > compScore) {
        this.humanScore.totalWins++;
      } else if (gamerScore < compScore) {
        this.computerScore.totalWins++;
      } else {
        this.draw = true;
      }
    },
    newGame() {
      this.showAllButton = false;
      this.humanStep = true;
      this.dishes = [];
      this.getDices(); // Генерим рандомно число на игровой кости от 1 до 6 включительно
      this.createDishes();
    },
    resetWins() {
      this.humanScore.totalWins = this.computerScore.totalWins = 0;
    },
    showAllDishes() {
      this.dishes.forEach((item) => {
        item.diceClassName = item.guess = "";
      });
    },
  },

  mounted() {
    this.newGame();
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.center {
  padding: 0 calc(50vw - 900px / 2);
}

.hidden {
  display: none;
}

.field {
  display: grid;
  grid-template: 80px 60px 100px 100px / repeat(6, 1fr);
  gap: 16px;
  align-content: center;
  margin: 50px 10px;
}

.tutorial {
  grid-column: 1/7;
  padding: 16px;
  background-color: #35d05d;
}

.top {
  padding: 16px;
  min-height: 60px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.top__buttons {
  grid-column: 1/3;
}
.top__user {
  grid-column: 3/5;
}
.top__comp {
  grid-column: 5/7;
}

.button {
  padding: 5px;
  font-size: 16px;
}

#new-game {
  margin-right: 8px;
}

#resetWins {
  margin-right: 8px;
}

.dish {
  position: relative;
  min-width: 50px;
  height: 100px;
  background-color: #ccc;
  border: solid 1px red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
}

#dice {
  width: 50px;
  height: 50px;
}

.guess {
  font-size: 32px;
  font-weight: bold;
}

.humanChoice {
  border: 5px solid red;
}
.computerChoice {
  border: 5px solid yellowgreen;
}
</style>
