import Vue from "vue";
import VueRouter from "vue-router";

import "reset-css/reset.css";

import AppComponent from "../vue/App.vue";
import routes from "./routes";

import "../scss/index.scss";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h(AppComponent),
}).$mount('#app');