<template>
  <a
    :href="projectLink"
    class="lg:grid grid-container max-w-md lg:max-w-sm container-projects hover:shadow-2xl mb-3 bg-white"
    target="_blank"
  >
    <div class="rounded-t-2xl bg-color-fix flex justify-center lg:h-44 p-4">
      <div class="relative">
        <img class="rounded-t-2xl" :src="imageUrl" />
      </div>
    </div>
    <div class="text-center px-6 mt-5">
      <h3 class="text-xl font-bold">{{ titleText }}</h3>
      <p class="text-gray-600 text-left py-3">
        {{ paragraph }}
      </p>
    </div>

    <div class="mt-6 px-6 pb-5 flex items-end flex-wrap">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="bg-gray-200 text-gray-600 inline-block px-3 mr-2 mt-2.5 text-sm rounded cursor-pointer"
      >
        {{ tag }}
      </span>
    </div>
  </a>
</template>

<script>
export default {
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
@media (min-width: 1024px) {
  .grid-container {
    grid-template-rows: 11rem auto 120px;
  }
}

.bg-color-fix {
  background-image: linear-gradient(155deg, #00c3ff, #0077ff);
}
</style>
