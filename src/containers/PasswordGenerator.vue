<template>
  <div class="pass-gen-form">
    <form>
      <fieldset>
        <legend>Рецепт пароля</legend>
        <p>
          <label>
            <input
              type="checkbox"
              v-bind:value="LettersUp"
              v-model="StringToPassGen"
            />
          </label>
          Заглавные буквы A-Z
        </p>
        <p>
          <label>
            <input
              type="checkbox"
              v-bind:value="LettersLow"
              v-model="StringToPassGen"
              class="checked"
            />
          </label>
          Строчные буквы a-z
        </p>
        <p>
          <label>
            <input
              type="checkbox"
              v-bind:value="Numbers"
              v-model="StringToPassGen"
              class="checked"
            />
          </label>
          Цифры 0-9
        </p>
        <p>
          <label>
            <input
              type="checkbox"
              v-bind:value="Symbols"
              v-model="StringToPassGen"
            />
          </label>
          Спецсимволы @#{];
        </p>
        <p>
          <label
            >Длина пароля:
            <input
              type="number"
              v-model.number="passLen"
              maxlength="2"
              size="1"
              min="6"
              max="50"
            />
          </label>
        </p>
      </fieldset>
      <p>
        <input type="button" value="Содать пароль!" @click="passGeneration()" />
      </p>
      <p id="password">
        <label>
          <input type="text" readonly v-model="password" />
        </label>
      </p>
      <p id="copyButton">
        <input
          type="button"
          value="Скопировать пароль в буфер обмена"
          @click="copyToClipBoard()"
        />
      </p>
    </form>
  </div>
</template>

<script>
import Tools from "./Tools";
export default {
  name: "PasswordGenerator",
  methods: {
    setDefaultPasswordRecipe() {
      let targets = document.querySelectorAll(".checked");
      targets.forEach((item) => {
        item.checked = true;
      });
      this.StringToPassGen = [
        "ZYXWVUTSRQPONMLKJIHGFEDCBA",
        "0123456789",
        "zyxwvutsrqponmlkjihgfedcba",
      ];
    },
    passGeneration() {
      this.password = "";
      let str = this.StringToPassGen.join("");
      for (let i = 1; i <= this.passLen; i++) {
        let randomSymbol = str[Tools.methods.getRandomNumber(str.length)];
        this.password += randomSymbol;
      }
      this.showPwd = true;
    },
    copyToClipBoard() {
      navigator.clipboard
        .writeText(this.password)
        .then(() => {
          // Получилось!
          console.log("Pass in buffer");
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    },
  },
  data() {
    return {
      checked: true,
      password: "",
      showPwd: false,
      LettersUp: "ZYXWVUTSRQPONMLKJIHGFEDCBA",
      LettersLow: "zyxwvutsrqponmlkjihgfedcba",
      Numbers: "0123456789",
      Symbols: "!;%:?*()_+=-~<>,.[]",
      StringToPassGen: [],
      passLen: 10,
      tools: Tools,
    };
  },
  mounted() {
    this.setDefaultPasswordRecipe();
  },
};
</script>

<style scoped>
.pass-gen-form {
  min-width: 200px;
  padding: 0 calc(50vw - 500px / 2);
  text-align: left;
}
.pass-gen-form {
  /*margin: 120px auto;*/
  /*border-style: solid;
  border-width: 0.2px;*/
  width: 300px;
  height: 300px;
}
.pass-gen-form form {
  line-height: 1.5;
}
.pass-gen-form fieldset {
  padding: 12px;
  margin-bottom: 10px;
}
</style>
