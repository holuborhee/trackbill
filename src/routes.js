import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Dashboard from ".././src/views/DashboardPage/Dashboard.vue";
import SingleExpenseCategory from "./views/SingleExpenseCategory.vue";
import Profile from "./views/Profile.vue";
import outflowGroup from "./views/outflowGroup.vue";
import DashboardOverview from "./views/DashboardPage/DashboardOverview.vue"

const routes = [
  {
    path: "/",
    component: { template: "<p>Hello World</p>" },
    name: "home",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    children: [
      {
        path: 'overview',
        component: DashboardOverview,
        name: "overview"
      },
      {
        path: "profile",
        component: Profile,
        name: "profile",
      },
        {
          path: "Outflow-Group",
          component: outflowGroup,
          name: "outflow-group",
        },
    ]
  },
  {
    path: "/single-expense-category",
    component: SingleExpenseCategory,
    name: "single-expense-category",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
