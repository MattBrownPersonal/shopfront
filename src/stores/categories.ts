import { defineStore } from 'pinia'
import { Categories } from '../data/categories'
import type { Category } from '@/interfaces/Category';

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: [] as Array<Category>
  }),

  actions: {
    loadCategories() {
      this.categories = Categories;
    }
  }
})
