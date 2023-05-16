<template>
  <div>
    <spinner v-show="cargando" />
    <header-vue :logo="true" :flecha="false" />

    <!-- Video de fondo -->
    <video
      class="w-full absolute top-0 left-0 -z-20"
      src="./../assets/video/video1.mp4"
      type="video.mp4"
      onclick="this.ended || this.paused ? this.play() : this.pause();"
    ></video>

    <!-- Cuadro Izquierdo. Una vez el video termina, este se oculta para mostrar la imagen -->
    <div>
      <div
        class="z-10 border-[#3092B8] border-[12px] rounded-[12px] fixed top-[351px] left-[152px]"
      >
      <!-- esto va en la etiqueta de abajo para mostrar la imagen con texto @ended="finVideoIzquierda = true" -->
        <video
          class="w-[292px] h-[520px]"
          v-show="finVideoIzquierda == false"
          src="./../assets/video/REMOTMEDIA.mov"
          v-on:loadeddata="videoCargado"
          type="video.mp4"
          autoplay
          loop
          muted
        ></video>
        <img
          src="./../assets/img/bajoVideoTexto.svg"
          v-show="finVideoIzquierda"
        />
      </div>

      <!-- Cuadro derecho y el conjunto de imagenes que lo componen -->
      <div
        class="border-[#3092B8] border-[12px] rounded-[12px] bg-[#3092B8] fixed top-[351px] left-[1464px]"
      >
        <div class="z-10">
          <router-link :to="{ name: 'promo' }">
            <div
              class="flex flex-col justify-center w-[292px] h-[520px] bg-cover"
              :style="{
                'background-image': 'url(' + srcImagen + ')',
              }"
              style="background-size: 100% 100%)"
            >
              <div class="text-white text-center flex w-fit mx-auto rounded-sm">
                <img src="./../assets/img/cotizaTuPlan.svg" alt="" />
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <img
        src="./../assets/img/iconoMano.svg"
        class="fixed top-[732px] left-[1605px] z-40"
      />
    </div>
    <footer-vue />
  </div>
</template>

<script>
import HeaderVue from "../components/Header.vue";
import FooterVue from "../components/Footer.vue";
import Spinner from "../components/Spinner.vue";

export default {
  data() {
    return {
      //Verifica si ya cargó el video de fondo
      cargando: true,

      //Verifica si el video del cuadro izquierdo acabó
      finVideoIzquierda: false,
    };
  },
  methods: {
    //Una vez el video carga y empieza, este se pausa porque si el autoplay se quita,
    //el fondo queda sin imagen
    videoCargado() {
      this.cargando = false;
      document.querySelector("video").pause();
    },
  },
  computed: {
    //require() no funciona con vite, con esta propiedad consigo la url de la imagen
    srcImagen() {
      return new URL(`../assets/img/minagritando.png`, import.meta.url).href;
    },
  },

  components: { HeaderVue, FooterVue, Spinner },
};
</script>

<style>
</style>