<template>
  <div class="home-nav-button" @click="clicked()">
		{{ label }}
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
	padding: 5px 15px;
	border: 1px solid black;
}

.home-nav-button:hover {
	cursor: pointer;
	box-shadow: 0px 0px 10px black;
}
</style>
