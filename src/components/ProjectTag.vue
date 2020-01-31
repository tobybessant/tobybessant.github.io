<template>
  <div class="tag">
    <p @click="searchTag">{{ tag }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectTag",
  props: {
    tag: String
  },
  methods: {
    searchTag: function() {
      this.$router.push(`/projects?q=${this.tag}`);
    }
  }
};
</script>

<style scoped>
.tag {
  padding: 5px 10px;
  background: rgba(119, 119,199, 0.7);
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: #fff;
  transition: 0.3s;
}

.tag p {
  font-size: 1.2em;
  padding: 0;
  margin: 0;
}

.tag:hover {
  background: rgba(255, 255,255, 0.7);
  cursor: pointer;
  transition: 0.3s;
}</style>
