<template>
  <div class="link-icons">
    <a href="https://github.com/tobybessant" target="_blank">
      <font-awesome-icon :icon="['fab', 'github-square']" />
    </a>
    <a href="https://uk.linkedin.com/in/tobybessant" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLinkSet"
};
</script>

<style>
.link-icons {
  width: 100%;
  text-align: center;
  margin: 120px 0 70px 0;
}
.link-icons a {
  display: inline-block;
  font-size: 36px;
  text-decoration: none;  
  color: #202020;
  margin: 0 24px 15px 0;
}
</style>
