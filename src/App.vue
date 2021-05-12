<template>
  <div id="app" class=" overflow-hidden">
    <section class="container max-w-6xl mx-auto">
      <NavBar />
      <AboutMe />
      <ProjectSection />
      <ArticleSection />
      <Footer />
    </section>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe.vue";
import ProjectSection from "./components/ProjectSection.vue";
// import ArticleSection from './components/ArticleSection.vue'
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    AboutMe,
    ProjectSection,
    // ArticleSection,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

@media (min-width: 1152px) {
  .expanded-width {
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
  }
}
</style>
