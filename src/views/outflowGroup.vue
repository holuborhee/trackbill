<template>
<div class="relative min-h-screen md:flex">
<dashboardSidebar/>
<div class="flex-1 p-10 text-2xl">
    <dashboardHeader class="p-10" text="Outflow" smallText="Split your money to different categories"/>
</div>
</div>
</template>
<script>
import dashboardHeader from "../components/dashboardHeader.vue"
import dashboardSidebar from "../components/dashboardSidebar.vue"
export default {
    components:{
        dashboardHeader,
        dashboardSidebar
    },
    
}
</script>