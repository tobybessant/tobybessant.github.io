<template>
  <router-link :to="{ name: location }" >
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

a.router-link-exact-active {
  color: #24e3b7;
  font-weight: bold;
}

a.router-link-active {
  color: #24e3b7;
  font-weight: bold;
}
</style>
