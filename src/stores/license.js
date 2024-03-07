import { defineStore } from 'pinia'

export const useLicensesStore = defineStore('Licenses', {
  state: () => {
    return { 
        licensesList: [
            {
                id: 1,
                imgSrc: 'license.jpg',
            },
            {
                id: 2,
                imgSrc: 'license.jpg',
            },
            {
                id: 3,
                imgSrc: 'license.jpg',
            },
            {
                id: 4,
                imgSrc: 'license.jpg',
            },
            {
                id: 5,
                imgSrc: 'license.jpg',
            },
        ]
    }
  },
  
  actions: {
    async getLicensesList(doctorId) {

    },
  },
})