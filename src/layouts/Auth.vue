<template>
  <div id="auth">
    <div
      class="
        min-h-screen
        bg-[url('/images/beach-product-background.png')] bg-bottom bg-cover
        text-gray-800
        flex flex-col
        justify-center
        relative
        overflow-hidden
        sm:py-12
      "
    >
      <div class="relative sm:max-w-xl mx-auto text-center">
        <div
          class="
            mt-4
            bg-rgba(255,
            255, 255,
            0.3)
            shadow-2xl
            rounded-xl
            text-left
          "
        >
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>