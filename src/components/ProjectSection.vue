<template>
  <div class="flex mt-14 mb-10">
    <div class="w-1/2 font-bold">
      <div class="flex items-center">
        Check out my projects
        <img class="ml-2" src="../assets/arrow-right.svg" alt="" />
      </div>
    </div>

    <div class="w-1/2">
      <div class="space-y-8">
        <project-item />
        <project-item />
        <project-item />
      </div>
      <button
        class="
          uppercase
          btn-style
          font-bold
          border border-black
          rounded-full
          px-7
          py-3
          mt-12
        "
      >
        View All Github Projects
      </button>
    </div>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
export default {
  components: {
    ProjectItem,
  },
};
</script>

<style>
.btn-style {
  box-shadow: 2px 2px 0px #f1f1f1, 3px 3px 0px #222222;
}
</style>