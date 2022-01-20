 <template>
  <div class="flex flex-col h-screen justify-between">
      

      <app-header></app-header>
      <main class="flex-grow justify-center item-center">
            <router-view></router-view>
      </main>
        
      <app-footer></app-footer>
  </div>
 
   

</template>

<script>
import AppHeader from './components/partials/Header.vue'
import AppFooter from './components/partials/Footer.vue'

export default {
  components:{
    AppHeader,
    AppFooter,
  }
  
}
</script>