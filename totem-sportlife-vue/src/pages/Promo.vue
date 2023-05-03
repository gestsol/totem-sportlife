<template>
  <div>
    <spinner v-show="cargando" />
    <header-vue :logo="true" :flecha="true" />

    <video
      v-on:loadeddata="cargando = false"
      class="w-full absolute top-0 left-0 -z-20"
      src="./../assets/video/video2.mp4"
      type="video.mp4"
      onclick="this.ended || this.paused ? this.play() : this.pause();"
      autoplay
    ></video>

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
          :mesesCompra="imagen.mesesCompra"
        />

        <div class="fixed top-[429px] left-[1032px]">
          <img src="./../assets/img/carroCompra.svg" height="407px" />
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
      //Array del que se saca la información para generar las imagenes 
      //con los meses
      imagenesMeses: [
        {
          nombreImagen: "1mes.png",
          cuerpoTexto: "1 <br/> MES",
          mesesCompra: 1,
        },
        {
          nombreImagen: "3meses.png",
          cuerpoTexto: "3 <br/> MESES",
          mesesCompra: 3,
        },
        {
          nombreImagen: "6meses.png",
          cuerpoTexto: "6 <br/> MESES",
          mesesCompra: 6,
        },
        {
          nombreImagen: "12meses.png",
          cuerpoTexto: "12 <br/> MESES",
          mesesCompra: 12,
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
};
</script>
  
<style scoped>
</style>