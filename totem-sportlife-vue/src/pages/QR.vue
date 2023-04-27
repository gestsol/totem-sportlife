<template>
  <div>
    <header-vue :logo="true" colorLogo="blanco" :rutaFlechaAtras="true" />
    <div class="h-screen w-screen" id="fondoqr">
      <div class="flex flex-col pt-[277px]">
        <router-view></router-view>
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