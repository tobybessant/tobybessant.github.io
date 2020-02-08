<template>
  <router-link :to="{ name: location }" :exact="this.exact">
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: "PageNavButton",
  props: {
    label: String,
    location: String,
    exact: Boolean
  }
};
</script>

<style scoped>
a {
  color: grey;
  text-decoration: none;
  font-size: 1.5rem;
  transition: 0.2s;
  position: relative;
  padding: 0 20px;
}

a:hover {
  color: black;
}

a::before,
a::after {
  position: absolute;
  font-weight: 100;
  font-size: 120%;
  line-height: 0.9;
  top: 0px;
  opacity: 0;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

a::before {
  left: -0.1em;
  content: "[";
  -webkit-transform: translateX(140%);
  transform: translateX(140%);
}

a::after {
  right: -0.1em;
  content: "]";
  -webkit-transform: translateX(-140%);
  transform: translateX(-140%);
}

a:hover::before,
a:hover::after {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

a.router-link-active {
  color: black;
}

a.router-link-active::before,
a.router-link-active::after {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
</style>
