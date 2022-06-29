 <template>
  <div class="flex flex-col h-screen justify-between">
      

      <TheHeader /> 
      <main class="flex-grow justify-center item-center">
            <router-view></router-view>
      </main>
        
       
  </div>
 
   

</template>

<script>
import TheHeader from './components/TheHeader.vue'

 
export default {
  components:{
    TheHeader,
    
  
  }
  
}
</script>

