import { defineStore } from 'pinia'

export const store = defineStore('storeId', {
  state: () => {
    return {
      a: 1,
      b: 2
    }
  },

  getters: {
    sum(state) {
      return state.a + state.b
    }
  },

  actions: {
    setA(a: number) {
      this.a = a
    }
  }
})
