import Vue from "vue";
import VueRouter from "vue-router";
import HomeWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: (to) => {
      return { name: "home", query: to.query };
    },
  },
  {
    path: "/Bem_vindo",
    name: "home",
    component: HomeWorld,
  },
  {
    path: "/Tela_Principal",
    name: "principal",
    component: () => import("../views/TelaPrincipal.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
