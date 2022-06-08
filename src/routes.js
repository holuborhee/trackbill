import { createRouter, createWebHistory } from "vue-router";
import ExpenseCategory from "./views/ExpenseCategory.vue";
import SingleExpenseCategory from "./views/SingleExpenseCategory.vue";
import Landing from "./views/Landing.vue";
 

 
  


  

const routes =  [
                    {
                      path: "/", 
                      component: Landing, 
                      name:'Landing' 
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