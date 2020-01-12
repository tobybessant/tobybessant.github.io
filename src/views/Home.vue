<template>
  <div class="home">
    <AppTitle />
  </div>
</template>

<script>
// @ is an alias to /src
import AppTitle from '@/components/AppTitle.vue'

export default {
  name: 'home',
  components: {
    AppTitle
  }
}
</script>

<style scoped>
.home {
	padding-top: 200px;
}
</style>
