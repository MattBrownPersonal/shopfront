<template>
  <div class="flex justify-evenly py-5 mt-10">
    <div v-for="category in categories" :key="category.id">
      <router-link :to="({name: 'products', params: {category: category.name}})" class="nav-button">{{ category.name }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import type { Category } from '../interfaces/Category';
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    categories: {
      required: true,
      type: Array as PropType<Category[]>
    }
  },
  setup() {
    return {}
  }
})
</script>
