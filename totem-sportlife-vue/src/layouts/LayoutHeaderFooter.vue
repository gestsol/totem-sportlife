<template>
  <div>
      <header-vue/>
      <router-view></router-view>
      <footer-vue/>
  </div>
</template>

<script>
import FooterVue from '../components/Footer.vue'
import HeaderVue from '../components/Header.vue'


export default {
    components:{
        FooterVue,
        HeaderVue
    }
}
</script>

<style>

</style>