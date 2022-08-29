<template>
  <div class="flex">
      
    <div v-for="(num, i) in count" :key="i" >
      <verify 
      :focus="activeInput === i"
      :modelValue="codeArray[num - 1]" 
      :should-auto-focus="shouldAutoFocus"
      @update:modelValue="setValue"
     
      ></verify>
      
    </div>  
   
  </div>
</template>

<script>
import Verify from '../components/Verify.vue'
export default {
  components:{
    Verify
  },

  data(){
    return{
      activeInput:0
    }
  },
  props:{
    modelValue:{
      type:String,
    },
    count:{
      type:Number
    },
     shouldAutoFocus: {
      type: Boolean,
      default: false,
    },
  },


  emits: ['update:modelValue'],
  computed: {
    codeArray: {
      get() {
        return this.modelValue.split('')
      },
      set(value) {
        this.$emit('update:modelValue', value.join(''))
      }
    }
  },
  methods: {
    setValue(val){
      if(val)
        this.codeArray.push(val);
      else
        this.codeArray.pop();

      this.codeArray = this.codeArray;
    },
 
  },
 
}
</script>

 