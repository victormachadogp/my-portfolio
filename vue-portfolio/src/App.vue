<template>
  <div id="app">
    <NavBar/>
    <ProjectSection/>
    <ArticleSection/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProjectSection from './components/ProjectSection.vue'
import ArticleSection from './components/ArticleSection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ProjectSection,
    ArticleSection,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
