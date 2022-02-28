<template>
 <div class="relative min-h-screen md:flex">
<dashboardSidebar/>
<div class="flex-1 p-10 text-2xl">
    <dashboardHeader class="p-10" text="Profile" smallText="samuellawal60@gmail.com"/>
    <div class="h-40 grid grid-cols gap-4 place-content-center">
    <i class="fa fa-user mx-auto fa-3x"></i>
 </div>
     <h2 class="font-bold text-3xl text-center">Samuel</h2>
    <p class="text-sm text-gray-400 font-body leading-8 text-center">samuellawal60@gmail.com</p>
   <button class="rounded-full bg-cyan-500 text-white text-sm px-5 h-8">Edit Profile</button>
</div>
</div>
</template>
<script>
import dashboardHeader from "../components/dashboardHeader.vue"
import dashboardSidebar from "../components/dashboardSidebar.vue"
export default {
    name: "profile",
     components: {
        dashboardHeader,
        dashboardSidebar
    },
}
</script>