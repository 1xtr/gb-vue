<template>
  <div id="nav">
    <router-link to="/">Главная</router-link> |
    <router-link to="/guess">Угадай число</router-link> |
    <router-link to="/passgen">Генератор паролей</router-link> |
    <router-link to="/dishes">Игра Мыльницы</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}
html,
body {
  height: 100%;
}

.body {
  display: grid;
  grid-template-rows: 1fr 100px;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  &__copyrights {
    text-align: center;
    color: #a4a4a4;
    font-size: 20px;
    font-weight: 100;
  }
  background-color: #434445;
}
#app {
  display: grid;
  grid-template-rows: 100px 1fr;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  min-height: 100%;
  min-width: 600px;
}

#nav {
  align-items: center;
  display: flex;
  justify-content: center;

  a {
    padding: 16px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
