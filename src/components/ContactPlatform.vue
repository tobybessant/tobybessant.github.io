<template>
  <a :href="url" target="_blank">
    <div class="platform">
      <div class="name">
        <i class="fa" :class="faIcon"></i>
        <h4>{{ name }}</h4>
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
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  margin: 20px;
}

.platform {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  color: black;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  padding: 20px 10px;
  transition: 0.5s;
  z-index: 1;
}

.platform:hover {
  transform: scale(1.08);
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
}

.platform h4 {
  color: #434343;
}

.name {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.fa {
  padding: 20px;
  font-size: 5rem;
  color: black;
}

.fa-external-link {
  font-size: 1.5rem;
  text-align: right;
}

@media (max-width: 500px) {
  .platform {
    min-width: 250px;
    max-width: 250px;
  }
}
</style>
