<template>
    <div class="flex flex-wrap place-items-center">
    <section class="relative mx-auto">
        <!-- navbar -->
        <nav class="flex w-screen justify-between bg-gray-900 text-white">
        <div class="flex w-full items-center px-5 py-6 xl:px-12">
            <a class="font-heading text-3xl font-bold" href="#">
            <!-- <img class="h-9" src="logo.png" alt="logo"> -->
            Logo.
            </a>
            <!-- Nav Links -->
            <ul class="font-heading mx-auto flex space-x-12 px-4 font-semibold">
            <li class="hidden sm:flex"><RouterLink class="hover:text-gray-200" to="/">Home</RouterLink></li>
            <li><RouterLink class="hover:text-gray-200" to="/shop">Shop</RouterLink></li>
            </ul>
        </div>
        <!-- Responsive navbar -->
        <RouterLink class="mr-6 flex items-center" to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

            <span v-if="!isCartEmpty" class="absolute -mt-5 ml-4 flex">
                <span class="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex h-3 w-3 rounded-full bg-pink-500"> </span>
            </span>
        </RouterLink>
        </nav>
    </section>
</div>
</template>

<script setup>
import { computed } from 'vue';
import { useShopStore } from '../stores/shop.js'
const shopStore = useShopStore();

const isCartEmpty = computed(() => {
    return shopStore.cart.length === 0;
})
</script>