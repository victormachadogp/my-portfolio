<template>
  <div class="flex mb-32 px-5 sm:px-10 md:px-10 xl:px-0 z-10 relative">
    <div class="w-2/5 sm:block hidden"></div>
    <div class="sm:w-3/5 w-full">
      <h3 class="text-2xl font-medium pb-2">Latest Readings</h3>

      <div class="border-x-fix sm:text-lg text-md">
        <div
          class="
            flex
            justify-between
            py-3
            pb-3
            text-gray-500
            border-x-fix border-t border-b border-gray-400
            hover:border-black hover:text-black
          "
        >
          <p class="text-left">Into the Wild</p>
          <p class="text-right">Jon Krakauer</p>
        </div>
        <p class="leading-8 py-3 hidden">
          “It is the experiences, the great triumphant joy of living to the
          fullest extent in which real meaning is found.”
        </p>
      </div>

      <div
        class="
          sm:text-lg
          text-md
          position-top
          border-t
          text-gray-500
          hover:text-black
          border-b border-gray-400
          hover:border-black
        "
      >
        <div class="">
          <div class="flex justify-between py-3 pb-3">
            <p class="text-left">Crime and Punishment</p>
            <p class="text-right">Fiódor Dostoiévski</p>
          </div>
        </div>
        <p class="leading-8 py-3 hidden">
          “Pain and suffering are always inevitable for a large intelligence and
          a deep heart. The really great men must, I think, have great sadness
          on earth.” “To go wrong in one's own way is better than to go right in
          someone else's.”
        </p>
      </div>
      <div
        class="
          border-t
          text-gray-500
          hover:text-black
          position-top-2
          border-b border-gray-400
          hover:border-black
          sm:text-lg
          text-md
        "
      >
        <div class="flex justify-between py-3 pb-3">
          <p class="text-left">Haruki Murakami</p>
          <p class="text-right">Norwegian Wood</p>
        </div>
        <p class="leading-8 py-3 hidden">Quote</p>
      </div>
      <div
        class="
          border-t
          text-gray-500
          hover:text-black
          position-top-3
          border-b border-gray-400
          hover:border-black
          sm:text-lg
          text-md
        "
      >
        <div class="flex justify-between py-3 pb-3">
          <p class="text-right">Frankenstein</p>
          <p class="text-left">Mary Shelley</p>
        </div>
        <p class="leading-8 py-3 hidden">Quote</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.position-top {
  position: relative;
  bottom: 1px;
}

.position-top-2 {
  position: relative;
  bottom: 2px;
}

.position-top-3 {
  position: relative;
  bottom: 3px;
}

.border-x-fix:hover ~ .position-top {
  border-top: 1px solid #000;
}

.position-top:hover ~ .position-top-2 {
  border-top: 1px solid #000;
}

.position-top-2:hover ~ .position-top-3 {
  border-top: 1px solid #000;
}
</style>