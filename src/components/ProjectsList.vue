<template>
  <div class="projects-list">
    <ProjectItem
      v-for="(project, index) in filteredProjects"
      v-bind:key="index"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem.vue";

export default {
  name: "ProjectsList",
  components: {
    ProjectItem
  },
  props: {
    filter: String,
    projects: Array
  },
  computed: {
    filteredProjects: function() {
      if (!this.filter) {
        return this.projects;
      }

      return this.projects.filter(p => this.projectDoesMatch(p));
    }
  },
  methods: {
    projectDoesMatch: function(project) {
      return project.tags.includes(this.filter);
    }
  }
};
</script>

<style>
.projects-list {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
