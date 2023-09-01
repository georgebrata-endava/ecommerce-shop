<template>
  <div class="cart-page sticky-24 fixed top-0 mt-24 h-full w-full overflow-y-auto overflow-x-hidden pb-8" id="chec-div">
    <div
      class="absolute right-0 z-10 h-full w-full translate-x-0 transform overflow-x-hidden transition duration-700 ease-in-out"
      id="checkout">
      <div class="flex flex-col items-center justify-between lg:flex-row" id="cart">
        <div
          class="mb-20 h-auto w-full bg-white px-4 py-4 dark:bg-gray-800 md:w-8/12 md:px-6 md:py-8 lg:h-screen lg:w-1/2 lg:px-8 lg:py-14"
          id="scroll">
          <div class="flex cursor-pointer items-center text-gray-500 hover:text-gray-600 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="16"
              height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
            <p class="pl-2 text-sm leading-none dark:hover:text-gray-200">Back</p>
          </div>
          <p class="pt-3 text-3xl font-black leading-10 text-gray-800 dark:text-white lg:text-4xl">Cart</p>

          <CartItem v-for="p in cartProducts" :key="p.id" :product="p" @updateQuantity="updateQuantity"/>

        </div>
        <div class="h-full w-full bg-gray-100 dark:bg-gray-900 md:w-8/12 lg:w-96">
          <div
            class="flex h-auto flex-col justify-between overflow-y-auto px-4 py-6 md:px-7 md:py-10 lg:h-screen lg:px-8 lg:py-20">
            <div>
              <p class="text-3xl font-black leading-9 text-gray-800 dark:text-white lg:text-4xl">Summary</p>
              <div class="flex items-center justify-between pt-16">
                <p class="text-base leading-none text-gray-800 dark:text-white">Subtotal</p>
                <p class="text-base leading-none text-gray-800 dark:text-white">${{ subtotal }}</p>
              </div>
              <div class="flex items-center justify-between pt-5">
                <p class="text-base leading-none text-gray-800 dark:text-white">Shipping</p>
                <p class="text-base leading-none text-gray-800 dark:text-white">$9,90</p>
              </div>
              <div class="flex items-center justify-between pt-5">
                <p class="text-base leading-none text-gray-800 dark:text-white">Tax</p>
                <p class="text-base leading-none text-gray-800 dark:text-white">0</p>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between pb-6 pt-20 lg:pt-5">
                <p class="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
                <p class="text-right text-2xl font-bold leading-normal text-gray-800 dark:text-white">${{ total }}</p>
              </div>
              <button @click="$router.push('/checkout')"
                class="mb-20 w-full border border-gray-800 bg-gray-800 py-5 text-base leading-none text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:hover:bg-gray-700">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>  


<script setup>
import { computed, reactive } from 'vue';
import CartItem from '../components/CartItem.vue';
import { useShopStore } from '../stores/shop';

const shopStore = useShopStore()

const cartProducts = computed(() => {
  return shopStore.cart ? shopStore.cart : [];
})

let productsQuantity = reactive([]);

function updateQuantity(product, newQuantity) {
  let pIndex = cartProducts.value.findIndex(p => p.id === product.id)
  productsQuantity[pIndex] = newQuantity;
}


const subtotal = computed(() => {
  let subtotal = 0;

  cartProducts.value.forEach((p,i) => {
    subtotal += p.price;
  })

  productsQuantity.forEach((p,i) => {
    subtotal += cartProducts.value[i].price * productsQuantity[i];
  })
  return subtotal;
})

const total = computed(() => {
  return Number.parseInt(subtotal.value + 9.9).toFixed(2);
});
</script>