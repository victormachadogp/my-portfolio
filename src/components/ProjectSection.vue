<template>
  <section class="bg-color expanded-width border-decoration ">
    <div class="mt-5 md:p-6 lg:px-10 max-w-6xl mx-auto pb-12 md:pb-6 mb-12">
      <h2 class="text-3xl pt-2 md:pt-6 text-center my-10 md:my-6 mx-6 md:mx-4">
        Projects
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 container-all"
      >
        <!-- Box 1 -->
        <!-- <div
          class="flex-col lg:max-w-sm container-projects hover:shadow-2xl mb-3 bg-white"
        >
          <div class="bg-color-container flex justify-center">
            <div class="relative">
              <img class="border-radius" src="../assets/todo-rest.png" />
            </div>
          </div>
          <div class="text-center pt-6 px-6">
            <h3 class="text-xl font-bold">Todo - REST API</h3>
            <p class="text-gray-600 py-3">
              It is a Todo List developed using Vue and Tailwind CSS, I used
              json-server as a fake api handle the data.
            </p>
          </div>

          <div class="my-6 px-6">
            <p
              class="word-filter inline-block px-3 rounded mr-3 cursor-pointer"
            >
              Vue
            </p>
            <p
              class="word-filter inline-block px-3 rounded mr-3 cursor-pointer"
            >
              Nuxt
            </p>
            <p class="word-filter inline-block px-3 rounded cursor-pointer">
              Tailwind
            </p>
          </div>
        </div> -->

        <ProjectCard
          href="https://amazing-brown-915705.netlify.app/"
          target="_blank"
          :image-url="projectDescription[0].imagePath"
          :title-text="projectDescription[0].title"
          :paragraph="projectDescription[0].paragraph"
        >
        </ProjectCard>

        <!-- Box 2 -->

        <a
          href="https://hikmalanguages.com/"
          class="lg:max-w-sm container-projects hover:shadow-2xl mb-3 bg-white"
        >
          <div class="bg-color-container flex justify-center">
            <div class="relative">
              <img class="border-radius" src="../assets/hikma.png" />
            </div>
          </div>
          <div class=" pt-6 px-6">
            <h3 class="text-center text-xl font-bold">Hikma Languages</h3>
            <p class="text-gray-600 py-3">
              Developed for a US based company using Nuxt.js and Tailwind CSS.
              Hikma is multi-language website used to promote the learning of
              new languages.
            </p>
          </div>

          <div class="my-6 px-6">
            <p
              class="word-filter inline-block px-3 rounded mr-3 cursor-pointer"
            >
              Vue
            </p>
            <p
              class="word-filter inline-block px-3 rounded mr-3 cursor-pointer"
            >
              Nuxt
            </p>
            <p class="word-filter inline-block px-3 rounded cursor-pointer">
              Tailwind
            </p>
          </div>
        </a>

        <!-- Box 3 -->
        <a
          href="https://steppingstonesed.co.uk/"
          class="lg:max-w-sm container-projects hover:shadow-2xl mb-3 bg-white"
        >
          <div class="bg-color-container flex justify-center">
            <div class="relative">
              <img class="border-radius" src="../assets/sse.png" />
            </div>
          </div>
          <div class="pt-6 px-6">
            <h3 class="text-center text-xl font-bold">Stepping Stones Ed</h3>
            <p class="text-gray-600 py-3">
              Developed for a UK based personal branding using Nuxt.js and
              Tailwind CSS. Stepping Stones Ed is a website to promote an
              childrens workbook.
            </p>
          </div>

          <div class="my-6 px-6">
            <p
              class="word-filter inline-block px-3 rounded mr-3 cursor-pointer"
            >
              Vue
            </p>
            <p
              class="word-filter inline-block px-3 rounded mr-3 cursor-pointer"
            >
              Nuxt
            </p>
            <p class="word-filter inline-block px-3 rounded cursor-pointer">
              Tailwind
            </p>
          </div>
        </a>
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
            "It is a Todo List developed using Vue and Tailwind CSS, I used json-server as a fake api handle the data.",
          imagePath: require("../assets/todo-rest.png"),
        },
        { title: "Ken", paragraph: "Some paragraph" },
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
