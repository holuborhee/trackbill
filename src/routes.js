import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import LoginCode from "./views/LoginCode.vue";
import ExpenseCategory from "./views/ExpenseCategory.vue";
import SingleExpenseCategory from "./views/SingleExpenseCategory.vue";
 

 
  


  

const routes =  [
                    {
                       path: "/", 
                       component: {template:"<p>Hello World</p>"}, 
                       name:'home' 
                    },
                    { 
                      path: "/login", 
                      component: Login, 
                      name:'login' 
                    },
                    { 
                    path: "/expense-category", 
                    component: ExpenseCategory, 
                    name:'expense-category' 
                    },

                    { 
                      path: "/single-expense-category", 
                      component: SingleExpenseCategory, 
                      name:'single-expense-category' 
                    },

                    { 
                      path: "/login-code", 
                      component: LoginCode, 
                      name:'login-code' 
                    },

  
                ];
const router = createRouter( {
     
        history: createWebHistory(),
        routes,

  });
export default router;