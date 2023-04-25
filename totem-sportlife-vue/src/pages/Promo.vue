<template>
  <div>
    <spinner v-show="cargando" />
    <header-vue colorLogo="blanco" :logo="true" />

    <video
      v-on:loadeddata="cargando = false"
      class="w-full absolute top-0 left-0"
      src="./../assets/video/video2.mp4"
      type="video.mp4"
      onclick="this.paused ? this.play() : this.pause();"
      loop="true"
      autoplay
    ></video>

    <!-- <img
      class="w-full absolute top-0 left-0"
      src="./../assets/video/placeholder2.png"
    /> -->

    <div class="z-10 fixed left-[1075px] top-[347px]">
      <div class="flex flex-row gap-[7px] pr-14">
        <imagen-texto
          v-for="imagen in imagenesMeses"
          :key="imagen.id"
          :ancho="'160px'"
          :alto="'240px'"
          :nombreRuta="'compra'"
          :nombreImagen="imagen.nombreImagen"
          :cuerpoTexto="imagen.cuerpoTexto"
        />

        <div class="fixed top-[429px] left-[1032px]">
          <router-link :to="{name: 'compra'}">
            <img src="./../assets/img/carroCompra.svg" height="407px" />
          </router-link>
        </div>
      </div>
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
      imagenesMeses: [
        {
          nombreImagen: "1mes.png",
          cuerpoTexto: "1 <br/> MES",
        },
        {
          nombreImagen: "3meses.png",
          cuerpoTexto: "3 <br/> MESES",
        },
        {
          nombreImagen: "6meses.png",
          cuerpoTexto: "6 <br/> MESES",
        },
        {
          nombreImagen: "12meses.png",
          cuerpoTexto: "12 <br/> MESES",
        },
      ],
      cargando: true,
    };
  },
  components: {
    HeaderVue,
    FooterVue,
    ImagenTexto,
    Spinner,
  },
  methods: {
    mensaje: () => {
      console.log("hola");
    },
  },
};
</script>
  
<style scoped>
#mes-1 {
  background-image: url("./../assets/img/1mes.png");
  background-size: 100% 100%;
}
</style>