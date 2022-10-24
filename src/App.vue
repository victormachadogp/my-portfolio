<template>
  <div id="app" class="overflow-hidden">
    <section class="container max-w-5xl mx-auto">
      <TheHeader />
      <SkillBar />
      <AboutMe />
      <ProjectSection />
      <Footer />
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import SkillBar from "./components/SkillBar.vue";
import AboutMe from "./components/AboutMe.vue";
import ProjectSection from "./components/ProjectSection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  title: "Victor Machado | Portfolio",
  components: {
    TheHeader,
    SkillBar,
    AboutMe,
    ProjectSection,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap");

body {
  background-color: #f1f1f1;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
