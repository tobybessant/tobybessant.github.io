<template>
  <div>
    <div class="heading">
      <h3>Key Skills</h3>
      <p>Click to toggle a tag below to filter list of projects.</p>
      <div class="tags">
        <span class="tag-all">
          <ProjectTag tag="All" :isActive="tagsEmpty" :tagClicked="clearSessionStorage"/>
        </span>

        <ProjectTag
          v-for="(tag, index) in availableTags"
          :key="index"
          :tag="tag"
          :isActive="checkTag(tag)"
          :tagClicked="toggleTag"
        />
      </div>
    </div>
    <ProjectsList :projects="projects || []" :filter="filterValue" />
  </div>
</template>

<script>
import ProjectsList from "@/components/ProjectsList.vue";
import ProjectTag from "@/components/ProjectTag.vue";

import projects from "@/data/projects/compiled.json";

const SESSION_STORAGE_KEY = "existingFilterList";

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
    this.filterValueList =
      JSON.parse(sessionStorage.getItem("existingFilterList")) || [];

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
    },
    tagsEmpty: function() {
      return this.filterValueList.length === 0;
    }
  },
  methods: {
    toggleTag: function(tag) {
      this.filterValueList.includes(tag)
        ? this.removeTag(tag)
        : this.addTag(tag);
      this.updateSessionStorage();
    },
    addTag: function(tag) {
      this.clearSessionStorage();

      if(tag !== "All")
        this.filterValueList.push(tag);
    },
    removeTag: function(tag) {
      this.clearSessionStorage();
      this.filterValueList = this.filterValueList.filter(t => t !== tag);
    },
    checkTag: function(tag) {
      return this.filterValueList.includes(tag);
    },
    clearSessionStorage: function() {
      this.filterValueList = [];
      this.updateSessionStorage();
    },
    updateSessionStorage: function() {
      sessionStorage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify(this.filterValueList)
      );
    }
  }
};
</script>

<style>
.heading {
  text-align:center;
}

.tag-all {
  padding-right: 15px;
  margin-right: 15px;
  border-right: 2px solid #606060;
}

.tags {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.tags > div:not(:last-child) {
  margin-right: 10px;
}
</style>
