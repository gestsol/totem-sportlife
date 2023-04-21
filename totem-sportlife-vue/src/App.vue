<template>
  <div>
    <!-- <v-idle class="hidden" :events="['mousemove', 'keypress', 'mousedown', 'touchstart']" :duration="3" @idle="cambiarRuta" /> -->
    <marco/>
    <router-view></router-view>
  </div>
</template>
<script>
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
    Marco,
  },
};
</script>
<style>
body {
  overflow: hidden;
}
</style>
