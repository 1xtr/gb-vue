import devtools from "@vue/devtools";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
if (process.env.NODE_ENV === "development") {
  devtools.connect("", 8080);
}
createApp(App).use(router).mount("#app");
