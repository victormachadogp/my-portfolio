<template>
  <div id="app" class="overflow-hidden">
    <section class="container max-w-6xl mx-auto">
      <TheHeader />
      <AboutMe />
      <ProjectSection />
      <Footer />
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import AboutMe from "./components/AboutMe.vue";
import ProjectSection from "./components/ProjectSection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  title: "Victor Machado | Portfolio",
  components: {
    TheHeader,
    AboutMe,
    ProjectSection,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
