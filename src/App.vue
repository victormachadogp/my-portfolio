<template>
  <div id="app" class="overflow-hidden">
    <section
      class="overflow-hidden main-container mx-auto 2xl:mx-0 2xl:container"
    >
      <div class="max-w-5xl 2xl:max-w-6xl mx-auto">
        <TheHeader />
        <SkillBar />
        <AboutMe />
        <ProjectSection />
        <MyInterests />
        <LatestReadings />
        <Quote />
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import SkillBar from "./components/SkillBar.vue";
import AboutMe from "./components/AboutMe.vue";
import ProjectSection from "./components/ProjectSection.vue";
import MyInterests from "./components/MyInterests.vue";
import LatestReadings from "./components/LatestReadings.vue";
import Quote from "./components/Quote.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  title: "Victor Machado | Portfolio",
  components: {
    TheHeader,
    SkillBar,
    AboutMe,
    ProjectSection,
    MyInterests,
    LatestReadings,
    Quote,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap");

body {
  background-color: #262626;
}

.main-container {
  background-color: #f1f1f1;
}

#app {
  font-family: Work Sans, Helvetica, Arial, sans-serif;
}
</style>
