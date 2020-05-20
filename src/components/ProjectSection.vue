<template>
  <section class="mb-20 mt-16 md:mx-6 lg:mx-2">
    <h2 class="text-3xl my-10 md:my-5 mx-6 md:mx-4">My <span class="font-semibold">projects</span>
    </h2>

    <div class="flex items-center grid grid-cols-1 lg:grid-cols-3 gap-4">

    <!-- Box 1  -->
    <div class=" lg:max-w-sm container-projects hover:shadow-2xl mb-3">
        <div class="px-6 pt-12 pb-5 md:pt-0 md:pb-0 md:px-0 lg:pt-6 lg:pb-5 lg:px-8 flex flex-col md:flex-row lg:flex-col items-center">
        <div class="">
            <ComputerGradient width="7rem" height="7rem"/>
        </div>
        <div class="mt-6">
        <h3 class="my-2 text-left flex text-2xl md:text-xl font-semibold">How Vue bind really works?</h3>
            <p class="text-left ">
                Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it
            </p>
        </div>
        </div>
        <div class="bg-blue-500 w-full text-xl md:text-base font-semibold tracking-wider text-center text-white rounded-b-lg py-3">Check It Out</div>
    </div>

    <!-- Box 2 -->
 <div class=" lg:max-w-sm container-projects hover:shadow-2xl mb-3">
        <div class="px-6 pt-12 pb-5 md:pt-0 md:pb-0 md:px-0 lg:pt-6 lg:pb-5 lg:px-8 flex flex-col md:flex-row lg:flex-col items-center">
        <div class="">
            <ComputerGradient width="7rem" height="7rem"/>
        </div>
        <div class="mt-6">
        <h3 class="my-2 text-left flex text-2xl md:text-xl font-semibold">How Vue bind really works?</h3>
            <p class="text-left ">
                Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it
            </p>
        </div>
        </div>
        <div class="bg-blue-500 w-full text-xl md:text-base font-semibold tracking-wider text-center text-white rounded-b-lg py-3">Check It Out</div>
    </div>

    <!-- Box 3 -->
 <div class=" lg:max-w-sm container-projects hover:shadow-2xl mb-3">
        <div class="px-6 pt-12 pb-5 md:pt-0 md:pb-0 md:px-0 lg:pt-6 lg:pb-5 lg:px-8 flex flex-col md:flex-row lg:flex-col items-center">
        <div class="">
            <ComputerGradient width="7rem" height="7rem"/>
        </div>
        <div class="mt-6">
        <h3 class="my-2 text-left flex text-2xl md:text-xl font-semibold">How Vue bind really works?</h3>
            <p class="text-left text-base ">
                Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it
            </p>
        </div>
        </div>
        <div class="bg-blue-500 w-full text-xl md:text-base font-semibold tracking-wider text-center text-white rounded-b-lg py-3">Check It Out</div>
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


</style>