<template>



<div class="flex">
        
        <Verify
          v-for="(item, i) in numInputs"
          :key="i"
          :focus="activeInput === i"
          :value="otp[i]"
          :should-auto-focus="shouldAutoFocus"
          @on-change="handleOnChange"
          @on-keydown="handleOnKeyDown"
          @on-focus="handleOnFocus(i)"
          @on-blur="handleOnBlur"
        />
      </div>
</template>


<script>
 
  import Verify from "./Verify.vue";
  
  // keyCode constants
  const BACKSPACE = 8;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;
  const DELETE = 46;
  
  export default {
    
    components: {
      Verify,
    },
    props: {
      numInputs: {
        default: 4,
      },
      shouldAutoFocus: {
        type: Boolean,
        default: false,
      },
    },

    data(){
      return{
        activeInput:0,
        otp:[],
        oldOtp:[]
      }
    },

    methods:{
      handleOnFocus(index){
        this.activeInput = index;
      },

      handleOnBlur(){
        this.activeInput = -1;
      },

      
       checkFilledAllInputs(){
        if (this.otp.join("").length === this.numInputs) {
          return this.$emit("on-complete", this.otp.join(""));
        }
        return "Wait until the user enters the required number of characters";
      },

      focusInput(input){
        this.activeInput = Math.max(Math.min(this.numInputs - 1, input), 0);
      },
      // Focus on next input
      focusNextInput(){
        this.focusInput(this.activeInput + 1);
      },
      // Focus on previous input
      focusPrevInput(){
        this.focusInput(this.activeInput - 1);
      },

      changeCodeAtFocus(value){
        this.oldOtp = Object.assign([], this.otp);
        this.otp[this.activeInput] = value;
       if (this.oldOtp.join("") !== this.otp.join("")) {
          this.$emit("on-change", this.otp.join(""));
          this.checkFilledAllInputs();
        }
      },

   

      handleOnChange(value){
        this.changeCodeAtFocus(value);
        this.focusNextInput();
      },

      handleOnKeyDown(event){
        switch (event.keyCode) {
          case BACKSPACE:
            event.preventDefault();
            this.changeCodeAtFocus("");
            this.focusPrevInput();
            break;
          case DELETE:
            event.preventDefault();
            this.changeCodeAtFocus("");
            break;
          case LEFT_ARROW:
            event.preventDefault();
            this.focusPrevInput();
            break;
          case RIGHT_ARROW:
            event.preventDefault();
            this.focusNextInput();
            break;
          default:
            break;
        }
      },

  }
}
  
  </script>

