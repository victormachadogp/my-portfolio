<template>
  <section class="bg-color">
      <div class="mb-20 mt-16 md:mx-6 lg:mx-10">
    <h2 class="text-3xl pt-8 text-center my-10 md:my-5 mx-6 md:mx-4">Projects</h2>

    <div class="flex items-center grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0">

    <!-- Box Test -->
    <div class=" lg:max-w-sm lg:block container-projects hover:shadow-2xl mb-3 bg-white">
        <div class="bg-color-container flex justify-center py-10">
        <div class="">
            <ComputerGradient class="md:w-24 md:h-24 image-icon" width="7rem" height="7rem"/>
        </div>
        </div>
        <div class="text-center pt-6 px-6">
        <h3 class="text-xl font-bold">How Vue Bind Really Works?</h3>
            <p class=" text-gray-600 py-3">
                Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it
            </p>
        </div>
        
        <div class="my-6 px-6">
        <p class="word-filter inline-block px-3 rounded mr-3 cursor-pointer">Vue</p>
        <p class="word-filter inline-block px-3 rounded mr-3 cursor-pointer">Nuxt</p>
        <p class="word-filter inline-block px-3 rounded cursor-pointer">Tailwind</p>
        </div>
    </div>

    <!-- Box 1 -->
    <!-- <div class=" lg:max-w-sm lg:block container-projects hover:shadow-2xl mb-3 bg-white">
        <div class="px-6 pt-12 pb-5 md:pt-0 md:pb-0 md:px-0 lg:pt-6 lg:pb-5 lg:px-8 flex flex-col md:flex-row lg:flex-col items-center">
        <div class="md:m-4 lg:m-0">
            <ComputerGradient class="md:w-24 md:h-24 image-icon" width="7rem" height="7rem"/>
        </div>
        <div class="mt-6 md:m-4 lg:mt-6 lg:mb-0 lg:mx-0">
        <h3 class="my-2 flex text-2xl md:text-xl font-semibold">How Vue bind really works?</h3>
            <p class="text-left ">
                Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it
            </p>
        </div>
        </div>
        <div class="mb-5 px-6">
        <p class="word-filter inline-block px-3 rounded mr-3 cursor-pointer">Vue</p>
        <p class="word-filter inline-block px-3 rounded mr-3 cursor-pointer">Nuxt</p>
        <p class="word-filter inline-block px-3 rounded cursor-pointer">Tailwind</p>
        </div>
    </div> -->



    <!-- Box 2 -->
 <div class=" lg:max-w-sm container-projects hover:shadow-2xl mb-3">
        <div class="px-6 pt-12 pb-5 md:pt-0 md:pb-0 md:px-0 lg:pt-6 lg:pb-5 lg:px-8 flex flex-col md:flex-row lg:flex-col items-center">
        <div class="md:m-4 lg:m-0">
            <ComputerGradient width="7rem" height="7rem"/>
        </div>
        <div class="mt-6 md:m-4 lg:mt-6 lg:mb-0 lg:mx-0">
        <h3 class="my-2 text-left flex text-2xl md:text-xl font-semibold">How Vue bind really works?</h3>
            <p class="text-left ">
                Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it
            </p>
        </div>
        </div>
        <div class="bg-blue-500 w-full text-xl md:text-base font-semibold tracking-wider text-center text-white rounded-b-lg py-3 md:py-2 lg:py-3">Check It Out</div>
    </div>

    <!-- Box 3 -->
 <div class=" lg:max-w-sm container-projects hover:shadow-2xl mb-3">
        <div class="px-6 pt-12 pb-5 md:pt-0 md:pb-0 md:px-0 lg:pt-6 lg:pb-5 lg:px-8 flex flex-col md:flex-row lg:flex-col items-center">
        <div class="md:m-4 lg:m-0">
            <ComputerGradient width="7rem" height="7rem"/>
        </div>
        <div class="mt-6 md:m-4 lg:mt-6 lg:mb-0 lg:mx-0">
        <h3 class="my-2 text-left flex text-2xl md:text-xl font-semibold">How Vue bind really works?</h3>
            <p class="text-left text-base ">
                Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it
            </p>
        </div>
        </div>
        <div class="bg-blue-500 w-full text-xl md:text-base font-semibold tracking-wider text-center text-white rounded-b-lg py-3 md:py-2 lg:py-3">Check It Out</div>
    </div>



    </div>
    </div>
  </section>
</template>

<script>
import ComputerGradient from "@/components/svg/ComputerGradient.vue";
export default {
    components: {
        ComputerGradient,
    }
};
</script>

<style scoped>
.container-projects {
    @apply text-gray-900 mx-4 ;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    border-radius: 21px;
    min-width: 20rem;
}

.bg-color {
    background-color: #f8f8f8;
}

.word-filter {
    color: #686868;
    background-color: #ededed;
}

.bg-color-container {
    background-color: #3BF6A3;
    border-radius: 21px 21px 0 0;
}

@media (min-width: 1024px) {
    .image-icon {
        width: 7rem;
        height: 7rem;
    }
}


</style>