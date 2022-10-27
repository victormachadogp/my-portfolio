<template>
  <div class="px-2.5 sm:px-0">
    <div class="flex flex-col sm:flex-row py-28 sm:items-center items-start">
      <div class="align-start text-5xl sm:w-1/2 w-full">
        <h2
          class="
            flex
            w-36
            sm:items-end
            items-start
            flex-nowrap flex-col
            font-medium
            sm:pb-0
            pb-12
          "
        >
          <p class="">About</p>
          <p class="">Me</p>
        </h2>
      </div>
      <div class="sm:w-1/2 w-full max-w-xl text-xl leading-8">
        I’m a Front-End Developer with a degree in Graphic Design. Besides
        coding I'm a big fan of art related stuff. Based in São Paulo - BR.
        Currently focusing on Javascript and Vue.
      </div>
    </div>
    <div class="border-t border-black expanded-width"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-family: "Work Sans", sans-serif !important;
}

.expanded-width {
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
}
</style>
