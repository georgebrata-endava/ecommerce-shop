import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', () => {
  const products = ref([])
  const categories = ref([])

  const cart = ref([])

  const selectedCategory = ref('')

  function setProducts(productsList) {
    products.value = productsList
  }

  function setCategories(categoriesList) {
    categories.value = categoriesList
  }

  function setSelectedCategory(cat) {
    selectedCategory.value = cat;
  }

  function addToCart(item) {
    cart.value.push(item)
  }

  function removeFromCart(item) {
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
