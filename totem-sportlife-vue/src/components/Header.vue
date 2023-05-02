<template>
  <header>
    <div v-if="logo == true">
      <router-link
        class="fixed top-[71px] left-[141px] z-10"
        :to="{ name: 'home' }"
      >
        <img
          class="w-[337px] h-[157]"
          v-if="colorLogo == 'azul'"
          src="./../assets/img/logoazul.svg"
        />
        <img
          class="w-[337px] h-[157]"
          v-else-if="colorLogo == 'blanco'"
          src="./../assets/img/logoblanco1.svg"
        />
      </router-link>
    </div>

    <div v-if="!rutaFlechaAtras">
      <router-link
        class="fixed top-[71px] left-[1710px] z-40"
        :class="{ 'pt-[1.35rem]': !this.logo }"
        :to="{ name: 'index' }"
        ><img src="./../assets/img/flecha.svg"
      /></router-link>
    </div>
    <div v-else>
      <button
        class="fixed top-[71px] left-[1710px] z-40"
        :class="{ 'pt-[1.35rem]': !this.logo }"
        @click="$router.go(-1)"
        ><img src="./../assets/img/flecha.svg"
      /></button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    logo: Boolean,
    colorLogo: String,
    rutaFlechaAtras:  Boolean,
  },
};
</script>

<style>
</style>