<template>
  <section class="">
    <SvgHeaderOne/>

    <div>
      


    </div>
   
  </section>
</template>

<script>
import SvgHeaderOne from "@/components/svg/SvgHeaderOne.vue";
// import SvgHeaderTwo from "@/components/svg/SvgHeaderTwo.vue";
// import GithubIcon from "@/components/icons/GithubIcon.vue";
// import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
// import EmailIcon from "@/components/icons/EmailIcon.vue";
// import TwitterIcon from "@/components/icons/TwitterIcon.vue";
export default {
  components: {
    SvgHeaderOne
  //   SvgHeaderTwo,
  //   GithubIcon,
  //   LinkedinIcon,
  //   EmailIcon,
  //   TwitterIcon
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
    margin-bottom: 6rem;
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