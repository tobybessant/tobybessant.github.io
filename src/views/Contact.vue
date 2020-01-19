<template>
  <div class="app-horizontal-defaults">
    <PageNav />
    <PageHeader text="CONTACT" subheading="" />
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "contact",
  components: {
    PageNav,
    PageHeader
  }
};
</script>

<style scoped>

</style>
