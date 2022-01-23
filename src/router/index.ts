import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Todo from "@/views/Todo/Todo.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Todo",
    name: "Todo",
    component: Todo
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

console.log("history", process.env.BASE_URL)

export default router;