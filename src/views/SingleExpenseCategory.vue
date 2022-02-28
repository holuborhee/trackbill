<template>
  <div
    class="
      p-4
      m-4
      bg-white
      rounded
      flex flex-col
      justify-center justify-between
    "
  >
    <div class="flex justify-center justify-between">
      <h1 class="text-2xl text-gray-700 mb-4">Wants</h1>

      <Modal v-model="modalActive" @create-wish-list="addWishList($event)">
      </Modal>
      <button
        class="
          mt-4
          bg-indigo-500
          text-white
          py-2
          px-6
          rounded-md
          hover:bg-indigo-600
        "
        @click="modalActive = true"
      >
        Create Wishlist
      </button>
    </div>

    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-blue-200">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Balance: N25,000</div>
        <div class="font-bold text-xl mb-2">
          Wishlist Costs Sum: N{{ wishlistSum }}
        </div>

        <p class="font-bold text-xl text-base">
          Wishlist Count: {{ wishlistCount }}
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
          <tr v-for="(wishList, index) in listOfWishList" :key="index">
            <td class="border px-4 py-2">{{ wishList.description }}</td>
            <td class="border px-4 py-2">{{ wishList.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

 
<script>
import Modal from "../components/WishListModal.vue";
export default {
  components: {
    Modal,
  },

  data() {
    return {
      listOfWishList: [
        {
          amount: 25000,
          description: "Buy Bed",
        },

        {
          amount: 9000,
          description: "Buy Chair",
        },
      ],

      modalActive: false,
    };
  },

  methods: {
    addWishList(newwishList) {
      this.listOfWishList.unshift(newwishList);

      this.modalActive = false;
    },
  },

  computed: {
    wishlistCount() {
      return this.listOfWishList.length;
    },

    wishlistSum() {
      var sum = 0;
      this.listOfWishList.forEach((e) => {
        sum += e.amount;
      });
      return sum;
    },
  },
};
</script>