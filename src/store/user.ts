import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Goo',
    role: '超级管理员'
  }),
  // getters
  getters: {
    nameLength: (state) => state.name.length
  },
  actions: {
    async getUsername() {
      const name = await new Promise((resolve) => setTimeout(() => resolve('小高'), Math.random() * 3000))
      this.name = name as string
    }
  }
})
