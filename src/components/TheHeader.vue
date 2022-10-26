<template>
  <div class="mt-10">
    <div class="flex">
      <div class="uppercase developer-info w-1/2">
        <h1>Front-end Developer</h1>
        <h2 class="font-medium text-7xl mt-10">
          Victor <span><br />Machado</span>
        </h2>
      </div>
      <div class="w-1/2 flex flex-col space-y-3.5 justify-end items-end">
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