 <template>
  <div class="flex flex-col h-screen justify-between">
      

      <TheHeader /> 
      <main class="flex-grow justify-center item-center">
            <router-view></router-view>
      </main>
        
      <TheFooter />
  </div>
 
   

</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import WishListModal from './components/WishListModal.vue'

export default {
  components:{
    TheHeader,
    TheFooter,
    WishListModal,
  }
  
}
</script>