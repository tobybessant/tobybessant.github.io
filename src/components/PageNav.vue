<template>
  <div class="page-nav">
		<div class="site-title">
			<PageNavButton location="/" label="TOBY BESSANT"/>
		</div>
		<div class="nav-buttons">
			<PageNavButton location="projects" label="Projects"/>
			<PageNavButton location="blog" label="Blog"/>
			<PageNavButton location="contact" label="Contact"/>
			<PageNavButton location="about" label="About"/>
		</div>
  </div>
</template>

<script>
import PageNavButton from "@/components/PageNavButton.vue"

export default {
  name: 'PageNav',
	components: {
		PageNavButton
	}
}
</script>

<style scoped>
.page-nav {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin: 30px 0;
}

.nav-buttons {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
}
</style>
