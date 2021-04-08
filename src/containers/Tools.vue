<script>
export default {
  name: "Tools",
  methods: {
    copyToClipboard(obj) {
      navigator.clipboard
        .writeText(obj)
        .then(() => {
          console.log("Pass in buffer");
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    },
    getRandomNumber(max = 99) {
      return Math.round(Math.random() * max);
    },
    getRandomNumberFromRange(min = 0, max = 99) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>
