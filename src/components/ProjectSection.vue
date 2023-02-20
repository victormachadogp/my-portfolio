<template>
  <div
    class="flex sm:flex-row flex-col mt-14 mb-12 px-5 sm:px-10 md:px-10 xl:px-0"
  >
  <div class="absolute left-0 right-0 z-0 margin-top">
      <img
        class="absolute left-0 top-0 z-0 image-fade-middle active"
        src="../assets/middle-background.png"
        draggable="false"
        alt=""
      />
      <img
        class="absolute left-0 top-0 z-0 image-fade-middle"
        src="../assets/middle-background-2.png"
        draggable="false"
        alt=""
      />
    </div>

    <img
      class="absolute left-0 sm:opacity-75 opacity-30 z-0"
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

    <div class="sm:w-1/2 w-full z-10">
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
          backgroundImage: require("../assets/site-banner-3.jpg"),
          projectPath: "https://nuxtstepping-stones-ed.netlify.app/",
        },
      ],
    };
  },
  mounted() {
    function imageFade() {
      var imagesArray = Array.prototype.slice.call(
        document.querySelectorAll(".image-fade-middle")
      );
      var imagesCount = imagesArray.length;
      var active_li_index = 0;

      setInterval(function () {
        var activeImage = document.querySelector(".image-fade-middle.active");

        if (imagesArray.indexOf(activeImage) == imagesCount - 1)
          active_li_index = 0;
        else active_li_index++;

        activeImage.classList.remove("active");
        document
          .querySelectorAll(".image-fade-middle")
          // eslint-disable-next-line no-unexpected-multiline
          [active_li_index].classList.add("active");
      }, 4000);
    }

    imageFade();
  },
};
</script>

<style scoped>
.btn-style {
  box-shadow: 2px 2px 0px #f1f1f1, 3px 3px 0px #222222;
  transition-duration: 0.35s;
}

.btn-style:hover {
  box-shadow: 2px 2px 0px #222, 3px 3px 0px #222222;
  transition-duration: 0.35s;
  /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
}

.margin-top {
  margin-top: 45rem;
}

.image-fade-middle {
  position: absolute;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  margin-top: -500px;
}

.active {
  opacity: 0.8;
  position: absolute;
}

@media (max-width: 400px) {
  .margin-top {
    margin-top: 65rem;
  }
}
</style>