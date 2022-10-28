<template>
  <div class="px-5 sm:px-0">
    <h2 class="text-4xl font-medium">My Interests</h2>

    <div class="mt-12 mb-20">
      <div class="flex sm:flex-row flex-col">
        <div class="sm:w-4/5 w-full">
          <div class="relative z-10">
            <img src="../assets/space-image.jpg" alt="" />
          </div>
          <div class="flex sm:flex-row flex-col mt-6">
            <div class="sm:w-3/5 w-full">
              <p class="text-2xl font-medium leading-6">
                NASA, Hubble <br />
                Space Telescope
              </p>
              <p class="text-gray-500 text-sm pt-1">
                A piece from my favorite Hubble photo
              </p>
            </div>
            <p class="sm:w-2/5 w-full sm:mt-0 mt-6 font-medium text-sm">
              A monster young star 200,000 times brighter than our Sun that is
              blasting powerful ultraviolet radiation and hurricane-like stellar
              winds.
            </p>
          </div>
        </div>
        <div class="sm:w-1/5 w-full">
          <a
            href="https://www.nasa.gov/mediacast/gravity-assist-how-we-make-webb-and-hubble-images"
            target="_blank"
          >
            <div class="flex items-center sm:mt-0 mt-6">
              <p class="custom-underline cursor-pointer">Check Original</p>
              <img class="ml-2" src="../assets/arrow-angle.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
      <div class="flex sm:flex-row flex-col-reverse w-full mt-28">
        <div class="sm:w-1/5 w-full">
          <a
            href="https://www.vangoghmuseum.nl/en/collection/s0176V1962"
            target="_blank"
          >
            <div class="flex items-center sm:mt-0 mt-6">
              <p class="custom-underline cursor-pointer">Check Original</p>
              <img class="ml-2" src="../assets/arrow-angle.svg" alt="" />
            </div>
          </a>
        </div>
        <div class="sm:w-4/5 w-full">
          <div>
            <img src="../assets/almond-painting.jpg" alt="" />
            <div class="flex sm:flex-row flex-col mt-6">
              <div class="sm:w-1/2 w-full">
                <p class="text-2xl font-medium leading-6">
                  Almond Blossom, <br />
                  Van Gogh
                </p>
                <p class="text-gray-500 text-sm pt-1">
                  A piece from my favorite painting
                </p>
              </div>
              <div class="sm:w-1/2 w-full font-medium text-sm">
                <p class="sm:w-72 w-full sm:mt-0 mt-6">
                  Almond trees flower early in the spring making them a symbol
                  of new life. Van Gogh borrowed the subject, the bold outlines
                  and the positioning of the tree in the picture plane from
                  Japanese printmaking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.custom-underline {
  background-image: linear-gradient(to bottom, #111 75%, #111 75%);
  background-repeat: repeat-x;
  background-size: 1px 1px;
  background-position: 0 97%;
}

.custom-underline:hover {
  background-image: linear-gradient(to bottom, #919090 75%, #919090 75%);
}
</style>