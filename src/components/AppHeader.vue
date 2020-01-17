<template>
	<div class="app-heading">
		<h1 id="app-title">TOBY BESSANT</h1>
		<div class="link-icons">
			<a href="https://github.com/tobybessant" target="_blank">
				<font-awesome-icon  :icon="['fab', 'github-square']" />
			</a>
			<a href="https://uk.linkedin.com/in/tobybessant" target="_blank">
				<font-awesome-icon  :icon="['fab', 'linkedin']" />
			</a>
		</div>
		<div id="subheading">
			<p>
				A motivated final year student studying Computer Science & Games
				Development at Plymouth University, graduating in June 2020.
			</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'AppTitle'
}
</script>

<style scoped>
.link-icons a {
	display: inline-block;
	font-size: 36px;
	text-decoration: none;
	color: white;
	margin: 0 24px 15px 0;
}

#subheading {
	max-width: 900px;
}
</style>
