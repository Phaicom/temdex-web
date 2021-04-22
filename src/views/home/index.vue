<template>
  <div class="home">
    <p class="test">test test test</p>
    <img alt="Vue logo" src="./images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue3 Boilerplate" />
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/hello-world.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
<style lang="scss" scoped>
.test {
  @include media('<phone') {
    color: red;
  }
}
</style>
