<template>
<div class="relative min-h-screen md:flex">
<div class="flex-1 text-2xl">
    <DashboardHeader class="p-10" text="Outflow" smallText="Split your money to different categories"/>
</div>
</div>
</template>
<script>
import DashboardHeader from "../components/DashboardHeader.vue"

export default {
    components:{
        DashboardHeader,
        
    },
    
}
</script>