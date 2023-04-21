<template>
  <div>
    <header-vue :logo="true" colorLogo="blanco" />
    <div class="h-screen w-screen" id="fondoqr">
      <div class="flex flex-col justify-center pt-72">
        <img
          class="w-[500px] h-[500px] mx-auto border-[25px] rounded-lg border-sky-800"
          src="./../assets/img/PAGOSPORTLIFE.png"
          alt="codigoQr"
        />
        <h3 class="font-semibold text-4xl text-center text-white pt-10">
          Escanea el código QR con tu smartphone para comunicarte con nuestra
          asistente de servicio.
          {{ $route.name }}
        </h3>
      </div>

      <div class="top-[42%] left-1/4 -ml-24 fixed">
        <img src="./../assets/img/Componente1-1.svg" width="180" height="180" />
      </div>

      <div class="w-40 h-2 bg-sky-800 top-1/2 left-[564px] absolute z-0">
      </div>

    </div>
  </div>
</template>

<script>
import HeaderVue from "../components/Header.vue";
export default {
  components: {
    HeaderVue,
  },
};
</script>

<style>
#fondoqr {
  background-image: url("./../assets/img/fondoqr.png");
}
</style>