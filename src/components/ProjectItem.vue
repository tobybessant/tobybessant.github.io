<template>
  <div class="card" @click="gotoProject">
    <div class="card-header">
      <img v-if="this.project.img"
        class="card-img"
        :src="this.project.img[0]"
      />

      <img v-else
        class="card-img"
        src="https://picsum.photos/1920/1080"
      />
      
    </div>
    <div class="container">
      <h3>{{ project.name }}</h3>
      <p class="last-updated">{{ project.last_updated }}</p>
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

<style lang="scss" scoped>
@import "../globalstyles";

.card {
  flex: 1;
  width: 350px;
  min-width: 350px;
  max-width: 350px;
  height: 340px;
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
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
  transform: scale(1.03);
}

.card-header {
  min-height: 65%;
  max-height: 65%;
  padding:0;
  margin:0;
  border-bottom: 1px solid darkgrey;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  overflow: hidden;
}

.card-img {
  max-width: 100%;
  min-height: 100%;
}

.container {
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
}

h3 {
  font-size: 1.8rem;
  color: $fontColour;
  margin: 3px 0 0px 0;
  padding: 0;
}

.last-updated {
  color: grey;
  margin: 0 0 5px 0;
  padding:0;
}

.tags {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
  font-size: 0.9rem;
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

@media (max-width: 550px) {
  .card {
    margin: 16px 0;
    min-width: 300px;
  }
}
</style>
