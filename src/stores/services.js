import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', {
  state: () => {
    return { 
      activeCategory: {
        index: 0,
        name: 'Рентген - диагностика'
      },
      loading: false
    }
  },

  actions: {
    async setActiveCategory(newValue) {
      this.loading = true
      this.activeCategory = newValue
      await new Promise(r => setTimeout(r, 500));
      this.loading = false
      
    },
  },
})