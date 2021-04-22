<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from '@/layouts/AppLayout'
export default {
  name: 'App',
  components: { AppLayout },
}
</script>

<style lang="scss">
@import url(http://fonts.googleapis.com/css?family=Roboto+Slab|Open+Sans:400italic,700italic,400,700);
$roboto-slab: 'Roboto Slab', serif;
$open-sans: 'Open Sans', sans-serif;

body {
  padding: 0;
  margin: 0;

  #app {
    font-family: $roboto-slab;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
}
</style>
