<template>
<section class="container mx-auto px-4">
  <div class="sm:flex sm:items-center sm:justify-between">
    <div class="mt-8">
      <div class="flex items-center gap-x-3">
        <h2 class="text-lg font-medium text-gray-800 dark:text-white">Products</h2>

        <span class="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 dark:bg-gray-800 dark:text-blue-400">{{ productsLength }} products</span>
      </div>

      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">All available products.</p>
    </div>

    <div class="mt-4 flex items-center gap-x-3">
      <div class="relative mt-4 flex items-center md:mt-0">
        <span class="absolute">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-3 h-5 w-5 text-gray-400 dark:text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </span>

        <input type="text" placeholder="Search" class="block w-full rounded-lg border border-gray-200 bg-white py-1.5 pl-11 pr-5 text-gray-700 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 rtl:pl-5 rtl:pr-11 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 md:w-80" />
      </div>
    </div>
  </div>

  <div class="mt-6 md:flex md:items-center md:justify-between">
    <div class="inline-flex divide-x overflow-hidden rounded-lg border bg-white rtl:flex-row-reverse dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
      <button @click="setCategory('')" class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm" :class="{'bg-gray-100':shopStore.selectedCategory == ''}">
        All
      </button>
      <button v-for="c in shopStore.categories" :key="c" @click="setCategory(c)" :class="{'bg-gray-100':shopStore.selectedCategory == c}" class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100sm:text-sm">
        {{ c }}
      </button>
    </div>
  </div>

  <div class="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 xl:grid-cols-3">
    <ProductCard v-for="p in shopStore.filteredProducts" :key="p.id" :product="p"/>
  </div>
</section>
</template>

<script setup>
import { computed, watch } from 'vue';
import ProductCard from '../components/ProductCard.vue'
import { useShopStore } from '../stores/shop.js'

const shopStore = useShopStore();

async function fetchProducts() {
  let products = await (await fetch("https://fakestoreapi.com/products")).json();
  shopStore.setProducts(products)
}

async function fetchCategories() {
  let categories = await (await fetch("https://fakestoreapi.com/products/categories")).json();
  shopStore.setCategories(categories)
}

function setCategory(category) {
  shopStore.setSelectedCategory(category);
}


const productsLength = computed(() => {
  return shopStore.filteredProducts.length;
})



fetchProducts();
fetchCategories();
</script>

