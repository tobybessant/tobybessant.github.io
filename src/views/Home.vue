<template>
  <div class="home">
    <AppHeader />
		<HomeNav />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
import HomeNav from '@/components/HomeNav.vue'

export default {
  name: 'home',
  components: {
    AppHeader,
		HomeNav
  }
}
</script>

<style scoped>
.home {
	padding-top: 160px;
}
</style>
