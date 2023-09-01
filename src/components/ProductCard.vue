<template>
    <div class="product-card relative m-3 mx-auto flex flex-wrap justify-center">
        <div v-if="product" class="relative mx-1 my-3 min-w-[340px] max-w-sm cursor-pointer rounded-3xl bg-white p-2 shadow-md">
            <div class="relative overflow-x-hidden rounded-2xl">
                <img class="h-40 w-full rounded-2xl object-cover" :src="product.image" />
            </div>
            <div class="mb-2 mt-4 flex justify-between pl-2">
                <div>
                    <p class="mb-0 text-lg font-semibold text-gray-900">{{ product.title }}</p>
                    <p class="text-md mt-0 text-gray-800">${{ product.price }}</p>
                </div>
                <div v-if="!isInCart" id="add-to-cart" class="group mb-1 mr-4 flex cursor-pointer flex-col-reverse" @click="addToCart(product)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-70 group-hover:opacity-50" fill="none"
                        viewBox="0 0 24 24" stroke="black">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <div v-else class="group mb-1 mr-4 flex cursor-pointer flex-col-reverse" @click="removeFromCart(product)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"/></svg>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
    product: Object
})
const emit = defineEmits(['add-to-cart', 'remove-from-cart']);

import { computed } from 'vue';
import { useShopStore } from '../stores/shop.js'
const shopStore = useShopStore();

function addToCart(product) {
    shopStore.addToCart(product)
    emit('add-to-cart')
}

function removeFromCart(product) {
    shopStore.removeFromCart(product)
    emit('remove-from-cart')
}

const isInCart = computed(() => {
    return shopStore.cart.some(p => p.id === props.product.id)
})

</script>
  