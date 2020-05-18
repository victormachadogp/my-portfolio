<template>
  <section class="">
    <SvgHeaderOne class="absolute top-0 left-0" />
    <SvgHeaderTwo class="absolute top-0 right-0" />

    <div class="container-header">
    <div class="text-center">   
        <h2 class="text-4xl md:text-6xl">Victor <span class="md:bg-blue-500 font-semibold">Machado</span></h2>
        <p class="text-lg">Front-end Developer</p>
    </div>

    <div class="text-center my-8">
        <button class="text-2xl border px-16 py-1 border-black rounded-full hover:bg-black hover:text-white">Projects</button>
    </div>
    
    <div class="flex justify-center">
     <GithubIcon class="social-icon" />
     <LinkedinIcon class="social-icon"/>
     <EmailIcon class="social-icon"/>
     <TwitterIcon class="social-icon"/>
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
    TwitterIcon
  }
};
</script>

<style scoped>
.social-icon {
    width: 39px;
    height: 39px;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
}

.container-header {
    margin-top: 10rem;
    margin-bottom: 14rem;
}

@media (max-width: 780px) {
    .container-header {
    margin-top: 18rem;
}

}
</style>