<template>
  <div>
    <DishesComp ref="dishesRef" />
  </div>
</template>

<script>
import DishesComp from "../containers/Dishes";
export default {
  name: "Dishes",
  components: {
    DishesComp,
  },
};
</script>

<style scoped></style>
