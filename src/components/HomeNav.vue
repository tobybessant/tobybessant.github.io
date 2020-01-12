<template>
  <div class="home-nav">
		<HomeNavButton location="projects" label="Projects" />
		<HomeNavButton location="blog" label="Blog" />
		<HomeNavButton location="contact" label="Contact" />
		<HomeNavButton location="about" label="About" />
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
.home-nav {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	margin: 70px 0;
}
</style>
