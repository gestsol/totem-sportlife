<template>
  <div>
    <v-idle class="z-50" :events="['mousemove', 'keypress', 'mousedown', 'touchstart']" :duration="30" @idle="cambiarRuta" />
    <marco/>
    <router-view></router-view>
    <footer-vue />
  </div>
</template>
<script>
import FooterVue from "./components/Footer.vue";
import Marco from "./components/Marco.vue";



export default {
  methods:{
    cambiarRuta(){
      if(this.$route.name != 'inicio'){
        this.$router.push({name:'inicio'})
      }
    }
  },

  components: {
    FooterVue,
    Marco,
  },
};
</script>
<style>
body {
  overflow: hidden;
}
</style>
