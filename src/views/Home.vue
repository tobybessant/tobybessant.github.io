<template>
  <div class="app-horizontal-defaults home">
    <PageNav />
    <div class="center">
      <AppHeader />
      <HomeNav />
    </div>
    <SocialLinkSet />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import HomeNav from "@/components/HomeNav.vue";
import PageNav from "@/components/PageNav.vue";
import SocialLinkSet from "@/components/SocialLinkSet.vue";

export default {
  name: "home",
  components: {
    PageNav,
    AppHeader,
    HomeNav,
    SocialLinkSet
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
