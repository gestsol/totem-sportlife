<template>
  <header>
    <!-- Logo Izquierdo -->
    <div v-if="logo == true">
      <router-link
        class="fixed top-[71px] left-[141px] z-10"
        :to="{ name: 'inicio' }"
      >
        <img class="w-[337px] h-[157]" src="./../assets/img/logoblanco1.svg" />
      </router-link>
    </div>

    <!-- Flecha para navegar hacia atrás -->
    <div v-if="flecha">
      <button
        class="fixed top-[71px] left-[1710px] z-40"
        :class="{ 'pt-[1.35rem]': !this.logo }"
        @click="$router.go(-1)"
      >
        <img src="./../assets/img/flecha.svg" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    //verifica si se debe renderizar el logo
    logo: { Boolean, required: true },

    //verifica si se debe renderizar la flecha
    flecha: { Boolean, required: true },
  },
};
</script>

<style>
</style>
