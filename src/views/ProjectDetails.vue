<template>
  <div class="app-horizontal-defaults">
    <PageNav />
    <div v-if="project" class="project-details">
      <PageHeader :text="id" />
      <div class="tags">
        <div v-for="(tag, index) in project.tags" :key="index" class="tag">
          <p>{{ tag }}</p>
        </div>
      </div>
      <Carousel v-if="project.img" :per-page="1">
        <Slide v-for="(imageSrc, index) in project.img" :key="index">
          <div class="slide-content">
            <img class="carousel-image" :src="imageSrc" />
          </div>
        </Slide>
      </Carousel>
      <div class="project-details">
        <p>{{ project.description }}</p>
      </div>
    </div>

    <div v-if="!project">
      <PageHeader text="That project does not exist." subheading="" />
    </div>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import PageHeader from "@/components/PageHeader.vue";

import { Carousel, Slide } from "vue-carousel";

import { fetchProject } from "../data/projects";

export default {
  name: "ProjectDetailsView",
  components: {
    PageNav,
    PageHeader,
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
        this.id = this.$route.params.projectName;
        this.project = fetchProject(this.id);
      },
      immediate: true
    }
  }
};
</script>

<style>
.tags {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.tag {
  height: 24px;
  padding: 5px 10px;
  background: #777;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: #fff;
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
