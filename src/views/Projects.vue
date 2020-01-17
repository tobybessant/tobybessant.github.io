<template>
  <div class="app-w-defaults">
    <PageNav />
    <PageHeader text="PROJECTS" subheading="" />
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "projects",
  components: {
    PageNav,
    PageHeader
  }
};
</script>

<style scoped>

</style>
