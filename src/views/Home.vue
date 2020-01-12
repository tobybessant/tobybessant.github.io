<template>
  <div class="home">
    <AppTitle />
		<HomeNav />
  </div>
</template>

<script>
// @ is an alias to /src
import AppTitle from '@/components/AppTitle.vue'
import HomeNav from '@/components/HomeNav.vue'

export default {
  name: 'home',
  components: {
    AppTitle,
		HomeNav
  }
}
</script>

<style scoped>
.home {
	padding-top: 200px;
}
</style>
