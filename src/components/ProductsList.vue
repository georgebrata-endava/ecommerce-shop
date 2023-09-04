<template>
    <div class="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 xl:grid-cols-3">
      <product-card v-for="p in props.products" :key="p.id" :product="p"/>
    </div>
</template>


<script setup lang="ts">
import { Product } from '@/types/Product.interface'; 
import ProductCard from './ProductCard.vue';

const props = defineProps<{
    products: Product[]
}>();
</script>