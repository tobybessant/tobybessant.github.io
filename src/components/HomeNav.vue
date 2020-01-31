<template>
  <div class="home-nav">
    <HomeNavButtonPrimary location="projects" label="View Projects" />
    <HomeNavButtonSecondary location="projects" label="My CV" />
  </div>
</template>

<script>
import HomeNavButtonPrimary from "@/components/HomeNavButtonPrimary.vue";
import HomeNavButtonSecondary from "@/components/HomeNavButtonSecondary.vue";

export default {
  name: "HomeNav",
  components: {
    HomeNavButtonPrimary,
    HomeNavButtonSecondary
  }
};
</script>

<style scoped>
.home-nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 70px 0;
}
</style>
