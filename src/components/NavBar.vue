<template>
  <section class="">
    <SvgHeaderOne/>
    <div class="max-w-6xl mx-auto nav">
      <div class="flex justify-between items-center bg-white p-10 rounded-lg container-border ">
        <h2 class="text-3xl font-semibold">Victor Machado</h2>
        <p class="text-xl text-gray-700">Front-End Developer</p>
        <div class="flex">
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
    /* margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem; */
    cursor: pointer;
}

.nav {
  position: relative;
  bottom: 3rem;
}

.container-border {
  border: 1px solid white;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>