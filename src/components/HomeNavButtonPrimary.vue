<template>
  <a target="_target" :href="this.location">
    <div class="home-nav-button">
      <span class="button-label">{{ label }}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: "HomeNavButton",
  props: {
    label: String,
    location: String
  },
  methods: {
    clicked: function() {
      this.$router.push(this.location);
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.home-nav-button {
  padding: 15px 38px;
  background: white;
  margin: 0 30px 0 0;
  border-radius: 100px;
  color: #3f3d56;
  transition: 0.3s;
}

.home-nav-button:hover {
  cursor: pointer;
  transform: scale(1.03);
  box-shadow: 0 3px 5px -4px #03eeb7, 0 8px 10px -2px #50e7c4;
  color: black;
  transition: 0.3s;
}

.button-label {
  font-size: 1.5rem;
}
</style>
