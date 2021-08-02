import Vue from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import VueRouter from "vue-router";
import titleMixin from "./mixins/titleMixin";

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.mixin(titleMixin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
