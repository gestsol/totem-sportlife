<template>
  <div class="z-10">
    <router-link :to="{ name: nombreRuta }">
      <div
        class="flex flex-col justify-center"
        :class="['w-' + ancho, 'h-' + alto]"
        :id="id"
        :style="{ 'background-image': 'url(' + srcImagen + ')' }"
        style="background-size: 100% 100%"
      >
        <div
          class="text-white text-center bg-black/60 p-3 text-3xl font-bold flex w-fit mx-auto rounded-sm"
        >
          <span v-html="cuerpoTexto">
            
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    srcImagen() {
      return new URL(`../assets/img/${this.nombreImagen}`, import.meta.url).href;
    },
  },

  props: {
    nombreRuta: {
      String,
      required: true,
    },
    ancho: {
      String,
      required: true,
    },
    alto: {
      String,
      required: true,
    },
    cuerpoTexto: {
      String,
      required: true,
    },
    nombreImagen: {
      String,
      required: true,
    },
  },
};
</script>

<style>
</style>