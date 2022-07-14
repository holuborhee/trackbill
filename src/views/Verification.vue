<template>
  <div class="mt-4 bg-rgba(255, 255, 255, 0.3) shadow-2xl rounded-xl text-left">
    <div class="py-4 p-10">
      <h2 class="text-3xl font-extrabold text-center">Code Verification</h2>
      <p class="text-center text-sm px-10 py-3 font-bold" userGmail>
        We just sent a code to your email:
        <strong class="font-black">Johndoe@gmail.com</strong> <br />Please enter
        the code below
      </p>
      <form action="#" v-on:submit.prevent="">
        <div class="px-10 py-8 flex my-8 justify-center items-center">
          <manage-verify :count='num' v-model="code"/>
        </div>
        <button
          type="submit"
          class="
            px-10
            mx-auto
            flex
            justify-center
            w-80
            bg-primary
            text-white
            items-center
            text-center
            p-3
            rounded-md
            hover:bg-indigo-600
          "
          @click="send"
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
  </div>
</template>

<script>
import ManageVerify from '../components/ManageVerify.vue'
export default {
  components:{
    ManageVerify
  },


  data(){
    return{
      num:4,
      code:''
    }
  },

  methods:{
    send(){
      console.log(this.code)
      }
  }

}
</script>
 