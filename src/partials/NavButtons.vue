<template>
  <div class="flex justify-evenly py-5">
    <div v-for="category in categories" :key="category">
      <a :href="'/products/' + category" class="text-2xl uppercase bg-gray-500 text-white px-10 py-10 rounded">{{ category }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    categories: {
      required: true,
      type: Array as PropType<string[]>
    }
  },
  setup() {
    return {}
  }
})
</script>
