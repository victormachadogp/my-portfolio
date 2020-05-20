<template>
  <section class="">
    <SvgHeaderOne class="absolute top-0 left-0" />
    <SvgHeaderTwo class="absolute top-0 right-0" />

    <div class="container-header">
    <div class="text-center">   
        <h2 class="text-4xl md:text-6xl">Victor <span class="font-semibold">Machado</span></h2>
        <p class="text-lg md:text-xl">Front-end Developer</p>
    </div>

    <div class="text-center my-8">
        <button class="text-2xl border shadow-md px-16 py-1 border-black rounded-full hover:bg-black hover:text-white hover:shadow-2xl ">Projects</button>
    </div>
    
    <div class="flex justify-center">
     <GithubIcon class="social-icon" />
     <LinkedinIcon class="social-icon"/>
     <EmailIcon class="social-icon"/>
     <TwitterIcon class="social-icon"/>
     </div>
     </div>
     
     <div class="flex justify-center mt-10 mb-20">
       <p class="text-lg text-center">I’m a Front-End Developer based in São Paulo - BR. Currently focusing in <span class="font-bold">Javascript</span> and <span class="font-bold">Vue</span></p>
     </div>

     <div class="mx-auto w-2 h-32 bg-blue-700 line-decoration"></div>

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
    margin-bottom: 9rem;
}

.line-decoration {
  background: linear-gradient(180deg, #00C3FF 0%, rgba(0, 119, 255, 0) 100%), #0077FF;
border-radius: 14px;
}


@media (max-width: 780px) {
    .container-header {
    margin-top: 13.5rem;
    margin-bottom: 3rem;

}

}
</style>