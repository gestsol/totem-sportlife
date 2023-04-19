<template>
  <body>
    <header-vue />
    <iframe
    class="w-screen h-screen"
      src="https://www.sportlife.cl/sportlife-compra/checkout.php"
      
    ></iframe>
  </body>
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

</style>