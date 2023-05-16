<template>
  <!-- Componente padre para las rutas con código qr al centro -->
  <div>
    <marco />
    <header-vue :logo="true" :flecha="true" />
    <spinner v-show="cargando" />
    <div class="h-screen w-screen">
      <img
      v-on:load="cargando = false"
      class="w-full absolute top-0 left-0 -z-20"
      src="./../assets/img/fondoqr.png"
    >
      <div class="flex flex-col pt-[277px]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
  
  <script>
import HeaderVue from "../components/Header.vue";
import Marco from "../components/Marco.vue";
import Spinner from "../components/Spinner.vue";


export default {
  data() {
    return {
      //Verifica si ya cargó la imagen de fondo
      cargando: true,
    };
  },
  components: {
    HeaderVue,
    Marco,
    Spinner
  },
};
</script>