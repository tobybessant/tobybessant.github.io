<template>
  <div class="app-horizontal-defaults">
    <PageNav />
    <PageHeader text="PROJECTS" subheading="" />
    <div class="back-container">
      <router-link to="/projects" id="back-button">Back</router-link>
    </div>
    
    <div v-if="project" class="project-details">
      <div class="project-details-header">
        <h3>{{ project.name }}</h3>
      </div>
      <div class="meta">
        <div class="tags">
          <ProjectTag
            v-for="(tag, index) in project.tags"
            :key="index"
            :tag="tag"
          />
        </div>
        <div class="links">
          <div v-for="(link, index) in project.links" :key="index">
            <a :href="link.url" target="_blank">{{ link.label }}</a>
          </div>
        </div>
      </div>
      <div class="post-body" v-html="project.bodyContent"></div>
    </div>
    <div v-if="!project">
      <PageHeader text="That project does not exist." subheading="" />
    </div>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import PageHeader from "@/components/PageHeader.vue";
import ProjectTag from "@/components/ProjectTag.vue";

import projects from "@/data/projects/compiled.json";

export default {
  name: "ProjectDetailsView",
  components: {
    PageNav,
    PageHeader,
    ProjectTag
  },
  data: function() {
    return {
      id: null,
      project: null
    };
  },
  watch: {
    id: {
      handler: function() {
        this.id = this.$route.params.projectSlug;
        const projectData = projects.projectsData.filter(p => p.slug === this.id);
        if (projectData[0]) {
          this.project = projectData[0];
        }
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.project-details-header {
  display: flex;
}

.back-container {
  margin-bottom: 20px;
}

#back-button {
  color:black;
  background: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 100px;
}

.project-details {
  color: black;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border: 1px solid white;
  border-radius: 19px;
}

.meta {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.tags {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
}

.tags > div:not(:last-child) {
  margin-right: 10px;
}

.links a {
  text-decoration: none;
  padding: 5px 10px;
  font-size: 1.2em;
  background: rgb(255, 255, 255);
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  color: #000;
  transition: 0.3s;
}

.project-carousel {
  margin: 20px 0;
}

.slide-content {
  width: 100%;
  text-align: center;
}

.carousel-image {
  width: 100%;
  max-width: 500px;
}
</style>
