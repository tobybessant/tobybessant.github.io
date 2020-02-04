<template>
  <div @click="searchTag" class="tag" v-bind:style="activeStyle">
    <p>{{ tag }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectTag",
  props: {
    tag: String,
    tagClicked: Function,
    isActive: Boolean(false)
  },
  methods: {
    searchTag: function() {
      this.tagClicked(this.tag);
    }
  },
  computed: {
    activeStyle: function() {
      return this.isActive ? { background: 'white', color: 'black' } : null; 
    }
  }
};
</script>

<style scoped>
.tag {
  padding: 5px 10px;
  background: rgba(66, 66, 66, 0.6);
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

.tag:hover {
  background: rgba(82, 82, 82, 0.8);
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}
</style>
