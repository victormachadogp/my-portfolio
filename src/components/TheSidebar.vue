<template>
  <div class="w-16 h-screen bg-black fixed z-50 top-0 text-white hidden">
    <span class="rotate-vertical"> Portfolio </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (min-width: 1546px) {
  div {
    display: block;
  }
}

.rotate-vertical {
  transform: rotate(-90deg);

  top: 40px;
  left: 5px;
  position: absolute;
}
</style>