<template>
  <login-background v-slot:image>
    <div class="relative sm:max-w-xl mx-auto text-center">
      <base-card>
        <div class="py-4 p-10">
          <h2 class="text-3xl font-extrabold text-center">Code Verification</h2>
          <p class="text-center text-sm px-10 py-3 font-bold" userGmail>
            We just sent a code to your email:
            <strong class="font-black">Johndoe@gmail.com</strong> <br />Please
            enter the code below
          </p>
          <form action="/authentication">
            <div class="px-10 py-8 flex my-8 justify-center items-center">
              <input
                type="number"
                name="email"
                class="
                  text-center
                  w-16
                  h-16
                  border-b-2 border-my-btn
                  h-5
                  md-2
                  text-xs
                  bg-slate-100
                  hover:outline:none
                  m-2
                  text-5xl
                "
                min="0"
                max="9"
              />
              <input
                type="number"
                name="email"
                class="
                  text-center
                  w-16
                  h-16
                  border-b-2 border-my-btn
                  h-5
                  md-2
                  text-xs
                  bg-slate-100
                  hover:outline:none
                  m-2
                  text-5xl
                "
                min="0"
                max="9"
              />
              <input
                type="number"
                name="email"
                class="
                  text-center
                  w-16
                  h-16
                  border-b-2 border-my-btn
                  h-5
                  md-2
                  text-xs
                  bg-slate-100
                  hover:outline:none
                  m-2
                  text-5xl
                "
                min="0"
                max="9"
              />
              <input
                type="number"
                name="email"
                class="
                  text-center
                  w-16
                  h-16
                  border-b-2 border-my-btn
                  h-5
                  md-2
                  text-xs
                  bg-slate-100
                  hover:outline:none
                  m-2
                  text-5xl
                "
                min="0"
                max="9"
              />
              <input
                type="number"
                name="email"
                class="
                  text-center
                  w-16
                  h-16
                  border-b-2 border-my-btn
                  h-5
                  text-xs
                  bg-slate-100
                  hover:outline:none
                  m-2
                  text-5xl
                "
                min="0"
                max="9"
              />
              <input
                type="number"
                name="email"
                class="
                  text-center
                  w-16
                  h-16
                  border-b-2 border-my-btn
                  h-5
                  md-2
                  text-xs
                  bg-slate-100
                  hover:outline:none
                  m-2
                  text-5xl
                "
                min="0"
                max="9"
              />
              <div></div>
            </div>
            <button
              type="submit"
              class="
                px-10
                mx-auto
                flex
                justify-center
                w-80
                bg-my-btn
                text-white
                items-center
                text-center
                p-3
                rounded-md
                hover:bg-indigo-600
              "
            >
              Confirm Code
            </button>
            <p class="justify-center flex text-sm mx-auto py-8">
              Didn’t receive the code?<span class="text-my-btn ml-1">
                <strong>Resend Code</strong></span
              >
            </p>
          </form>
        </div>
      </base-card>
    </div>
  </login-background>
</template>
<script>
import LoginBackground from "../components/LoginBackground.vue";
import BaseCard from "../components/BaseCard.vue";
export default {
  components: {
    LoginBackground,
    BaseCard,
  },
};
</script>