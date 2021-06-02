<template>
  <a
    class="lg:grid grid-container lg:max-w-sm container-projects hover:shadow-2xl mb-3 bg-white"
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

    <div class="mt-6 px-6 pb-5 lg:pb-0 flex items-center">
      <p
        class="bg-gray-200 text-gray-600 inline-block px-3 rounded mr-3 cursor-pointer"
      >
        Vue
      </p>
      <p
        class="bg-gray-200 text-gray-600 inline-block px-3 rounded mr-3 cursor-pointer"
      >
        Nuxt
      </p>
      <p
        class="bg-gray-200 text-gray-600 inline-block px-3 rounded cursor-pointer"
      >
        Tailwind
      </p>
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
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .grid-container {
    grid-template-rows: 11rem auto 100px;
  }
}

.bg-color-fix {
  background-image: linear-gradient(155deg, #00c3ff, #0077ff);
}
</style>
