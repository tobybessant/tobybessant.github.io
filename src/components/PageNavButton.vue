<template>
  <div class="home-nav-button" @click="clicked()">
		<span class="button-label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'PageNavButton',
	props: {
		label: String,
		location: String
	},
	methods: {
		clicked: function() {
			this.$router.push(this.location);
		}
	}
}
</script>

<style scoped>
.home-nav-button {
	margin: 30px 30px 0 0;
}

.home-nav-button:hover {
	cursor: pointer;
	box-shadow: 0px 0px 4px white;
	background-color: rgba(255, 255, 255, 0.3);
	transition: 0.3s;
}

.button-label {
	font-size: 1.5rem;
}
</style>
