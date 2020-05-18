<template>
  <section class="my-20">
    <h2 class="text-3xl">My <span class="font-semibold">projects</span>
    </h2>

    <div class="text-gray-900 mx-5 lg:max-w-sm container-projects hover:shadow-2xl">
        <div class="px-6 pt-12 pb-5 md:pt-0 md:pb-0 md:px-0 lg:pt-6 lg:pb-5 lg:px-8 flex flex-col md:flex-row lg:flex-col items-center">
        <div class="">
            <ComputerGradient width="11rem" height="11rem"/>
        </div>
        <div class="mt-6">
        <h3 class="my-2 text-left flex text-2xl font-semibold">How vue bind really works?</h3>
            <p class="text-left ">
                Vue binding is one of the most used directives that you’ll use while working with vue, and here you will learn what you can and can’t do with it
            </p>
        </div>
        </div>
        <div class="bg-blue-500 w-full text-2xl md:text-xl font-semibold tracking-wider text-center text-white rounded-b-lg py-3">Check Out</div>
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
    box-shadow: 0px 12px 26px rgba(123, 118, 118, 0.25);
    border-radius: 21px;
}

</style>