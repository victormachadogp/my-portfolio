<template>
  <div id="app">
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
</style>
