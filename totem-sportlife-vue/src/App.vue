<template>
  <div>
    <!-- v-idle es una librería. Nombre: v-idle-3 -->
    <v-idle
      class="hidden"
      :events="['mousemove', 'keypress', 'mousedown', 'touchstart']"
      :duration="30"
      @idle="cambiarRuta"
    />
    <marco />
    <router-view></router-view>
  </div>
</template>
<script>
import Marco from "./components/Marco.vue";

export default {
  methods: {
    //redirecciono a la ruta de name inicio.
    //Ver router
    cambiarRuta() {
      if (this.$route.name != "inicio") {
        this.$router.push({ name: "inicio" });
      }
    },
  },

  components: {
    Marco,
  },
};
</script>
<style>
body {
  overflow: hidden;
}
</style>
