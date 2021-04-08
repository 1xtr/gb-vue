<template>
  <div>
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
