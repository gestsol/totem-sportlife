<template>
  <!-- fondo de gradiente -->
  <div
    class="w-full h-full z-50 absolute flex flex-col justify-center"
    style="
      background: linear-gradient(
        135deg,
        rgb(1, 30, 34) 0%,
        rgba(63, 48, 1) 25%,
        rgb(8, 50, 43) 50%,
        rgb(63, 48, 1) 75%
      );
    "
  >
    <img
      src="./../assets/img/sportlifelogo.svg"
      class="h-[40px] fixed left-[900px]"
    />

    <!-- Ver vue-spinner en npmjs -->
    <moon-loader color="#ffffff" size="200px" class="mx-auto" />
  </div>
</template>

<script>
import MoonLoader from "vue-spinner/src/MoonLoader.vue";

export default {
  components: {
    MoonLoader,
  },
};
</script>

<style>
</style>