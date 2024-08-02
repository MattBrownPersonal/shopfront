<template>
  <TopNav />
  <NavButtons :categories="shopCategories" />
  <Products />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import TopNav from './partials/TopNav.vue'
import NavButtons from './partials/NavButtons.vue'
import Products from './partials/ShowProducts.vue'
import { useCategoryStore } from './stores/categories'
import type { Category } from './interfaces/Category'

export default defineComponent({
  components: {
    TopNav,
    NavButtons,
    Products
  },
  setup() {
    const shopCategories = ref<Category[]>([])
    const categoryStore = useCategoryStore()

    const fetchCategories = () => {
      shopCategories.value = categoryStore.categories
    }

    onMounted(() => {
      categoryStore.loadCategories()
      fetchCategories()
    })

    return { shopCategories }
  }
})
</script>
