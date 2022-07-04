<template>
  <div>
    <div class="flex">
      {{count}}
      <verify />
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
    'count':Number
  }

  data(){
    return{
      
    }
  }

}
</script>

 