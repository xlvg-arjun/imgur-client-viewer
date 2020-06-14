import Vue from "vue";
import VueRouter from "vue-router";
import AppComponent from "../vue/App.vue";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h(AppComponent),
}).$mount('#app');