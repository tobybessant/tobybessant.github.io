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
  background: none;
  margin: 0 30px 0 0;
  border-radius: 100px;
  border: 3px solid transparent;
  color: #FFF;
  transition: 0.3s;
}

.home-nav-button:hover {
  cursor: pointer;
  border: 3px solid #FFF;
  transition: 0.3s;
}

.button-label {
  font-size: 1.5rem;
}
</style>
