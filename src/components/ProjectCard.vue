<template>
  <a class="grid lg:max-w-sm container-projects hover:shadow-2xl mb-3 bg-white">
    <div class="rounded-t-2xl bg-color-fix flex justify-center h-44">
      <div class="relative">
        <img class="rounded-t-2xl" :src="imageUrl" />
      </div>
    </div>
    <div class="text-center px-6">
      <h3 class="text-xl font-bold">{{ titleText }}</h3>
      <p class="text-gray-600 py-3">
        {{ paragraph }}
      </p>
    </div>

    <div class="mt-6 px-6 flex items-center">
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
      default: "Ok Ok",
    },
  },
};
</script>

<style scoped>
/* .container-projects {
  @apply text-gray-900 mx-4;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-radius: 21px;
  min-width: 19rem;
}

.bg-color-container {
  border-radius: 21px 21px 0 0;
}

.border-radius {
  border-radius: 21px 21px 0 0;
} */

.bg-color-fix {
  background-image: linear-gradient(155deg, #00c3ff, #0077ff);
}
</style>
