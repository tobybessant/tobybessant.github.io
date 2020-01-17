<template>
  <router-link :to="location">
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: "PageNavButton",
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
  color: white;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

a {
  font-size: 1.5rem;
}

.router-link-exact-active {
  font-weight: bold;
}

a.router-link-exact-active {
  color: #24e3b7;
}
</style>
