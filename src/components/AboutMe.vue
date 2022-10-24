<template>
  <div>
    <div class="flex py-28 items-center">
      <div class="align-start text-5xl w-1/2">
        <h2 class="flex w-36 items-end flex-nowrap flex-col font-medium">
          <p class="">About</p>
          <p class="">Me</p>
        </h2>
      </div>
      <div class="w-1/2 max-w-xl text-xl leading-8">
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
