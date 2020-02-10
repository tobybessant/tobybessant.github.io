<template>
  <div class="page-nav">
    <div class="nav-buttons">
      <PageNavButton location="home" label="Intro" :exact="true" />
      <PageNavButton location="projects" label="Projects" />
      <PageNavButton location="contact" label="Contact" />
      <PageNavButton location="about" label="About" />
    </div>
  </div>
</template>

<script>
import PageNavButton from "@/components/PageNavButton.vue";

export default {
  name: "PageNav",
  components: {
    PageNavButton
  }
};
</script>

<style scoped>
.page-nav {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11);
}

.nav-buttons {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.nav-buttons a:not(:last-child) {
  margin-right: 1rem;
}

.site-title {
  position: relative;
}
</style>
