import { defineStore } from 'pinia'
import serviceArray from '../common/json.js'

export const useServicesStore = defineStore('services', {
  state: () => {
    return {
      activeCategory: {
        index: 0,
        name: 'Рентген - диагностика'
      },
      services: [],
      activeService: '',
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
    async getServices() {
      let buffer = {}
      let result = []

      for (const service of serviceArray) {

        if (typeof service.price === 'string' || service.price instanceof String) {
          const obj = { serviceName: service.serviceName }
          result.push(obj)
          // console.log(result)
        }
        else {
          const lastItem = result[result.length - 1]
          if (lastItem.subServices === undefined) {
            lastItem.subServices = []
            lastItem.subServices.push(service)
          } else {
            lastItem.subServices.push(service)
          }

        }
      }
      this.services = result
    }
  },
})