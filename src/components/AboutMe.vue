<template>
  <section class="px-8">
    <h2 class="text-left md:text-center text-5xl font-semibold mb-4">Hello</h2>

    <div class="flex justify-start md:justify-center">
      <div class="line-decoration"></div>
    </div>

    <p class="mt-8 md:text-center text-lg">
      I’m a Front-End Developer based in São Paulo - BR. Currently focusing in
      <span
        class="font-bold"
      >Javascript</span> and
      <span class="font-bold">Vue</span>
    </p>

    <div class="flex justify-center my-12">
      <div class="flex bg-gray-300 text-lg rounded-full">
        <p
          class="px-3 py-1 border-r border-gray-500 hover:bg-gray-600 hover:border-gray-600 rounded-l-full"
        >Projects</p>
        <p
          class="px-3 py-1 border-r border-gray-500 hover:bg-gray-600 hover:border-gray-600"
        >Articles</p>
        <p class="px-3 py-1 hover:bg-gray-600 hover:border-gray-600 rounded-r-full">Designs</p>
      </div>
    </div>
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