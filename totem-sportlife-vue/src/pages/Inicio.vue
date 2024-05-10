<template>
  <div>
    <spinner v-show="cargando"/>
    <header-vue :logo="true" :flecha="false"/>

    <!-- Video de fondo -->
    <video
        id="video-fondo"
        class="w-full absolute top-0 left-0 -z-20"
        src="https://drive.google.com/uc?export=download&id=1RW5xIzM7q5Nt1FaL8pfYAx1IslUhlqMZ"
        type="video.mp4"
        muted
        @click="togglePlayVideoFondo"
        @loadeddata="pausarFondo"
        @ended="toggleMutedVideoIzquierda"
    ></video>

    <!-- Cuadro Izquierdo. Una vez el video termina, este se oculta para mostrar la imagen -->
    <div>
      <div
          class="fixed z-10 w-100 text-center text-white header-text top-[30px] f-s-[10px]"
          v-show="!playingBackgroundVideo"
      >
        <h1 class="d-inline" style="font-size: 30px">Haz click para interactuar con la pantalla</h1>
        <img
            src="./../assets/img/iconoMano.svg"
            class="d-inline"
        />
      </div>
      <div
          class="z-10 border-[#3092B8] border-[12px] rounded-[12px] fixed top-[351px] left-[152px]"
      >
        <!-- esto va en la etiqueta de abajo para mostrar la imagen con texto @ended="finVideoIzquierda = true" -->
        <video
            id="video-izquierda"
            class="w-[292px] h-[520px]"
            v-show="!finVideoIzquierda"
            src="https://drive.google.com/uc?export=download&id=1YP3nBqG4cu9ysmWvh088rI1Fw8MDiqcT"
            v-on:loadeddata="cargando = false"
            type="video.mp4"
            muted
            autoplay
            loop
            @click="toggleImageVideoIzquierda"
            @ended="repetirVideoIzquierda"
        ></video>
        <img
            @click="toggleImageVideoIzquierda"
            src="./../assets/img/bajoVideoTexto.svg"
            v-show="finVideoIzquierda"
            alt=""
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
                <img src="./../assets/img/cotizaTuPlan.svg" alt=""/>
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
    <footer-vue/>
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
      playingBackgroundVideo: false,
    };
  },
  methods: {
    togglePlayVideoFondo() {

      const videoFondo = document.querySelector("#video-fondo")
      videoFondo.muted = videoFondo.muted ? false : !videoFondo.muted;
      this.playingBackgroundVideo = false
      if (videoFondo.ended || videoFondo.paused) {
        this.playingBackgroundVideo = true
        videoFondo.play()
        this.toggleMutedVideoIzquierda()
      } else {
        this.playingBackgroundVideo = false
        videoFondo.pause();
        this.toggleMutedVideoIzquierda()
      }
    },
    toggleMutedVideoIzquierda() {
      const videoIzquierda = document.querySelector("#video-izquierda")
      videoIzquierda.muted = !videoIzquierda.muted
    },
    toggleImageVideoIzquierda() {
      this.finVideoIzquierda = !this.finVideoIzquierda
      const videoIzquierda = document.querySelector("#video-izquierda")
      videoIzquierda.muted = this.finVideoIzquierda
      videoIzquierda.play()

    }
  },
  computed: {
    //require() no funciona con vite, con esta propiedad consigo la url de la imagen
    srcImagen() {
      return new URL(`../assets/img/minagritando.png`, import.meta.url).href;
    },
    pausarFondo() {
      this.playingBackgroundVideo = false
      setTimeout(() => {
        document.querySelector("#video-fondo").pause();
      }, 10);

    },
    repetirVideoIzquierda() {
      document.querySelector("#video-izquierda").play();
    }
  },

  components: {HeaderVue, FooterVue, Spinner},
};
</script>

<style>
</style>
