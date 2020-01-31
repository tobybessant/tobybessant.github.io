<template>
  <div class="app-horizontal-defaults">
    <PageNav />
    <div v-if="project" class="project-details">
      <PageHeader :text="project.name" />
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

      <Carousel
        v-if="project.img"
        class="project-carousel"
        :per-page="2"
        :navigationEnabled="true"
      >
        <Slide v-for="(imageSrc, index) in project.img" :key="index">
          <div class="slide-content">
            <img class="carousel-image" :src="imageSrc" />
          </div>
        </Slide>
      </Carousel>
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

import { Carousel, Slide } from "vue-carousel";

import projects from "@/data/projects/compiled.json";

export default {
  name: "ProjectDetailsView",
  components: {
    PageNav,
    PageHeader,
    ProjectTag,
    Carousel,
    Slide
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
        const projectData = projects.filter(p => p.slug === this.id);
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
.project-details {
  padding-bottom: 100px;
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
