<template>
  <footer class="overflow-x-hidden expanded-width relative">
    <div class="bag absolute bottom-0 w-full z-10 h-44 lg:h-16 overflow-hidden">
      <SvgHeaderTwo />
      <SvgHeaderOne />
    </div>
    <div
      class="text-center mx-3 max-w-6xl lg:mx-auto flex-col-reverse lg:flex-row bg-white relative z-30 flex justify-between shadow-2xl mb-10 container-border p-8 mt-12 items-center "
    >
      <h3 class="text-2xl text-gray-800">Victor Machado.</h3>
      <div>
        <p>Quote quote quote</p>
        <p>Autor</p>
      </div>
      <p>Seeking Learning</p>
    </div>
  </footer>
</template>

<script>
import SvgHeaderOne from "@/components/svg/SvgHeaderOne.vue";
import SvgHeaderTwo from "@/components/svg/SvgHeaderTwo.vue";
export default {
  components: {
    SvgHeaderOne,
    SvgHeaderTwo,
  },
};
</script>

<style scoped>
.container-border {
  border: 1px solid white;
  box-shadow: -1px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
}
</style>
