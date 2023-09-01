import { describe, expect, test, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductCard from '../ProductCard.vue'

import { setActivePinia, createPinia } from 'pinia'

describe('ProductCard', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('renders properly', () => {
    // const wrapper = mount(Header, { props: { msg: 'Hello Vitest' } })
    const wrapper = mount(ProductCard, {})
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['product-card']))
  })

  // test('cart event emmited when added to cart', async () => {
  //   const wrapper = mount(ProductCard, {})

  //   const addToCartBtn = wrapper.find('#add-to-cart');
  //   await addToCartBtn.trigger('click')

  //   expect(wrapper.emitted()).toHaveProperty('add-to-cart')
  // })
})



