<template>
  <div class="flex mb-32 px-5 sm:px-0">
    <div class="w-1/2 sm:block hidden"></div>
    <div class="sm:w-1/2 w-full">
      <h3 class="text-2xl font-medium pb-2">Latest Readings</h3>

      <div class="border-x-fix">
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
          <p class="text-left">Crime and Punishment</p>
          <p class="text-right">Fiódor Dostoiévski</p>
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
          position-top
          border-b border-gray-400
          hover:border-black
        "
      >
        <div class="flex justify-between py-3 pb-3">
          <p class="text-left">Liev Tolstói</p>
          <p class="text-right">Anna Karênina</p>
        </div>
        <p class="leading-8 py-3 hidden">Quote</p>
      </div>
      <div
        class="
          border-t
          text-gray-500
          hover:text-black
          position-top-2
          border-b border-gray-400
          hover:border-black
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

.border-x-fix:hover ~ .position-top {
  border-top: 1px solid #000;
}
</style>