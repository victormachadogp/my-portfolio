<template>
  <div>
    <div class="project-info pb-3">
      <div class="flex items-center">
        <p class="font-bold text-lg">Todo - REST API</p>
        <img class="ml-2" src="../assets/arrow-angle.svg" alt="" />
      </div>
      <p class="mt-1.5">
        Todo List developed using Vue and Tailwind CSS, I used json-server as a
        fake api to handle the data.
      </p>
    </div>
    <div class="image-container">
      <!-- <img class="w-full" src="../assets/site-banner-1.jpg" alt="" /> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.project-info ~ .image-container {
  width: 100%;
  height: 0px;
  transition-duration: 0.35s;
}

.project-info:hover ~ .image-container {
  height: 250px;
  transition-duration: 0.35s;
  background-color: green;
}

.image-container:hover {
  height: 250px;
  transition-duration: 0.35s;
  background-color: green;
}
</style>