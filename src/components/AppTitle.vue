<template>
	<div>
		<h1 id="appTitle">TOBY BESSANT</h1>
		<div class="link-icons">
			<a href="https://github.com/tobybessant">
				<font-awesome-icon  :icon="['fab', 'github-square']" />
			</a>
			<a href="https://uk.linkedin.com/in/tobybessant">
				<font-awesome-icon  :icon="['fab', 'linkedin']" />
			</a>
		</div>
		<p id="subheading">
			A motivated final year student studying Computer Science & Games
			Development at Plymouth University, graduating in June 2020.
		</p>
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
	box-size: border-box;
	margin: 0 24px 24px 0;
}
</style>
