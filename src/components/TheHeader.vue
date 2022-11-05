<template>
  <div class="pt-10 px-5 sm:px-10 md:px-10 xl:px-0">
    <div>
      <img
        class="absolute left-0 top-0 z-0 image-fade active"
        src="../assets/header-background.png"
        draggable="false"
        alt=""
      />
      <img
        class="absolute left-0 top-0 z-0 image-fade"
        src="../assets/header-background-2.png"
        draggable="false"
        alt=""
      />
    </div>

    <div class="flex z-10 relative">
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
  mounted() {
    function imageFade() {
      var imagesArray = Array.prototype.slice.call(
        document.querySelectorAll(".image-fade")
      );
      var imagesCount = imagesArray.length;
      var active_li_index = 0;

      setInterval(function () {
        var activeImage = document.querySelector(".image-fade.active");

        if (imagesArray.indexOf(activeImage) == imagesCount - 1)
          active_li_index = 0;
        else active_li_index++;

        activeImage.classList.remove("active");
        document
          .querySelectorAll(".image-fade")
          // eslint-disable-next-line no-unexpected-multiline
          [active_li_index].classList.add("active");
      }, 4000);
    }

    imageFade();
  },
};
</script>

<style>
.developer-info {
  font-family: "Work Sans", sans-serif;
}

.image-fade {
  position: absolute;
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

.active {
  opacity: 0.8;
}
</style>