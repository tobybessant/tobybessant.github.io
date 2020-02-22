<template>
  <div>
    <PageNav />
    <AppHeader />
    <HomeNav />
    <div class="page-content page-style-defaults">
      <div class="showcase">
        <h2>Showcase</h2>
        <div class="showcase-projects">
          <ProjectItem
            v-for="(project, index) in favouriteProjects"
            :key="index"
            :project="project"
          />
        </div>
      </div>
      <SocialLinkSet />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import HomeNav from "@/components/HomeNav.vue";
import PageNav from "@/components/PageNav.vue";
import SocialLinkSet from "@/components/SocialLinkSet.vue";
import ProjectItem from "@/components/ProjectItem.vue";

import projects from "@/data/projects/compiled.json";
const SESSION_STORAGE_KEY = "lastRoute";

export default {
  name: "home",
  components: {
    PageNav,
    AppHeader,
    HomeNav,
    ProjectItem,
    SocialLinkSet
  },
  data: function() {
    return {
      favouriteProjects: []
    };
  },
  mounted() {
    this.favouriteProjects = projects.projectsData.filter(p => p.favourite);
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, null);
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

.showcase {
  margin-top: 130px;
  text-align: center;
  background: whitesmoke;
  color: #434343;
  border-radius: 19px;
  padding: 20px 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
}

.showcase-projects {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
