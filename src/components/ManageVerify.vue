<template>
  <div class="flex">
    <div v-for="num in count" :key="num" >
      <verify />
    </div>  
  </div>
</template>

<script>
import Verify from '../components/Verify.vue'
export default {
  components:{
    Verify
  },

  props: {
    'count': Number
  },

  data(){
    return{
      
    }
  },
  

}
</script>

 