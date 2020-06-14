<template>
    <section class="mb-10">
        <p class="text-4xl font-semibold mb-4 md:m-12 text-center mx-5">Articles</p>
        <div class="flex flex-col items-center md:ml-4">


            <div class=" bg-white shadow-custom md:mx-3 md:w-2/4 rounded-lg my-6 md:mt-0">
                <div class="p-5">
                    <h4 class="article-title">How to work with Vue Binding</h4>
                    <p class="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea ex nam rerum laborum blanditiis, dolorum ut. Labore esse odit tempore rem eveniet.
                    </p>
                    <div class="flex items-center mt-4">
                        <div class="w-8 h-8 bg-gray-400 rounded-full mr-2 "></div>
                        <p class="grey-color">Victor Machado</p>
                        <span class="mx-2 grey-color">|</span>
                        <div class="text-sm grey-color">25 MAY 2020</div>
                    </div>
                    <div class="w-full bg-gray-400 h-px mt-6"></div>
                </div>
                
            </div> 

            <div class=" bg-white shadow-custom md:mx-3 md:w-2/4 rounded-lg my-6 md:mt-0">
                <div class="p-5">
                    <h4 class="article-title">How to work with Vue Binding</h4>
                    <p class="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea ex nam rerum laborum blanditiis, dolorum ut. Labore esse odit tempore rem eveniet.
                    </p>
                    <div class="flex items-center mt-4">
                        <div class="w-8 h-8 bg-gray-400 rounded-full mr-2 "></div>
                        <p class="grey-color">Victor Machado</p>
                        <span class="mx-2 grey-color">|</span>
                        <div class="text-sm grey-color">25 MAY 2020</div>
                    </div>
                        <div class="w-full bg-gray-400 h-px mt-6"></div>
                </div>
            </div> 

        </div>    

    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.article-title {
    @apply font-semibold text-3xl mb-3;
    color: #4A4A4A;
}

.grey-color {
    color: #9EABB3;
}
</style>