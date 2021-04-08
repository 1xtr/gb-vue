<template>
  <div
    :id="dish.index"
    class="dish"
    :class="dish.dishClassName"
    v-cloak
    @click="humanStep ? $emit('dishClick', this.dish) : false"
  >
    {{ dish.guess }}
    <img
      id="dice"
      :class="dish.diceClassName"
      :src="dish.markup"
      :alt="dish.dice"
    />
  </div>
</template>

<script>
export default {
  name: "Dice",
  props: {
    humanStep: {},
    dish: {
      type: Object,
    },
  },
};
</script>
<style>
[v-cloak] {
  display: none;
}
</style>
