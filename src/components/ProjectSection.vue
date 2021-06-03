<template>
  <section class="bg-color expanded-width border-decoration ">
    <div class="mt-5 md:p-6 lg:px-10 max-w-6xl mx-auto pb-12 md:pb-6 mb-12">
      <h2 class="text-3xl pt-2 md:pt-6 text-center my-10 md:my-6 mx-6 md:mx-4">
        Projects
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 container-all"
      >
        <ProjectCard
          v-for="project in projectDescription"
          :key="project.title"
          href="https://amazing-brown-915705.netlify.app/"
          target="_blank"
          :image-url="project.imagePath"
          :title-text="project.title"
          :paragraph="project.paragraph"
          :tags="project.tags"
        >
        </ProjectCard>
      </div>
      <div class="flex justify-center my-5">
        <a
          href="https://github.com/victormachadogp"
          class="rounded-full p-3 px-5 color text-white text-md"
          >View All Github Projects</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projectDescription: [
        {
          title: "Todo - REST API",
          paragraph:
            "Todo List developed using Vue and Tailwind CSS, I used json-server as a fake api to handle the data.",
          imagePath: require("../assets/todo-rest.png"),
          tags: ["Vue", "Tailwind", "json-server", "REST"],
        },
        {
          title: "Hikma Languages",
          paragraph:
            "Developed for a US based company using Nuxt.js and Tailwind CSS. Hikma is multi-language website used to promote the learning of new languages.",
          imagePath: require("../assets/hikma.png"),
          tags: ["Vue", "Nuxt", "Tailwind"],
        },
        {
          title: "Stepping Stones Ed",
          paragraph:
            "Developed for a UK based personal branding using Nuxt.js and Tailwind CSS. Stepping Stones Ed is a website to promote an childrens workbook.",
          imagePath: require("../assets/sse.png"),
          tags: ["Vue", "Nuxt", "Tailwind"],
        },
      ],
      // projectDescription: "Something here",
    };
  },
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
  background-color: #0177ff;
  border-radius: 21px 21px 0 0;
}

.border-radius {
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
