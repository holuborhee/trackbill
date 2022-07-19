<template>
  <div class="flex">
      
    <div v-for="num in count" :key="num" >
      <verify :modelValue="codeArray[num - 1]" @update:modelValue="setValue"></verify>
      
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
    }
  }
}
</script>

 