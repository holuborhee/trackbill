<template>
<section class="mb-8">
          <main>
            <ul class="flex justify-between">
              <li v-for= "(card, i) in cards" :key="i" class="flex-1 mr-4 card bg-blue-600 rounded">
                <router-link :to="{ name: 'single-expense-category' }">
                  <div class="flex flex-col p-12">
                    <p
                      class="
                        font-display font-bold
                        text-left
                        font-body
                        text-lg
                        whitespace-no-wrap
                        text-white
                      "
                    >
                      {{i}}
                    </p>
                    <p
                      class="
                        font-display font-bold
                        text-2xl text-left
                        font-display
                        text-xl text-white
                      "
                    >
                     ₦{{card}}
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
          </main>
        </section>
</template>
<script>
export default {
    name: "OutflowGroupCard",
    data() {
      return{
    cards : {
          Wants: 25000,
          Needs: 53000,
          Savings: 71000,
        }
      }
    }
}
</script>