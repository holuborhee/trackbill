import { createRouter, createWebHistory } from "vue-router";

import LoginForm from "./components/auth/LoginForm.vue";
import ExpenseCategory from "./components/categories/ExpenseCategory.vue";
  

const routes =  [
                    { path: "/", component: {template:"<p>Hello World</p>"}, name:'home' },
                    { path: "/login", component: LoginForm, name:'login' },
                    { path: "/expense-category", component: ExpenseCategory, name:'expense-category' },

                ];
const router = createRouter( {
     
        history: createWebHistory(),
        routes,

  });
export default router;