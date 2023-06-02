<template>
  <div class="cursor-pointer">
    <a :href="projectLink" target="_blank">
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
        class="image-container hidden lg:block"
      >
      <img class="mb-4" :src="backgroundPath" alt="example image">
      <span class="px-3 py-1 mr-2 border border-black rounded-full text-sm" v-for="tag in tags" :key="tag">
        {{tag}}
      </span>
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
    backgroundPath: {
      type: String,
    },
    projectLink: {
      type: String,
    },
    tags: {
      type: Array,
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
  height: 295px;
  transition-duration: 0.35s;
  /* background-color: green; */
}

.image-container:hover {
  height: 295px;
  transition-duration: 0.35s;
}

.image-container {
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>