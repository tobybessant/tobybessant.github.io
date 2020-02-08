<template>
  <div class="app-horizontal-defaults app-vertical-defaults projects">
    <PageNav />
    <PageHeader text="PROJECTS" subheading="" />
    <div class="page-content">
      <ProjectsDisplay :urlQuery="this.query ? this.query : ''" />
    </div>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import PageHeader from "@/components/PageHeader.vue";
import ProjectsDisplay from "@/components/ProjectsDisplay.vue";

export default {
  name: "projects",
  components: {
    PageNav,
    PageHeader,
    ProjectsDisplay
  },
  props: {
    query: null
  }
};
</script>

<style scoped>
.projects {
  min-height: calc(320px * 4);
}
</style>
