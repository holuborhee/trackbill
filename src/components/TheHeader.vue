<template>
  <div class="w-full h-full">
    <nav
      class="
        flex
        items-center
        bg-gray-400
        p-1
        flex-wrap
        shadow-md shadow-gray-500
      "
    >
      <router-link
        :to="{ name: 'Landing' }"
        class="p-2 mr-4 inline-flex items-center"
      >
        <img
          src="images/trackbill-logo.png"
          alt=""
          width="60"
          class="fill-current ml-16"
        /><span
          class="
            text-2xl text-blue-900 text-center
            font-bold
            uppercase
            tracking-wide
          "
          >TRACKBILL</span
        ></router-link
      >
      <div
        class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
      >
        <div
          class="
            lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto
            w-full
            lg:items-center
            items-start
            flex-col
            lg:h-auto
            flex
            justify-between
            sm:self-center
            text-xl
            border-t
            sm:border-none
            text-gray-900
          "
        >
          <div class="flex space-x-16 mr-80">
            <a
              href="#"
              class="
                px-3
                py-2
                rounded
                text-gray-900
                hover:bg-gray-900 hover:text-white
              "
            >About Us
            </a>
            <a
              href="#"
              class="
                px-3
                py-2
                rounded
                text-gray-900
                hover:bg-gray-900 hover:text-white
              "
            >Feautures
            </a>
            <a
              href="#"
              class="
                px-3
                py-2
                rounded
                text-gray-900
                hover:bg-gray-900 hover:text-white
              "
            >Contact
            </a>
          </div>
           <router-link
            :to="{ name: 'login' }"
            class="
              px-3
              py-1
              bg-gray-400
              text-gray-900
              items-center
              justify-center
              font-semibold
              hover:bg-gray-900 hover:text-white
              border border-blue-900
              rounded-lg
            ">Sign In</router-link
          >
          
        </div>
      </div>
    </nav>
  </div>
</template>

