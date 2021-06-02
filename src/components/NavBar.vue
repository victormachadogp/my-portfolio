<template>
  <section class="relative overflow-x-hidden expanded-width ">
    <SvgHeaderOne class="width-fix" />
    <SvgHeaderTwo class="mobile-width-fix " />
    <div class="max-w-6xl mx-auto nav px-3 md:px-4">
      <div
        class="flex flex-col md:flex-row justify-between items-center bg-white p-6 md:p-8 lg:p-10 rounded-lg container-border "
      >
        <div class="flex items-center">
          <h2
            class="text-3xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-0"
          >
            Victor Machado
          </h2>
          <div class="ball-decoration mx-4 hidden md:block"></div>
        </div>
        <div class="flex items-center justify-center">
          <p
            class="text-lg ml-2 md:text-xl lg:text-2xl text-gray-700 mb-3 md:mb-0 text-center"
          >
            Front-End Developer
          </p>
        </div>
        <div class="flex mt-3 md:mt-0 items-center">
          <div class="ball-decoration mx-4 hidden md:block"></div>

          <a href="https://github.com/victormachadogp" target="_blank">
            <GithubIcon class="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/victormachadogp/"
            target="_blank"
          >
            <LinkedinIcon class="social-icon" />
          </a>

          <a href="https://twitter.com/victormachadogp" target="_blank">
            <TwitterIcon class="social-icon" />
          </a>

          <a href="mailto:victormachadogp@gmail.com">
            <EmailIcon class="social-icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgHeaderOne from "@/components/svg/SvgHeaderOne.vue";
import SvgHeaderTwo from "@/components/svg/SvgHeaderTwo.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
export default {
  components: {
    SvgHeaderOne,
    SvgHeaderTwo,
    GithubIcon,
    LinkedinIcon,
    EmailIcon,
    TwitterIcon,
  },
};
</script>

<style scoped>
.social-icon {
  width: 39px;
  height: 39px;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  cursor: pointer;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .social-icon {
    width: 35px;
    height: 35px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }
}

.nav {
  position: relative;
  bottom: 4rem;
}

.container-border {
  border: 1px solid white;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.test {
  width: auto;
}

.ball-decoration {
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 100%;
}
</style>
