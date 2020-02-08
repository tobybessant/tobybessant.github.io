<template>
  <div>
    <h2 id="page-title">{{ text }}</h2>
    <p id="subheading">{{ subheading }}</p>
  </div>
</template>

<script>
export default {
  name: "PageHeading",
  props: {
    text: String,
    subheading: String
  }
};
</script>

<style scoped>
div {
  padding: 50px 0;
  text-align: center;
}
</style>
