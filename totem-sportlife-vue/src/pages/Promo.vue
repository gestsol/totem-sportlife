<template>
  <div>
    <spinner v-show="cargando"/>
    <header-vue colorLogo="blanco" :logo="true" />


     <video v-on:loadeddata="cargando = false"
      class="w-full absolute top-0 left-0"
      src="./../assets/video/video2.mp4"
      type="video.mp4"
      onclick="this.paused ? this.play() : this.pause();"
      loop="true"
      autoplay
      muted
    ></video>

    <!-- <img
      class="w-full absolute top-0 left-0"
      src="./../assets/video/placeholder2.png"
    /> -->

    <div class="z-10 fixed right-24 top-80">
      <div class="flex flex-row gap-3">
        <imagen-texto
          v-for="imagen in imagenesMeses"
          :key="imagen.id"
          :ancho="'11rem'"
          :alto="'16rem'"
          :nombreRuta="'qr'"
          :nombreImagen="imagen.nombreImagen"
          :cuerpoTexto="imagen.cuerpoTexto"
        />

        <div
          class="fixed border-dotted rounded-3xl border-white border-4 w-5/12 h-2/6 top-96 right-[4.5rem]"
        ></div>

        <div class="top-[62%] right-[23.5rem] fixed">
          <a :to="{ name: 'qr' }">
            <img
              src="./../assets/img/Componente1-1.svg"
              width="180"
              height="180"
            />
          </a>
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
import Spinner from '../components/Spinner.vue';

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
      cargando: true
    };
  },
  components: {
    HeaderVue,
    FooterVue,
    ImagenTexto,
    Spinner,
  },
  methods:{
    mensaje:() => {
      console.log('hola')
    }
  }
};
</script>
  
<style scoped>
#mes-1 {
  background-image: url("./../assets/img/1mes.png");
  background-size: 100% 100%;
}
</style>