<template>
  <div class="pt-10 px-5 sm:px-0">
    <div class="flex">
      <div class="uppercase developer-info sm:w-1/2 w-5/6">
        <h1>Front-end Developer</h1>
        <h2 class="font-medium sm:text-7xl text-5xl mt-10">
          Victor <span><br />Machado</span>
        </h2>
      </div>
      <div
        class="
          sm:w-1/2
          w-1/6
          flex flex-col
          space-y-3.5
          justify-end
          sm:items-end
          items-center
        "
      >
        <a href="https://github.com/victormachadogp" target="_blank">
          <GithubIcon class="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/victormachadogp/" target="_blank">
          <LinkedinIcon class="w-6 h-6" />
        </a>
        <a href="https://twitter.com/victormachadogp" target="_blank">
          <TwitterIcon class="w-6 h-6" />
        </a>
        <a href="mailto:victormachadogp@gmail.com">
          <EmailIcon class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import EmailIcon from "./icons/EmailIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";
import TwitterIcon from "./icons/TwitterIcon.vue";
export default {
  components: { EmailIcon, GithubIcon, LinkedinIcon, TwitterIcon },
};
</script>

<style>
.developer-info {
  font-family: "Work Sans", sans-serif;
}
</style>