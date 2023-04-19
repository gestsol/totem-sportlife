<template>
  <header class="relative h-[100px] z-50">
    <div class="fixed ml-[92.8%] mt-[74px] z-10">
      <router-link :to="{ name: 'index' }"
        ><img src="./../assets/img/flecha.svg"
      /></router-link>
    </div>
    <div v-if="logo == true" class="fixed mt-[3%] ml-[5%] z-10">
      <router-link :to="{ name: 'home' }">
        <img v-if="colorLogo == 'azul'" src="./../assets/img/logoazul.svg" />
        <img
          v-else-if="colorLogo == 'blanco'"
          src="./../assets/img/logoblanco1.svg"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    logo: Boolean,
    colorLogo: String,
  },
};
</script>

<style>
</style>