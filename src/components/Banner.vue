<template>
  <section class="expanded-width my-12">
    <a
      href=""
      class="relative lg:flex hidden  justify-center items-center cursor-pointer text-white"
    >
      <div class="absolute">
        <p class="banner-title text-3xl mb-4">Check out my design works!!</p>
        <div class="flex justify-center">
          <img class="w-16" src="../assets/behance.svg" />
        </div>
      </div>
      <img src="../assets/banner-full.svg" />
    </a>

    <a
      class="cursor-pointer lg:hidden flex justify-center items-center relative text-white"
      href="#"
    >
      <div class="absolute">
        <p class="banner-title text-3xl mb-4">Check out my design works!!</p>
        <div class="flex justify-center">
          <img class="w-16" src="../assets/behance.svg" />
        </div>
      </div>

      <img class="w-full max-h-48" src="../assets/banner-mobile.png" />
    </a>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap");

.banner-title {
  font-family: "Dosis", sans-serif;
}
</style>
