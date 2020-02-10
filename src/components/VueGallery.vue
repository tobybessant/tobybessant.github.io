<template>
  <div class="gallery">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="generateStyle(image, imageIndex)"
    ></div>
  </div>
</template>
 
<script>
import VueGallery from 'vue-gallery';

export default {
  components: {
    'gallery': VueGallery
  },
  props: {
    imgArray: Array
  },
  mounted() {
    this.images = this.imgArray;
  },
  data: function () {
    return {
      images: [],
      index: null,
      screenWidth: true
    };
  },
  methods: {
    generateStyle: function(image, index) {
      let styleDefault = { backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' };

      if(index !== 0) {
        styleDefault.display = 'none';
      }

      return styleDefault;
    }
  },
  computed: {
    additionalImageCount: function() {
      return this.images.length;
    }
  }
}
</script> 
 
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #606060;
  margin: 5px;
}
.hidden {
  display: none;
}
</style> 