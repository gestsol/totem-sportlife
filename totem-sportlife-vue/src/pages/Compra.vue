<template>
  <img
    class="w-[460px] h-[460px] m-[auto] z-20"
    :src="srcImagen2"
    alt="codigoQr"
  />

  <img
    class="w-[460px] h-[460px] m-[auto] mt-[30px] z-20 fixed"
    :src="srcImagen2"
    v-show="false"
    alt="codigoQr"
  />
  <h3 class="text-[35px] text-center text-white pt-[27px]">
    Escanea el código QR con tu smartphone para cotizar nuestros planes.
  </h3>
</template>

<script>
export default {
  props: {
    //Completa el nombre de la imagen en el src
    mes: {
      Number, required: true
    },
  },
  computed: {
    //require() no funciona con vite, con esta propiedad consigo la url de la imagen
    srcImagen() {
      return new URL(`../assets/img/qr${this.mes}mes.png`, import.meta.url)
        .href;
    },
    srcImagen2() {
      return new URL(`../assets/img/PROMOS_JUN23.png`, import.meta.url)
        .href;
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: "Helvetica Neue";
}
</style>
