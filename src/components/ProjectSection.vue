<template>
  <section class="bg-color">
    <div class="mt-12 md:p-6 lg:px-10 pb-20 mb-12 border-decoration">
      <h2 class="text-3xl pt-2 md:pt-6 text-center my-10 md:my-6 mx-6 md:mx-4">Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 container-all">
        <!-- Box 1 -->
        <div class="flex-col lg:max-w-sm container-projects hover:shadow-2xl mb-3 bg-white">
          <div class="bg-color-container flex justify-center py-10">
            <div class>
              <ComputerGradient class="md:w-24 md:h-24 image-icon" width="7rem" height="7rem" />
            </div>
          </div>
          <div class="text-center pt-6 px-6">
            <h3 class="text-xl font-bold">How Vue Bind Really Works?</h3>
            <p
              class="text-gray-600 py-3"
            >Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it</p>
          </div>

          <div class="my-6 px-6">
            <p class="word-filter inline-block px-3 rounded mr-3 cursor-pointer">Vue</p>
            <p class="word-filter inline-block px-3 rounded mr-3 cursor-pointer">Nuxt</p>
            <p class="word-filter inline-block px-3 rounded cursor-pointer">Tailwind</p>
          </div>
        </div>

        <!-- Box 2 -->
        <div class="lg:max-w-sm container-projects hover:shadow-2xl mb-3 bg-white">
          <div class="bg-color-container flex justify-center py-10">
            <div class>
              <ComputerGradient class="md:w-24 md:h-24 image-icon" width="7rem" height="7rem" />
            </div>
          </div>
          <div class="text-center pt-6 px-6">
            <h3 class="text-xl font-bold">How Vue Bind Really Works?</h3>
            <p
              class="text-gray-600 py-3"
            >Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it</p>
          </div>

          <div class="my-6 px-6">
            <p class="word-filter inline-block px-3 rounded mr-3 cursor-pointer">Vue</p>
            <p class="word-filter inline-block px-3 rounded mr-3 cursor-pointer">Nuxt</p>
            <p class="word-filter inline-block px-3 rounded cursor-pointer">Tailwind</p>
          </div>
        </div>

        <!-- Box 3 -->
        <div class="lg:max-w-sm container-projects hover:shadow-2xl mb-3 bg-white">
          <div class="bg-color-container flex justify-center py-10">
            <div class>
              <ComputerGradient class="md:w-24 md:h-24 image-icon" width="7rem" height="7rem" />
            </div>
          </div>
          <div class="text-center pt-6 px-6">
            <h3 class="text-xl font-bold">How Vue Bind Really Works?</h3>
            <p
              class="text-gray-600 py-3"
            >Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it</p>
          </div>

          <div class="my-6 px-6">
            <p class="word-filter inline-block px-3 rounded mr-3 cursor-pointer">Vue</p>
            <p class="word-filter inline-block px-3 rounded mr-3 cursor-pointer">Nuxt</p>
            <p class="word-filter inline-block px-3 rounded cursor-pointer">Tailwind</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-5">
        <span class="rounded-full p-3 px-5 color text-white text-xl">View All Github Projects</span>
      </div>
    </div>
  </section>
</template>

<script>
import ComputerGradient from "@/components/svg/ComputerGradient.vue";
export default {
  components: {
    ComputerGradient
  }
};
</script>

<style scoped>
.container-all {
  justify-items: center;
}

.container-projects {
  @apply text-gray-900 mx-4;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-radius: 21px;
  min-width: 19rem;
}

.bg-color {
  background-color: #f8f8f8;
}

.border-decoration {
  border-top: 3px solid #00a3ff;
}

.word-filter {
  color: #686868;
  background-color: #ededed;
}

.bg-color-container {
  background-color: #3bf6a3;
  border-radius: 21px 21px 0 0;
}

@media (min-width: 1024px) {
  .image-icon {
    width: 7rem;
    height: 7rem;
  }
}

.color {
  background-color: #00a3ff;
}
</style>