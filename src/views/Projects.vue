<template>
  <div class="app-horizontal-defaults app-vertical-defaults">
    <PageNav />
    <PageHeader text="PROJECTS" subheading="" />
    <ProjectsDisplay />
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
  }
};
</script>

<style scoped>

</style>
