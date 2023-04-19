<template>
  <div class="overflow-hidden">
    <header-vue :logo="true" colorLogo="blanco" />
    <video class="w-full absolute top-0 left-0"
      src="./../assets/video/video1.mp4"
      type="video.mp4"
      autoplay="true"
      loop="true"
    ></video>
    <div class="relative z-10 mt-[3%] ml-[5%]">
      <div class="relative z-20">
        <div class="row">
          <div class="col">
            <h2
              class="mt-[180px] ml-[8px] text-[2rem] font-semibold mb-2 text-white"
            >
              Te cambiamos la vida
            </h2>
            <div>
              <router-link :to="{ name: 'saber' }">
                <img src="./../assets/img/Grupo8.png" />
              </router-link>
            </div>
          </div>
          <div class="col">
            <div class="mt-[551px] ml-[25%]">
              <!-- <img
                src="./../assets/img/Componente 1 – 1@2x.png"
                width="180"
                height="180"
              /> -->
            </div>
          </div>
          <div class="col">
            <div class="mt-[220px]">
              <!--<h1 class="pon" style="color: #fff;">Escoje tu sede<br>para ponerte en forma</h1>-->
              <router-link :to="{ name: 'promo' }">
                <img
                  class="w-[561px] h-[335px]"
                  src="./../assets/img/Recurso2-2.png"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "../components/Header.vue";
export default {
  components: { HeaderVue },
};
</script>

<style>

</style>