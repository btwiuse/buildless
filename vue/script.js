// https://vuejs.org/guide/quick-start.html
// https://vuejs.org/guide/essentials/application.html
import { createApp, ref } from "vue";

createApp({
  setup() {
    const count = ref(0);
    return { count };
  },
  template: `<button @click="count++">Clicked {{ count }} times</button>`,
}).mount("#app");
