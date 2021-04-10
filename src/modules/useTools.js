// import { ref } from "vue";
export default function () {
  function getRandomNumber(max = 99) {
    return Math.round(Math.random() * max);
  }
  function getRandomNumberFromRange(min = 0, max = 99) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return {
    getRandomNumber,
    getRandomNumberFromRange,
  };
}
