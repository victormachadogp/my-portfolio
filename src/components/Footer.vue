<template>
  <div>
    <div>
      <img
        class="absolute right-0 bottom-0 z-0 image-opacity active"
        src="../assets/footer-background.png"
        draggable="false"
        alt=""
      />
      <img
        class="absolute right-0 bottom-0 z-0 image-opacity"
        src="../assets/footer-background-2.png"
        draggable="false"
        alt=""
      />
    </div>

    <div
      class="
        expanded-width
        border-t border-black
        mt-12
        px-5
        sm:px-10
        md:px-10
        xl:px-0
        z-10
      "
    >
      <div
        class="
          z-10
          relative
          w-full
          max-w-5xl
          mx-auto
          flex
          sm:flex-row
          flex-col
          sm:gap-0
          gap-8
          sm:text-left
          text-center
          justify-between
          py-12
          font-medium
          text-sm
        "
      >
        <p class="flex-1">DESIGN AND CODE BY</p>
        <div class="flex justify-center flex-1">
          <p class="custom-underline" title="Yep, that's me">VICTOR MACHADO</p>
        </div>
        <p class="flex-1 sm:text-right">2022</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    function imageFade() {
      var imagesArray = Array.prototype.slice.call(
        document.querySelectorAll(".image-opacity")
      );
      var imagesCount = imagesArray.length;
      var active_li_index = 0;

      setInterval(function () {
        var activeImage = document.querySelector(".image-opacity.active");

        if (imagesArray.indexOf(activeImage) == imagesCount - 1)
          active_li_index = 0;
        else active_li_index++;

        activeImage.classList.remove("active");
        document
          .querySelectorAll(".image-opacity")
          // eslint-disable-next-line no-unexpected-multiline
          [active_li_index].classList.add("active");
      }, 4000);
    }

    imageFade();
  },
};
</script>

<style>
.image-opacity {
  position: absolute;
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

.active {
  opacity: 0.8;
}
</style>