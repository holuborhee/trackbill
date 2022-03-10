<template>
  <div class="relative min-h-screen md:flex">
    <!-- mobile menu bar -->
    <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
      <!-- mobile menu button -->
      <button
        class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
      ></button>
    </div>

    <!-- sidebar -->
  <DashboardSidebar/>

    <!-- content -->
    <div class="flex-1 p-10 text-2xl">
 
      <main class="mt-6">
        
        <router-view/>
        <router-view name="helper"/>
      </main>
    </div>
    
  </div>
</template>
<script>

import DashboardSidebar from "../../components/dashboardSidebar.vue"

export default {
  name: "Dashboard",
  components: {
   DashboardSidebar,
   
   
  },
};
</script>
