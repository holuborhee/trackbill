<template>
  <div class="flex">
      
    <div v-for="num in count" :key="num" >
      <verify v-model="codeArray[num - 1]"></verify>
      
    </div>  
   
  </div>
</template>

<script>
import Verify from '../components/Verify.vue'
export default {
  components:{
    Verify
  },
props: ['modelValue', 'count'],
emits: ['update:modelValue'],
  data(){
    return{
       codeArray:[],
      
    }
  },
  mounted(){
    this.codeArray = this.modelValue.split('')
  },

  watch: {
    codeArray: {
      handler(newValue) {
        this.$emit('update:modelValue', newValue)
      },
      deep: true
    }
  }

  

}
</script>

 