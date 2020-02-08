<template>
  <a :href="url" target="_blank">
    <div class="platform" :style="gradientColourVariable">
      <div class="name">
        <i class="fa" :class="faIcon"></i>
        <h4>{{ name }}</h4>
      </div>
      <div class="external-icon">
        <i class="fa fa-external-link" aria-hidden="true"></i>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "ContactPlatform",
  props: {
    name: String,
    faIcon: String,
    url: String,
    gradientColour: String
  },
  computed: {
    gradientColourVariable: function() {
      return { "--gradient-colour": this.gradientColour };
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  margin-bottom: 20px;
}

.platform {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  min-width: 340px;
  max-width: 340px;
  color: black;
  background: white;
  border: 1px solid black;
  border-radius: 9px;
  padding: 20px 10px;
  transition: 0.5s;
  z-index: 1;
}

.platform:hover {
  transform: scale(1.08);
  cursor: pointer;
  transition: 0.5s;
}

.name {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.fa {
  padding: 20px;
  font-size: 3rem;
  color: black;
}

.fa-external-link {
  font-size: 1.5rem;
  text-align: right;
}

.platform::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    var(--gradient-colour),
    white,
    white
  );
  z-index: -1;
  transition: opacity 0.5s linear;
  opacity: 0;
  border-radius: 9px;
}

.platform:hover::before {
  opacity: 1;
}

@media (max-width: 500px) {
  .platform {
    min-width: 250px;
    max-width: 250px;
  }
}
</style>
