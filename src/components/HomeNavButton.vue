<template>
  <div class="home-nav-button" @click="clicked()">
		<span class="button-label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'HomeNavButton',
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
	padding: 5px 25px;
	border: 2px solid white;
	margin: 30px 30px 0 0;
	background-color: rgba(255, 255, 255, 0.1);
	transition: 0.3s;
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
