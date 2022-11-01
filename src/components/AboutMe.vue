<template>
  <section class="px-8 mb-10">
    <h2 class="text-left md:text-center text-5xl font-semibold mb-4">Hello</h2>

    <div class="flex justify-start md:justify-center">
      <div class="line-decoration"></div>
    </div>

    <p
      class="
        mt-8
        md:text-center
        text-lg
        mb-16
        sm:max-w-lg
        md:max-w-xl md:mx-auto
      "
    >
      I’m a Front-End Developer with a degree in
      <span class="font-bold">Graphic Design.</span> Besides coding I'm a big
      fan of art related stuff. Based in São Paulo - BR. Currently focusing on
      <span class="font-bold">Javascript</span>,
      <span class="font-bold">Vue</span> and <span class="font-bold">Nuxt</span>
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.line-decoration {
  background: linear-gradient(90deg, #0077ff 4.99%, #00c3ff 88.98%);
  border-radius: 4px;
  width: 60px;
  height: 7px;
}
</style>
