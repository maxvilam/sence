import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/EquiposAccesorios",
    name: "Equipos y Accesorios",

    component: () => import("../views/EquiposAccesorios.vue"),
  },
  {
    path: "/*",
    name: "Error 404",
    component: () => import("../views/PaginanoExiste.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
