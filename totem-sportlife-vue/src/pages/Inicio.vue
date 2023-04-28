<template>
  <div>
    <spinner v-show="cargando" />
    <header-vue :logo="true" colorLogo="blanco"></header-vue>

    <video
      v-on:loadeddata="cargando = false"
      class="w-full absolute top-0 left-0 -z-20"
      src="./../assets/video/video1.mp4"
      type="video.mp4"
      onclick="this.ended || this.paused ? this.play() : this.pause();"
      autoplay
    ></video>

    <div>
      <div class="z-10 border-[#3092B8] border-[12px] rounded-[12px] fixed top-[351px] left-[152px]">
        <video
          v-show="finVideoIzquierda == false"
          src="./../assets/video/REMOTMEDIA.mp4"
          type="video.mp4"
          @ended="finVideoIzquierda = true"
          autoplay
          muted
          width="294"
          height="523"
        ></video>
        <img
          src="./../assets/img/bajoVideoTexto.svg"
          v-show="finVideoIzquierda"
        />
      </div>

       <imagen-texto
        :nombreRuta="'promo'"
        :alto="'520px'"
        :ancho="'292px'"
        :nombreImagen="'minagritando.png'"
        :cuerpoTexto="html"
        class="border-[#3092B8] border-[12px] rounded-[12px] bg-[#3092B8] fixed top-[339px] left-[1464px]"
      />

      <img
        src="./../assets/img/iconoMano.svg"
        class="fixed top-[732px] left-[1605px] z-50"
      />
    </div>
    <footer-vue />
  </div>
</template>

<script>
import HeaderVue from "../components/Header.vue";
import FooterVue from "../components/Footer.vue";
import ImagenTexto from "../components/ImagenTextoDos.vue";
import Spinner from "../components/Spinner.vue";

export default {
  data() {
    return {
      cargando: true,
      finVideoIzquierda: false,
      html: 'COTIZA <br> AQUI TU <br> <span class="text-5xl"> PLAN </span>',
    };
  },

  components: { HeaderVue, FooterVue, ImagenTexto, Spinner },
};
</script>

<style>
</style>