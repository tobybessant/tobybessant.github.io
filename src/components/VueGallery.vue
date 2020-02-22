<template>
  <div class="gallery">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="additional-images-icon" :style="showCount">
      +{{ additionalImageCount }}
    </div>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="generateStyle(image)"
      :class="{ forceDisplay: imageShouldShow(imageIndex) }"
    ></div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  components: {
    gallery: VueGallery
  },
  props: {
    imgArray: Array
  },
  mounted() {
    this.images = this.imgArray;
  },
  data: function() {
    return {
      images: [],
      index: null,
      screenWidth: true
    };
  },
  methods: {
    generateStyle: function(image) {
      return {
        backgroundImage: "url(" + image + ")",
        maxWidth: "300px",
        width: "100%",
        height: "200px",
        marginLeft: "-1px"
      };
    },
    imageShouldShow: function(index) {
      return index === 0;
    }
  },
  computed: {
    additionalImageCount: function() {
      return this.images.length - 1;
    },
    showCount: function() {
      return {
        display: this.images.length > 1 ? "block" : "none"
      };
    }
  }
};
</script>

<style scoped>
.gallery {
  position: relative;
}

.additional-images-icon {
  display: none;
  position: absolute;
  left: 15px;
  top: 15px;
  border-radius: 5px;
  padding: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  font-size: 1.5rem;
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #606060;
  margin: 5px 5px 20px 5px;
  cursor: pointer;
}

.forceDisplay {
  display: block !important;
}

@media (max-width: 800px) {
  .additional-images-icon {
    display: inherit;
  }

  .image {
    display: none;
  }
}

@media (min-width: 800px) {
  .additional-images-icon {
    display: none !important;
  }
}
</style>
