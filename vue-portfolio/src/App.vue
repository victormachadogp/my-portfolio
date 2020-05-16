<template>
  <div id="app">
    <NavBar/>
    <ProjectSection/>
    <ArticleSection/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProjectSection from './components/ProjectSection.vue'
import ArticleSection from './components/ArticleSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ProjectSection,
    ArticleSection
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
