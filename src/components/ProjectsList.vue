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
import projects from "@/data/projects/compiled.json";
import ProjectItem from "@/components/ProjectItem.vue";

export default {
  name: "ProjectsList",
  components: {
    ProjectItem
  },
  props: {
    filter: String
  },
  data: function() {
    return {
      projects: []
    };
  },
  mounted() {
    this.projects = projects;
  },
  computed: {
    filteredProjects: function() {
      if (!this.filter) {
        return this.projects;
      }

      return this.projects.filter(p => this.projectDoesMatch(p));
    },
    searchQuery: function() {
      return this.filter.trim().split(",");
    },
    containsQueriesRegex: function() {
      let regex = "";
      this.searchQuery.forEach(filter => {
        regex += "(?=.*" + filter.trim().replace("+", "\\+") + ")";
      });

      regex += ".*$";
      return regex;
    }
  },
  methods: {
    projectDoesMatch: function(project) {
      let r = new RegExp(this.containsQueriesRegex, "gi")
      return this.nameContains(project, r) || this.tagsContain(project, r)
    },
    nameContains: function(project, regex) {
      return regex.test(project.name.toLowerCase());
    },
    tagsContain: function(project, regex) {
      return regex.test(project.tags.toString());
    }
  }
};
</script>

<style>
.projects-list {
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
