<template>
  <div>
    <spinner v-show="cargando" />
    <header-vue :logo="true" colorLogo="blanco"></header-vue>

    <video
      v-on:loadeddata="cargando = false"
      class="w-full absolute top-0 left-0"
      src="./../assets/video/video1.mp4"
      type="video.mp4"
      onclick="this.paused ? this.play() : this.pause();"
      loop="true"
      autoplay
    ></video>

    <div class="flex flex-row justify-between fixed w-screen top-80 px-32">
      <div class="z-10">
        <router-link :to="{ name: 'saber' }">
          <img src="./../assets/img/videoplaceholderinicio.png" />
        </router-link>
      </div>

      <imagen-texto
        :nombreRuta="'promo'"
        :alto="'544px'"
        :ancho="'316px'"
        :nombreImagen="'minagritando.png'"
        :cuerpoTexto="'COTIZA<br/>AQUÍ TU <br/>PLAN<br/>'"
      />
      
    </div>
    <footer-vue />
  </div>
</template>

<script>
import HeaderVue from "../components/Header.vue";
import FooterVue from "../components/Footer.vue";
import ImagenTexto from "../components/ImagenTexto.vue";
import Spinner from "../components/Spinner.vue";

export default {
  data() {
    return {
      cargando: true,
    };
  },
  components: { HeaderVue, FooterVue, ImagenTexto, Spinner },
};
</script>

<style>
</style>