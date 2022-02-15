<template>
    <div>
       
      
         <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50" v-show="modalActive">

             <div class="relative mx-auto w-auto max-w-2xl">
                 <div class="bg-white w-full rounded shadow-2xl flex flex-col px-6 py-4 justify-center items-center">
                     <div class="text-2xl font-bold">Create WishList</div>
                         <div class="mt-10 sm:mt-0">
                            <div class="">
                              <div class="md:col-span-1">
                              
                              </div>
                              <div class="mt-5 md:mt-0 md:col-span-2">
                                <form action="#">
                                  <div class="shadow overflow-hidden sm:rounded-md">
                                    <div class="px-4 py-5 bg-white sm:p-6">
                                      <div class="">
                                          <div class="px-8 py-6">
                                              <label for="" class="block font-semibold">Amount:</label>  
                                              <input type="text" placeholder="Enter Amount" name="amount" class="border-w-full h-5 px-3 py-5 md-2 hover:outline:none focus-ring-1 focus:ring-indigo-400 rounded-md">
                                          
                                          </div>

                                          <div class="px-8 py-6">
                                              <label for="" class="block font-semibold">Description:</label> 
                                              <textarea placeholder="Enter Description" name="description" class="border-w-full h-5 px-3 py-5 md-2 hover:outline:none focus-ring-1 focus:ring-indigo-400 rounded-md"></textarea> 
                                           
                                          </div>
                                      </div>
                                    </div>
                                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Save
                                          </button>
                                      </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <button class="rounded bg-red-500 px-4 mt-4 py-2 w-3/12 m-auto mb-1" @click="close">
                          Close
                          </button>
                     </div>
                 </div>
           </div>
        <div v-if="modalActive" class="absolute z-40 inset-0 opacity-25 bg-black">

        </div>

    </div>
</template>
 
 
<script>
export default {
    props: ["modalActive"],
    setup(props,  {emit}) {
        const close = () => {
            emit("close");
        }
        return {close}
    }

};
</script>

 