<template>
  <div class="z-10">
    <router-link :to="{ name: nombreRuta, params: { mes: mesesCompra } }">
      <div
        class="flex flex-col justify-center"
        :id="id"
        :style="{
          'background-image': 'url(' + srcImagen + ')',
          width: ancho,
          height: alto,
        }"
        style="background-size: 100% 100%"
      >
        <div
          class="text-white text-center bg-black/60 p-3 text-3xl font-bold flex w-fit mx-auto rounded-sm"
        >
          <span v-html="cuerpoTexto"> </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    //require() no funciona con vite, con esta propiedad consigo la url de la imagen
    srcImagen() {
      return new URL(`../assets/img/${this.nombreImagen}`, import.meta.url)
        .href;
    },
  },

  props: {
    //name de la ruta declarado en router
    nombreRuta: {
      String,
      required: true,
    },

    //El ancho y el alto que tendrá la imagen
    ancho: {
      String,
      required: true,
    },
    alto: {
      String,
      required: true,
    },

    //Texto dentro del cuadro. Se lee como html para poder agregar etiquetas como <br>
    cuerpoTexto: {
      String,
      required: true,
    },

    //Fin de la ruta de la imagen. Utiliza imagenes que están en assets/img.
    //escribir nombre completo del archivo como imagen.png
    nombreImagen: {
      String,
      required: true,
    },

    //Numero de meses de la suscripción que se mostrará en el código qr
    mesesCompra: {
      Number,
      required: true,
    },
  },
};
</script>

<style>
span {
  font-family: "Helvetica Neue";
}
</style>