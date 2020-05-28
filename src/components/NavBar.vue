<template>
  <section class="relative overflow-x-hidden">
    <SvgHeaderOne class=" test"/>
    <div class="max-w-6xl mx-auto nav px-8 md:px-4">
      <div class="flex flex-col md:flex-row justify-between items-center bg-white p-6 md:p-10 rounded-lg container-border ">
        <div class="flex items-center">
          <h2 class="text-3xl font-semibold mb-3 md:mb-0">Victor Machado</h2>
          <div class="ball-decoration mx-4  hidden md:block"></div>
        </div>
        
        <p class="text-lg md:text-xl text-gray-700 mb-3 md:mb-0 text-center">Front-End Developer</p>
        <div class="flex mt-3 md:mt-0 flex items-center">
          <div class="ball-decoration mx-4 hidden md:block"></div>
          <GithubIcon class="social-icon" />
          <LinkedinIcon class="social-icon"/>
          <TwitterIcon class="social-icon"/>
          <EmailIcon class="social-icon"/>
        </div>

      </div>



    </div>
   
  </section>
</template>

<script>
import SvgHeaderOne from "@/components/svg/SvgHeaderOne.vue";
// import SvgHeaderTwo from "@/components/svg/SvgHeaderTwo.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
export default {
  components: {
    SvgHeaderOne,
  //   SvgHeaderTwo,
    GithubIcon,
    LinkedinIcon,
    EmailIcon,
    TwitterIcon
  }
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

@media (min-width: 768px){
  .social-icon {
    width: 39px;
    height: 39px;
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

@media (max-width: 768px){
 .test {
  width: 120%;
  height: 100%;
}
}






</style>