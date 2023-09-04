import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/Product.interface'

export const useShopStore = defineStore('shop', () => {
  const products = ref(<Product[]>[])
  const categories = ref(<string[]>[])

  const cart = ref(<Product[]>[])

  const selectedCategory = ref('')

  function setProducts(productsList:Product[]) {
    products.value = productsList
  }

  function setCategories(categoriesList:string[]) {
    categories.value = categoriesList
  }

  function setSelectedCategory(cat:string) {
    selectedCategory.value = cat;
  }

  function addToCart(item:Product) {
    cart.value.push(item)
  }

  function removeFromCart(item:Product) {
    let pIndex = cart.value.findIndex(p => p.id === item.id);
    if(pIndex > -1) {
      cart.value.splice(pIndex, 1)
    }
  }

  const filteredProducts = computed(() => {
    if(!selectedCategory.value) {
      return products.value;
    } else {
      return products.value.filter(p => p.category === selectedCategory.value)
    }
  })

  return { products, cart, filteredProducts, categories, selectedCategory, addToCart, removeFromCart, setProducts, setCategories, setSelectedCategory }
})
