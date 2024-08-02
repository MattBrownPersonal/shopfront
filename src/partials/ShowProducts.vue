<template>
  <div class="grid grid-cols-3 gap-4 px-32 mt-12">
    <div
      v-for="product in products"
      :key="product.id"
      class="bg-white rounded overflow-hidden border-gray-200"
    >
      <img :src="product.imageUrl" alt="" class="w-full h-48 object-cover" />
      <p class="text-2xl ml-5 mt-5">{{ product.name }}</p>
      <p class="text-xl ml-5 mb-5 text-gray-400">£{{ product.price }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import type { Product } from '../interfaces/Product'
import { Products } from '../data/products'
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const products = ref<Product[]>([])
    const currentCategory = ref();

    watch(() => route.params.category, (newVal) => {
      currentCategory.value = newVal;
      getProducts()
    });

    const getProducts = () => {
      products.value = Products.filter(cat => cat.category == route.params.category)
    }

    onMounted(() => {
      getProducts()
    })
    return { products }
  }
})
</script>

<style scoped></style>
