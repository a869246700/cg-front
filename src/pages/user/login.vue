<template>
  <div class="test">用户登录: {{ userStore.name }}, 长度:{{ userStore.nameLength }}, 角色: {{ userStore.role }}</div>
  <button @click="updateName">修改store中的name</button>
  <button @click="updateNameByAction">修改store中的name</button>

  <div>{{ obj.name + ' -- ' + obj.star }}</div>
  <button @click="starAdd">star</button>
</template>

<script lang="ts" setup name="UserLogin">
import { useUserStore } from '@/store/user'
import { reactive, watch } from 'vue'

const userStore = useUserStore()

const updateName = () => {
  userStore.$patch({
    name: '小高'
  })
}

const updateNameByAction = () => {
  userStore.getUsername()
}

const obj = reactive({
  name: 'Goo',
  age: 18,
  star: 0
})
const starAdd = () => (obj.star += 1)

watch(obj, (nv, ov) => {
  console.log(nv, ov)
})
</script>

<style lang="scss" scoped>
.test {
  color: $test-color;
}
</style>
