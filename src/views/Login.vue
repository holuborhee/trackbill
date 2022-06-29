<template>
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
        class="mt-4 bg-rgba(255, 255, 255, 0.3) shadow-2xl rounded-xl text-left"
      >
        <img
          src="/images/TrackBill-logo.png"
          alt="trackbill logo"
          class="mx-auto"
          style="width: 100px"
        />

        <div class="py-4 p-10">
          <h2 class="text-2xl font-bold text-center">Sign In</h2>
          <p class="text-center text-sm px-10 py-3 font-bold">
            Sign in without using a password, just enter your email and we’ll
            send you a log in code. Easy!
          </p>
          <form @submit.prevent.email="getVerificationCode">
            <div class="px-10 py-6">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                class="
                  text-center
                  w-full
                  border border-my-btn
                  h-5
                  p-5
                  md-2
                  text-xs
                  bg-none
                  hover:outline:none
                  rounded-md
                "
                v-model="userGmail"
                required
              />
              <div class="flex justify-center items-baseline">
                <button
                  type="submit"
                  class="
                    mt-8
                    bg-primary
                    text-white
                    w-full
                    p-3
                    rounded-md
                    hover:bg-indigo-600
                  "
                >
                  Get Login Code
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="mx-auto my-8">
        <p class="font-bold italic">Privacy Policy and Terms of Service</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userGmail: "",
    };
  },
  props: {
    gmail: String,
  },

  methods: {
    getVerificationCode() {
      this.$router.push("./verification");
    },
  },
};
</script>