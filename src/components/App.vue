<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import LoginForm from './auth/LoginForm.vue'
 

 
</script>

<template>
  <div>
      <nav class="bg-indigo-500 shadow-lg">
        <div class="container mx-auto">
          <div class="sm:flex justify-around">
            <a href="indexs.html" class="text-white text-3xl font-bold p-3">TrackBill</a>
            <ul class="text-grey-400 sm:self-center text-xl border-t sm:border-none">
                <li class="sm:inline-block">
                    <a href="indexs.html" class="p-3 hover:text-white" >Home</a>
                </li>
                <li class="sm:inline-block">
                    <a href="login.html" class="p-3 hover:text-white" >Login</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
 
   
 <router-view />
  </div>
 
   

</template>
 