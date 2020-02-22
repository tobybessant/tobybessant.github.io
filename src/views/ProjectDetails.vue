<template>
  <div class="app-horizontal-defaults app-vertical-defaults">
    <PageNav />
    <PageHeader text="PROJECTS" subheading="" />
    <div class="page-content page-style-defaults">
      <div class="title-container">
        <div class="back">
          <a @click="navigateBack" id="back-button">
            <i class="fa fa-chevron-left"></i>Back
          </a>
        </div>
        <h2 id="project-title">{{ project.name }}</h2>
      </div>

      <div v-if="project" class="project-details">
        <p>Project last updated on {{ project.last_updated }}</p>
        <div class="project-details-header">
          <div class="links">
            <h3>Links</h3>
            <div
              v-for="(link, index) in project.links"
              :key="index"
              class="link"
            >
              <a :href="link.url" target="_blank">{{ link.label }}</a>
            </div>
          </div>
        </div>

        <div class="gallery-container">
          <VueGallery :imgArray="project.img" />
        </div>

        <div class="meta">
          <h3>Tools</h3>

          <div class="tools">
            <div
              v-for="(tool, index) in project.tools"
              :key="index"
              class="tool"
            >
              <img :src="tool.icon" alt="" class="tool-icon" />
              {{ tool.label }}
            </div>
          </div>
        </div>

        <div class="description">
          <p>{{ project.desc }}</p>
        </div>
        <div class="post-body" v-html="project.bodyContent"></div>
      </div>

      <div v-if="!project">
        <PageHeader text="That project does not exist." subheading="" />
      </div>
    </div>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import PageHeader from "@/components/PageHeader.vue";
import VueGallery from "@/components/VueGallery.vue";

import projects from "@/data/projects/compiled.json";

import { SESSION_STORAGE_KEY } from "@/middleware/logRoute.js";

export default {
  name: "ProjectDetailsView",
  components: {
    PageNav,
    PageHeader,
    VueGallery
  },
  data: function() {
    return {
      id: null,
      project: null
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  watch: {
    id: {
      handler: function() {
        this.id = this.$route.params.projectSlug;
        const projectData = projects.projectsData.filter(
          p => p.slug === this.id
        );
        if (projectData[0]) {
          this.project = projectData[0];
        }
      },
      immediate: true
    }
  },
  methods: {
    navigateBack: function() {
      const name = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (name !== "null") {
        this.$router.push({ name });
      } else {
        this.$router.push("/projects");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.project-details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-container {
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.title-container h2 {
  margin-left: 40px;
  margin-bottom: 0;
  padding: 0;
  text-align: left;
}

.back {
  font-size: 1.3rem;
  min-width: 120px;
}

#back-button > .fa {
  margin-right: 10px;
}

#back-button {
  color: black;
  background: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  transition: 0.3s;
  cursor: pointer;
}

#back-button:hover {
  background: aquamarine;
}

.project-details {
  color: black;
  background: rgba(255, 255, 255, 1);
  padding: 20px 30px;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11);
  margin-bottom: 150px;
  border: 1px solid #909090;
}

.gallery-container {
  display: block;
}

.meta {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.tools {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 30px 0;
  flex-wrap: wrap;
}

.tools > div:not(:last-child) {
  margin-right: 40px;
}

.tool {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.tool-icon {
  max-height: 2.5rem;
  margin-bottom: 10px;
}

.links {
  margin-bottom: 30px;
}

.link {
  margin-top: 10px;
  display: inline-block;
}

.link a:hover {
  background: aquamarine;
}

.links a {
  text-decoration: none;
  padding: 5px 10px;
  font-size: 1.2em;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  color: #000;
  transition: 0.3s;
  margin-right: 10px;
}
@media (max-width: 600px) {
  .title-container {
    flex-direction: column;
    align-items: flex-start;
  }

  #project-title {
    margin-left: 10px;
    margin-top: 20px;
  } 
}
</style>
