<template>
  <div>
     
    <input
            ref="input"
            type="text"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            maxlength="1"
            pattern="[0-9]"
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
            min="0"
            max="9"
            @click.left="handleClick"
            @click.right="handleClick"
            @click.middle="handleClick"
            
          />

           
            
  </div>
</template>

<script>
export default {
props: {
  modelValue:{
    type: String
  },
  focus:{
    type: Boolean
  },
  shouldAutoFocus:{
    type: Boolean
  }

},
emits: ['update:modelValue', 'on-focus'],
 

methods:{
    handleClick(e){
       e.target.blur()
    },
},

 mounted() {
     if (this.$refs.input && this.focus && this.shouldAutoFocus) {
      this.$refs.input.focus();
    }
  },

}
</script>

 

 