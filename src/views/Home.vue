<template>
  <div class="home">
    <AppTopBar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppTopBar from '@/components/AppTopBar.vue'

export default {
  name: 'Home',
  components: {
    AppTopBar
  }
}
</script>
