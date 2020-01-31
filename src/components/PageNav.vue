<template>
  <div class="page-nav">
    <div class="nav-buttons">
      <PageNavButton location="home" label="Intro" :exact="true" />
      <PageNavButton location="projects" label="Projects" />
      <PageNavButton location="blog" label="Blog" />
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
}

.nav-buttons {
  max-width: 100%;
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
