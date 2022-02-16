<template>
  <div class="test">用户登录: {{ userStore.name }}, 长度:{{ userStore.nameLength }}, 角色: {{ userStore.role }}</div>
  <button @click="updateName">修改store中的name</button>
  <button @click="updateNameByAction">修改store中的name</button>
</template>

<script lang="ts" setup name="UserLogin">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const updateName = () => {
  userStore.$patch({
    name: '小高'
  })
}

const updateNameByAction = () => {
  userStore.getUsername()
}
</script>

<style lang="scss" scoped>
.test {
  color: $test-color;
}
</style>
