import { createRouter, createWebHistory } from "vue-router";
import ExpenseCategory from "./views/ExpenseCategory.vue";
import SingleExpenseCategory from "./views/SingleExpenseCategory.vue";
import Landing from "./views/Landing.vue";
import Auth from "./views/Auth.vue";
import Login from "./views/Login.vue";
import Verification from "./views/Verification.vue";
 

 
  


  

const routes =  [
                    {
                      path: "/", 
                      component: Landing, 
                      name:'Landing' 
                    },

                    {
                      path: "/auth", 
                      component: Auth, 
                       
                      children: [
                        {
                          path: "login", 
                          component: Login,
                          name:'Login' 
                        },
                        {
                          path: "verification", 
                          component: Verification,
                          name:'verification' 
                        }
                      ]
                    },

                   
                    { 
                    path: "/expense-category", 
                    component: ExpenseCategory, 
                    name:'expenseCategory' 
                    },

                    { 
                      path: "/single-expense-category", 
                      component: SingleExpenseCategory, 
                      name:'singleExpenseCategory' 
                    },
                  ];
const router = createRouter( {
     
        history: createWebHistory(),
        routes,

  });
export default router;