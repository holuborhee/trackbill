<template>
  <div>

    <input
        type="text"
        ref="input"
        min="0"
        max="9"
        maxlength="1"
        pattern="[0-9]"
        v-model="model"
        class="
              text-center
              w-16
              h-16
              border-b-2 border-primary
              md-2
              text-xs
              bg-slate-100
              hover:outline:none
              m-2
              text-5xl
            "
        @input="handleOnChange"
        @keydown="handleOnKeyDown"
        @focus="handleOnFocus"
        @blur="handleOnBlur"
        @click.left="handleClick"
        @click.right="handleClick"
        @click.middle="handleClick"
      />
        
  </div>
</template>


<script>
 
  
  export default {
    props: {
      value: {
        type: [String, Number],
      },
      focus: {
        type: Boolean,
      },
      shouldAutoFocus: {
        type: Boolean,
      },
      
       
    },

    emits: ["on-change", "on-keydown", "on-paste", "on-focus", "on-blur"],

    data(){
      return{
        model:"",
      }
    },

    methods:{
      handleClick(e){
       e.target.blur()
    },

    handleOnChange(){
        this.model = this.model.toString();
        if (this.model.length > 1) {
          this.model = this.model.slice(0, 1);
        }
        return this.$emit("on-change", this.model);
    },

    handleOnKeyDown(event){
        const keyEvent = event || window.event;
        const charCode = keyEvent.which ? keyEvent.which : keyEvent.keyCode;
        if (
          this.isCodeNumeric(charCode) ||
          [8, 9, 13, 37, 39, 46, 86].includes(charCode)
        ) {
          this.$emit("on-keydown", event);
        } else {
          // keyEvent.preventDefault();
        }
      },

      handleOnFocus(){
        this.$refs.input.focus();
        return this.$emit("on-focus");
      },

      handleOnBlur(){
        this.$emit("on-blur");
      },

      isCodeNumeric(charCode) {
      // numeric keys and numpad keys
      return (charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105);
    }
},

    watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.model = newValue;
      }
    },
 
    focus(newFocusValue, oldFocusValue) {
     
      if (oldFocusValue !== newFocusValue && (this.$refs.input && this.focus)) {
        this.$refs.input.focus();
        this.$refs.input.select();
      }
    },
  },

    mounted(){
        if (this.$refs.input && this.focus && this.shouldAutoFocus) {
          this.$refs.input.focus();
          
        }
      }
  }
  </script>
   

