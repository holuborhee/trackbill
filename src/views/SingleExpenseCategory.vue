<template>


    <div class="p-4 m-4 bg-white rounded flex flex-col justify-center justify-between">
            <div class="flex justify-center justify-between">
                <h1 class="text-2xl text-gray-700 mb-4">Wants</h1>
              
              <Modal @close="toggleModal" :modalActive = "modalActive">
              </Modal> 
                <button
                class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600"
                @click="toggleModal">Create Wishlist
                </button>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-blue-200">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Balance: N25,000</div>
                    <div class="font-bold text-xl mb-2">Wishlist Costs Sum: N90,000</div>

                    <p class="font-bold text-xl text-base">
                        Wishlist Count: 9
                     </p>
                 </div>
                
            </div>
 
    
              
            <div class="flex justify-center mb-4 text-2xl text-gray-600">
                <p>Wishlists</p>
            </div>
        <div class="flex justify-center">
            
            <table class="table-auto justify-center bg-gray-100">
                    
                <thead>
                    <tr>
                         
                        <th class="border px-4 py-2">Description</th>
                        <th class="border px-4 py-2">Amount</th>
                     
                    </tr>
                </thead>

                <tbody>
                        <tr>
                            <td class="border px-4 py-2">Buy Washing Machine</td>
                            <td class="border px-4 py-2">N23,000</td>
                             
                        </tr>

                        <tr>
                           <td class="border px-4 py-2">Buy Air Condition</td>
                            <td class="border px-4 py-2">N53,000</td>
                        </tr>

                        <tr>
                          <td class="border px-4 py-2">Buy Sound system</td>
                            <td class="border px-4 py-2">N93,000</td>
                        </tr>

                </tbody>

            </table>
        </div>
        
    </div>

      
    
</template>

 
<script>
import Modal from '../components/WishListModal.vue'
import {ref} from 'vue'
export default {
    name:"test",
    components:{
        Modal,
    },
    setup(){
        const modalActive = ref(false);

        const toggleModal = () => {
            modalActive.value = !modalActive.value
        }

        return { modalActive,toggleModal };
    }
    
}
</script>