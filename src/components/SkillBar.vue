<template>
  <div
    class="
      expanded-width
      flex
      uppercase
      mt-6
      border-t-2 border-b-2 border-black
      p-3
    "
  >
    <div class="w-full max-w-5xl mx-auto">
      <div class="flex items-center">
        <span class="border border-gray-800 rounded-full py-1 px-2"
          >Skills</span
        >
        <div class="flex space-x-2 font-bold">
          <div>Nuxt</div>
          <div>StoryBlok</div>
          <div>HTML</div>
          <div>JavaScript</div>
          <div>SASS</div>
          <div>Tailwind</div>
          <div>CSS</div>
          <div>Vue</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.expanded-width {
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
}
</style>