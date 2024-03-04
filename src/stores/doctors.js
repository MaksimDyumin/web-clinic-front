import { defineStore } from 'pinia'

export const useDoctorsStore = defineStore('doctors', {
  state: () => {
    return { 
      doctors: [
        { imgSrc: 'v1.jpg', alt: 'Изображение 1', id: 1 },
        { imgSrc: 'v2.jpg', alt: 'Изображение 1', id: 2 },
        { imgSrc: 'v3.jpg', alt: 'Изображение 1', id: 3 },
        { imgSrc: 'v4.jpg', alt: 'Изображение 1', id: 4 },
        { imgSrc: 'v5.jpg', alt: 'Изображение 1', id: 5 },
      ],
      doctor: {},
      loading: false
    }
  },

  getters: {
    gDoctor: (state) => state.doctor,
  },
  

  actions: {
    async getDoctorById(doctorId) {
      // this.loading = true
      // console.log(doctorId)
      // await new Promise(r => setTimeout(r, 500));

      for(let doctor of this.doctors){

        if (doctor.id == doctorId) {
          this.doctor = doctor
        }

      }
      
      // this.loading = false
      
    },
  },
})