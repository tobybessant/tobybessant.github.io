<template>
  <div class="home-nav">
		<HomeNavButton location="projects" label="Projects" />
  </div>
</template>

<script>
import HomeNavButton from "@/components/HomeNavButton.vue"

export default {
  name: 'HomeNav',
	components: {
		HomeNavButton
	}
}
</script>

<style scoped>

</style>
