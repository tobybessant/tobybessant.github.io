<template>
  <div>
    <input
      type="text"
      name="projectSearch"
      id="projectSearch"
      placeholder="Search project name/tags"
      v-model="filterValue"
    />
    <ProjectsList :filter="filterValue" />
  </div>
</template>

<script>
import ProjectsList from "@/components/ProjectsList.vue";

export default {
  name: "ProjectsDisplay",
  components: {
    ProjectsList
  },
  data: function() {
    return {
      filterValue: ""
    };
  }
};
</script>

<style>
input[type=text] {
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 18px;
  color: inherit;
  background-color: rgba(255,255,255, 0.2);
  padding: 12px 16px;
}

input[type=text]:focus {
  outline: none;
}

input[type=text]::placeholder {
  color: white;
}
</style>
