<template>
  <div class="passgenContainer">
    <PasswordGenerator />
  </div>
</template>
<script>
import PasswordGenerator from "../containers/PasswordGenerator";
export default {
  name: "Other",
  components: {
    PasswordGenerator,
    // PasswordGenerator: () =>import("@/components/PasswordGenerator")
  },
};
</script>

<style lang="sass">
.passgenContainer
  display: flex
  justify-content: center
  align-items: flex-start
</style>
