<template>
    <div class="items-strech border-t border-gray-50 py-8 md:flex md:py-10 lg:py-8">
        <div class="w-full md:w-4/12 2xl:w-1/4">
            <img :src="product.image" :alt="product.title" class="block h-full object-cover object-center" />
        </div>
        <div class="flex flex-col justify-center md:w-8/12 md:pl-3 2xl:w-3/4">
            <p class="pt-4 text-xs leading-3 text-gray-800 dark:text-white md:pt-0">ID: {{ product.id }}</p>
            <div class="flex w-full items-center justify-between pt-1">
                <p class="text-base font-black leading-none text-gray-800 dark:text-white">{{ product.title }}</p>
                <select @change="(e) => $emit('update-quantity', product, e.target.value)" aria-label="Select quantity" class="mr-6 border border-gray-200 px-1 py-2 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <p class="w-96 text-xs leading-3 text-gray-600 dark:text-white">{{ product.category }}</p>
            <div class="flex items-center justify-between pt-5">
                <div class="itemms-center flex">
                    <p class="cursor-pointer text-xs leading-3 text-red-500 underline">Remove</p>
                </div>
                <p class="text-base font-black leading-none text-gray-800 dark:text-white">{{ product.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: Object
})

</script>