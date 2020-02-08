<template>
  <div>
    <PageNav />
    <AppHeader />
    <div class="page-content">
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
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
// import HomeNav from "@/components/HomeNav.vue";
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
}

.showcase-projects {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
