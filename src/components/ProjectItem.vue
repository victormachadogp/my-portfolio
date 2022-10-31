<template>
  <div class="cursor-pointer">
    <a :href="projectLink">
      <div class="project-info pb-3">
        <div class="flex items-center">
          <p class="font-bold text-lg">{{ titleText }}</p>
          <img class="ml-2" src="../assets/arrow-angle.svg" alt="" />
        </div>
        <p class="mt-1.5">
          {{ paragraph }}
        </p>
      </div>
      <div
        class="image-container"
        :style="{ 'background-image': `url(${backgroundPath})` }"
      >
        <!-- <img class="w-full" src="../assets/site-banner-1.jpg" alt="" /> -->
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someTest: {
        backgroundColor: "red",
      },
    };
  },
  props: {
    titleText: {
      type: String,
    },
    paragraph: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    backgroundPath: {
      type: String,
    },
    projectLink: {
      type: String,
    },
  },
};
</script>

<style scoped>
.project-info ~ .image-container {
  width: 100%;
  height: 0px;
  transition-duration: 0.35s;
}

.project-info:hover ~ .image-container {
  height: 250px;
  transition-duration: 0.35s;
  /* background-color: green; */
}

.image-container:hover {
  height: 250px;
  transition-duration: 0.35s;
  /* background-color: green; */
}

.image-container {
  background-repeat: no-repeat;
}
</style>