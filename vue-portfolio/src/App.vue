<template>
  <div id="app">
    <NavBar/>
    <ProjectSection/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProjectSection from './components/ProjectSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ProjectSection
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
