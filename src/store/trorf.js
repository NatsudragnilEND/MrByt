import { defineStore } from "pinia";
export const useTrorf = defineStore({
  id: 'trorf',
  state: () => ({
    open: false,
    inp: null,
    yes: false,
    selectedImage: 'img3',
    otpr: false,
    toroy: false,
    name: false,
    input2: ''
  })
})