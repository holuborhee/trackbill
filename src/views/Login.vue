<template>
  <img
    src="/images/trackbill-logo.png"
    alt="trackbill logo"
    class="mx-auto"
    style="width: 100px"
  />

  <div class="py-4 p-10">
    <h2 class="text-2xl font-bold text-center">Sign In</h2>
    <p class="text-center text-sm px-10 py-3 font-bold">
      Sign in without using a password, just enter your email and we’ll send you
      a log in code. Easy!
    </p>
    <form @submit.prevent="getVerificationCode">
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
          v-model="userEmail"
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
    <div class="mx-auto my-8 justify-center flex">
      <p class="font-bold italic">Privacy Policy and Terms of Service</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userEmail: "",
    };
  },
  methods: {
    getVerificationCode() {
      this.$router.push("./verify");
    },
  },
};
</script>