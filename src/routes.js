import { createRouter, createWebHistory } from "vue-router";
import UserLogin from "./views/UserLogin.vue";
import Dashboard from ".././src/views/DashboardPage/Dashboard.vue";
import SingleExpenseCategory from "./views/SingleExpenseCategory.vue";
import Profile from "./views/Profile.vue";
import outflowGroup from "./views/outflowGroup.vue";
import DashboardOverview from "./views/DashboardPage/DashboardOverview.vue"
import HomeView from "./views/HomeView.vue"
import VerificationPage from "./views/VerificationPage.vue" 

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "home",
  },
  {
    path: "/login",
    component: UserLogin,
    name: "login",
  },
  {
    path: "/authentication",
    name: "verify",
    component: VerificationPage ,
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
