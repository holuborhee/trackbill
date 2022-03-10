<template>
  <div
    class="
      sidebar
      bg-blue-800
      text-blue-100
      w-64
      space-y-6
      py-7
      px-2
      absolute
      inset-y-0
      left-0
      transform
      -translate-x-full
      md:relative md:translate-x-0
      transition
      duration-200
      ease-in-out
    "
  >
    <!-- logo -->
    <a href="#" class="text-white flex items-center space-x-2 px-4">
      <span class="text-2xl font-extrabold">TrackBill</span>
    </a>

    <!-- nav -->
    <nav>
      <router-link
        :to="{name: 'overview'}"
        class="
          block
          py-5
          px-4
          rounded
          transition
          duration-200
          hover:bg-blue-700 hover:text-white
          active
        "
      >
        Overview
      </router-link>
      <router-link
        to="/dashboard/outflow-group"
        class="
          block
          py-5
          px-4
          rounded
          transition
          duration-200
          hover:bg-blue-700 hover:text-white
        "
      >
        Outflow
      </router-link>

      <router-link
        :to="{name: 'profile'}"
        class="
          block
          py-5
          px-4
          rounded
          transition
          duration-200
          hover:bg-blue-700 hover:text-white
        "
      >
        Profile
      </router-link>
      <router-link
        :to="{name: 'login'}"
        class="
          block
          my-20
          py-5
          px-4
          rounded
          transition
          duration-200
          hover:bg-blue-700 hover:text-white
        "
      >
        Logout
      </router-link>
      
    </nav>
  </div>
</template>
<script>
export default {
  name: "DashboardSidebar",
};
</script>