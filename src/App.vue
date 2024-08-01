<template>
  <TopNav/>
  <NavBar :categories="categories"/>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { getCategories } from './services/shopService'
import TopNav from './partials/TopNav.vue'
import NavBar from './partials/NavButtons.vue'

export default defineComponent({
  components: {
    TopNav,
    NavBar
  },
  setup() {
    const categories = ref([])

    const fetchCategories = async () => {
      categories.value = await getCategories()
    }

    onMounted(fetchCategories)

    return { categories }
  }
})
</script>
