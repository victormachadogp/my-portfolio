<template>
  <div class="flex sm:flex-row flex-col mt-14 mb-12 px-5 sm:px-0">
    <img
      class="absolute left-0 sm:opacity-75 opacity-30"
      src="../assets/decoration.svg"
      draggable="false"
      alt=""
    />

    <div class="sm:w-1/2 w-full font-bold">
      <div class="flex items-center sm:pb-0 pb-12">
        Check out my projects
        <img
          class="ml-2 sm:block hidden"
          src="../assets/arrow-right.svg"
          alt=""
        />
      </div>
    </div>

    <div class="sm:w-1/2 w-full">
      <div class="space-y-8">
        <ProjectItem
          v-for="project in projectDescription"
          :key="project.title"
          :project-link="project.projectPath"
          :image-url="project.imagePath"
          :title-text="project.title"
          :backgroundPath="project.backgroundImage"
          :paragraph="project.paragraph"
        ></ProjectItem>
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
  data() {
    return {
      projectDescription: [
        {
          title: "Hikma Languages",
          paragraph:
            "Developed for a US based company using Nuxt.js and Tailwind CSS. Hikma is multi-language website used to promote the learning of new languages.",
          backgroundImage: require("../assets/site-banner-1.jpg"),
          projectPath: "https://hikmalanguages.com/",
        },
        {
          title: "Todo - REST API",
          paragraph:
            "Todo List developed using Vue and Tailwind CSS, I used json-server as a fake api to handle the data.",
          backgroundImage: require("../assets/site-banner-2.jpg"),
          projectPath: "https://amazing-brown-915705.netlify.app/",
        },
        {
          title: "Stepping Stones Ed",
          paragraph:
            "Developed for a UK based personal branding using Nuxt.js and Tailwind CSS. Stepping Stones Ed is a website to promote an childrens workbook.",
          backgroundImage: require("../assets/site-banner-1.jpg"),
          projectPath: "https://steppingstonesed.co.uk/",
        },
      ],
    };
  },
};
</script>

<style>
.btn-style {
  box-shadow: 2px 2px 0px #f1f1f1, 3px 3px 0px #222222;
  transition-duration: 0.35s;
}

.btn-style:hover {
  box-shadow: 2px 2px 0px #222, 3px 3px 0px #222222;
  transition-duration: 0.35s;
  /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
}
</style>