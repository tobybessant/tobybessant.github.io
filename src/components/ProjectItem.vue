<template>
  <div class="card" @click="gotoProject">
    <img
      class="card-img"
      src="https://www.tobybessant.co.uk/images/portfolioimages/university-room-system-img1.png"
    />
    <div class="container">
      <h3>{{ project.name }}</h3>
      <div class="tags">
        <div class="tag" v-for="(tag, index) in project.tags" :key="index">
          <p>{{ tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProjectItem",
  props: {
    project: null
  },
  methods: {
    gotoProject: function() {
      this.$router.push("projects/" + this.project.slug);
    }
  }
};
</script>

<style scoped>
.card {
  flex: 1;
  width: 350px;
  max-width: 350px;
  min-width: 300px;
  height: 320px;
  background: #fff;
  color: #3f3d56;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 9px;
  margin: 16px;
}

.card:hover {
  transition: 0.3s;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: black;
  box-shadow: 0 0 10px black;
  transform: scale(1.03);
}

.card-img {
  max-width: 100%;
  border-bottom: 1px solid darkgrey;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

.container {
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
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

.tag {
  padding: 5px 10px;
  background: rgba(63, 61, 86, 0.7);
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  color: #fff;
  transition: 0.3s;
}

.tag p {
  font-size: 1.2em;
  padding: 0;
  margin: 0;
}
</style>
