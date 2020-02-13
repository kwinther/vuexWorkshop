import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EditPerson from "../views/EditPerson.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/edit/:personId",
    name: "edit",
    component: EditPerson,
    props: true
  },
  {
    path: "/add/:personId",
    name: "add",
    component: EditPerson
  }
];

const router = new VueRouter({
  routes
});

export default router;
