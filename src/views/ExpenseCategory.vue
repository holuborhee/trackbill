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
    <dashboardSidebar />

    <!-- content -->
    <div class="flex-1 p-10 text-2xl">
      <dashboardHeader
        class="p-10"
        text="Hi, Samuel"
        smallText="Welcome to TrackBill"
      />
      <main class="mt-6">
        <section class="mb-8">
          <main>
            <ul class="flex justify-between">
              <li class="flex-1 mr-4 card bg-blue-600 rounded">
                <a href="#">
                  <div class="flex flex-col p-5">
                    <p
                      class="
                        font-display font-bold
                        text-left
                        font-body
                        text-lg
                        whitespace-no-wrap
                        text-white
                      "
                    >
                      Total Savings
                    </p>
                    <p
                      class="
                        font-display font-bold
                        text-2xl text-left
                        font-display
                        text-xl text-white
                      "
                    >
                      ₦71,000
                    </p>
                  </div>
                </a>
              </li>
              <li class="flex-1 card mr-4 bg-blue-600 rounded">
                <a href="#">
                  <div class="flex flex-col p-5">
                    <p
                      class="
                        font-display font-bold
                        text-left
                        font-body
                        text-lg
                        whitespace-no-wrap
                        text-white
                      "
                    >
                      Needs
                    </p>
                    <p
                      class="
                        font-display font-bold
                        text-2xl text-left
                        font-display
                        text-xl text-white
                      "
                    >
                      ₦53,000
                    </p>
                  </div>
                </a>
              </li>
              <li class="flex-1 mr-4 card bg-blue-600 rounded">
                <router-link :to="{ name: 'single-expense-category' }">
                  <div class="flex flex-col p-5">
                    <p
                      class="
                        font-display font-bold
                        text-left
                        font-body
                        text-lg
                        whitespace-no-wrap
                        text-white
                      "
                    >
                      Wants
                    </p>
                    <p
                      class="
                        font-display font-bold
                        text-2xl text-left
                        font-display
                        text-xl text-white
                      "
                    >
                      ₦25,000
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
          </main>
        </section>
      </main>
    </div>
  </div>
</template>
<script>
import dashboardHeader from "../components/dashboardHeader.vue";
import dashboardSidebar from "../components/dashboardSidebar.vue";
export default {
  name: "ExpenseCategory",
  components: {
    dashboardHeader,
    dashboardSidebar,
  },
};
</script>
<style scoped>
.card {
  height: 120px;
}
</style>