<template>
  <div>
    <h3>Key Skills</h3>
    <p>Click to toggle filters on the list of projects.</p>
    <div class="tags">
      <ProjectTag
        v-for="(tag, index) in availableTags"
        :key="index"
        :tag="tag"
        :tagClicked="toggleTag"
      />
    </div>

    <ProjectsList :projects="projects || []" :filter="filterValue" />
  </div>
</template>

<script>
import ProjectsList from "@/components/ProjectsList.vue";
import ProjectTag from "@/components/ProjectTag.vue";

import projects from "@/data/projects/compiled.json";

export default {
  name: "ProjectsDisplay",
  components: {
    ProjectTag,
    ProjectsList
  },
  props: {
    urlQuery: null
  },
  mounted() {
    this.projects = projects.projectsData;
    this.availableTags = projects.availableTags;
  
    if (this.urlQuery) {
      this.filterValue = this.urlQuery;
    }
  },
  data: function() {
    return {
      projects: [],
      availableTags: [],
      filterValueList: []
    };
  },
  computed: {
    filterValue: function() {
      return this.filterValueList.join(", ");
    }
  },
  methods: {
    toggleTag: function(tag) {
      this.filterValueList.includes(tag) ? this.removeTag(tag) : this.addTag(tag)
    },
    addTag: function(tag) {
      this.filterValueList.push(tag);
    },
    removeTag: function(tag) {
      this.filterValueList = this.filterValueList.filter(t => t !== tag);
    } 
  }
};
</script>

<style>
.tags {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
}

.tags > div:not(:last-child) {
  margin-right: 10px;
}
</style>
