<template>
<TheHeader />
  <div
    class="
      min-h-screen
      bg-[url('/images/landing-page.png')] bg-r bg-bottom bg-cover
      overflow-hidden
      sm:py-12
    "
  >
    <div class="w-96 px-8 mx-5 py-5 box">
      <h1 class="font-black text-4xl p-4">
        This is the smartest method to budget your money.
      </h1>
      <p class="text-base py-3 px-4">
        We have created a method to help you budget every received income and
        monitor planned expenses.
      </p>
      <button
        class="
          my-3
          mx-2
          px-4
          py-2
          bg-my-btn
          text-white
          rounded-full
          bg-gray-900
          w-36
        "
      >
        Join
      </button>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
export default {
  components:{
    TheFooter,
    TheHeader
  }
}
</script>