<template>
  <header-vue :logo="false" :flecha="true" />
  <iframe
    src="https://www.sportlifezonanorte.cl/"
    width="100%"
    height="1080px"
    frameborder="0"
    sandbox="allow-scripts allow-same-origin"
  ></iframe>
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