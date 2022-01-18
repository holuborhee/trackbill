import { createRouter, createWebHistory } from "vue-router";

import LoginForm from "./components/auth/LoginForm.vue";
 import HelloWorld from "./components/HelloWorld.vue";

const routes =  [
        { path: "/", component: HelloWorld, name:'home' },
        { path: "/login", component: LoginForm, name:'login' },

    ];
    const router = createRouter( {
     
        history: createWebHistory(),
        routes,

 
});
export default router;