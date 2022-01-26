 <template>
  <div class="flex flex-col h-screen justify-between">
      

      <the-header></the-header>
      <main class="flex-grow justify-center item-center">
            <router-view></router-view>
      </main>
        
      <the-footer></the-footer>
  </div>
 
   

</template>

<script>
import TheHeader from './components/partials/TheHeader.vue'
import TheFooter from './components/partials/TheFooter.vue'

export default {
  components:{
    TheHeader,
    TheFooter,
  }
  
}
</script>