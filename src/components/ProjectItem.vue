<template>
  <div class="card" @click="gotoProject">
    <div class="container">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <p>{{ project.tags }}</p>
    </div>
  </div>
</template>

<script>
import { generateProjectSlug } from "../data/projects";

export default {
  name: "ProjectItem",
  props: {
    project: null
  },
  data: function() {
    return {
      generateProjectSlug
    };
  },
  methods: {
    gotoProject: function() {
      this.$router.push("projects/" + this.generateProjectSlug(this.project));
    }
  }
};
</script>

<style>
.card {
  flex: 1;
  max-width: 400px;
  min-width: 300px;
  min-height: 300px;
  background: #fff;
  color: #3f3d56;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 16px;
  margin: 16px;
}

.card:hover {
  transition: 1s;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background: aquamarine;
  color: black;
}

.container {
  padding: 2px 16px;
}
</style>
