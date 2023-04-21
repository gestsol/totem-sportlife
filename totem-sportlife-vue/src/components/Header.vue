<template>
  <header>
    <div v-if="logo == true">
      <router-link class="fixed top-14 left-24 z-10" :to="{ name: 'home' }">
        <img v-if="colorLogo == 'azul'" src="./../assets/img/logoazul.svg" />
        <img
          v-else-if="colorLogo == 'blanco'"
          src="./../assets/img/logoblanco1.svg"
        />
      </router-link>
    </div>

    <div>
      <router-link class="fixed top-16 right-24 z-10" :class="{'pt-[1.35rem]': !this.logo}" :to="{ name: 'index' }"
        ><img src="./../assets/img/flecha.svg"
      /></router-link>
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