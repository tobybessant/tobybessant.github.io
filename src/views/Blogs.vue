<template>
  <div class="app-horizontal-defaults app-vertical-defaults">
    <PageNav />
    <PageHeader text="BLOGS" subheading="" />
    <div class="page-style-defaults">
      <div class="page-content"></div>
    </div>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "blogs",
  components: {
    PageNav,
    PageHeader
  }
};
</script>

<style scoped></style>
