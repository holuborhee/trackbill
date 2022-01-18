import { createRouter, createWebHistory } from "vue-router";

import LoginForm from "./components/auth/LoginForm.vue";
 

const routes =  [
        { path: "/", component: {template:"<p>Homepage</p>"}},
        { path: "/login", component: LoginForm, name:'login' },

    ];
    const router = createRouter( {
     
        history: createWebHistory(),
        routes,

 
});
export default router;