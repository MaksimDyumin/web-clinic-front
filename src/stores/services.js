import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', {
  state: () => {
    return { 
      activeService: undefined
    }
  },

  actions: {
    setActiveService(newValue) {
      this.activeService = newValue
    },
  },
})