<template>
  <a
    @mouseenter="$emit('show-project-images')"
    @mouseleave="$emit('hide-project-images')"
    :href="projectLink"
    class="lg:flex grid-container max-w-md lg:max-w-xl container-projects hover:shadow-2xl mb-3 bg-white"
    target="_blank"
  >
    <div
      class="rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none bg-color-fix flex justify-center lg:max-w-4xl p-4 triangle-icon relative"
    >
      <div class="relative">
        <img ref="imageWanted" class="rounded-t-2xl lg:w-0" :src="imageUrl" />
      </div>
    </div>
    <div>
      <div class="px-6 mt-5">
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

  .image-show {
    width: 200px;
    transition: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0s;
  }

  .image-hide {
    width: 0px;
    transition: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0s;
  }

  .triangle-icon::after {
    content: "";
    width: 0;
    height: 0;
    margin-left: 5px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #0077ff;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
  }
}

.bg-color-fix {
  background-image: linear-gradient(100deg, #00c3ff, #0077ff);
}
</style>
