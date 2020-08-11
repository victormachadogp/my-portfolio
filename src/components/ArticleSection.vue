<template>
  <section class="mb-10">
    <p class="text-3xl font-semibold mb-4 md:m-12 text-center mx-5">Articles</p>
    <div class="flex flex-col items-center md:ml-4">
      <!-- Article 1 -->
      <div class="bg-white shadow-custom md:mx-3 md:w-2/4 rounded-lg my-6 md:mt-0">
        <div class="p-5">
          <h4 class="article-title">How to use with Vue Binding</h4>
          <p class="text-gray-700">Vue binding is one of the most used features inside a Vue app</p>
          <div class="flex items-center mt-4">
            <div class="w-8 h-8 bg-gray-400 rounded-full mr-2"></div>
            <p class="grey-color">Victor Machado</p>
            <span class="mx-2 grey-color">|</span>
            <div class="text-sm grey-color">25 JUNE 2020</div>
          </div>
          <div class="w-full bg-gray-400 h-px mt-6"></div>
        </div>
      </div>

      <!-- Article 2 -->
      <div class="bg-white shadow-custom md:mx-3 md:w-2/4 rounded-lg my-6 md:mt-0">
        <div class="p-5">
          <h4 class="article-title">How to use with Vue Binding</h4>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            ex
          </p>
          <div class="flex items-center mt-4">
            <div class="w-8 h-8 bg-gray-400 rounded-full mr-2"></div>
            <p class="grey-color">Victor Machado</p>
            <span class="mx-2 grey-color">|</span>
            <div class="text-sm grey-color">25 JUNE 2020</div>
          </div>
          <div class="w-full bg-gray-400 h-px mt-6"></div>
        </div>
      </div>
    </div>
  </section>
</template>
    
<script>
export default {};
</script>

<style scoped>
.article-title {
  @apply font-semibold text-2xl mb-3;
  color: #4a4a4a;
}

.grey-color {
  color: #9eabb3;
}
</style>
