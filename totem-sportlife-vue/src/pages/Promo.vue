<template>
  <div>
    <header-vue colorLogo="blanco" :logo="true" />

    <video
      src="./../assets/video/video2.mp4"
      type="video.mp4"
      onclick="this.paused ? this.play() : this.pause();"
      loop="true"
    ></video>

    <div class="relative z-10">
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col">
          <input
            type="search"
            id="site-search"
            name="q"
            style="width: 470.266px"
          />

          <button>buscar</button>
          
          <router-link :to="{ name: 'pago' }">
            <div
              class="float-left bg-white h-fit w-fit m-[-220px] mt-[78px] text-center pl-[1px]"
            >
              <div class="carta1">
                <div>
                  <img
                    class="w-[207px] h-[441px]"
                    src="./../assets/img/paj1.png"
                  />
                </div>
                <div>
                  <img
                    class="w-[207px] h-[207px]"
                    src="./../assets/img/PAGOSPORTLIFE.png"
                  />
                </div>
              </div>
            </div>
          </router-link>

          <router-link :to="{ name: 'pago' }">
            <div
              class="float-left bg-white h-fit w-fit m-[-220px] mt-[78px] text-center ml-[2%] pl-[1px]"
            >
              <div class="carta2">
                <div>
                  <img
                    class="w-[207px] h-[441px]"
                    src="./../assets/img/paj2.png"
                  />
                </div>
                <div>
                  <img
                    class="w-[207px] h-[207px]"
                    src="./../assets/img/PAGOSPORTLIFE.png"
                  />
                </div>
              </div>
            </div>
          </router-link>

          <router-link :to="{ name: 'pago' }">
            <div
              class="float-left bg-white h-fit w-fit m-[-220px] mt-[78px] text-center ml-[38%] pl-[1px]"
            >
              <div class="carta3">
                <div>
                  <img
                    class="w-[207px] h-[441px]"
                    src="./../assets/img/paj3.png"
                  />
                </div>

                <div>
                  <img
                    class="w-[207px] h-[207px]"
                    src="./../assets/img/PAGOSPORTLIFE.png"
                  />
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "../components/Header.vue";

export default {
  components: {
    HeaderVue,
  },
};
</script>

<style scoped>
body {
  overflow: hidden;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  right: 50;
  width: 100%;
}

.logo {
  position: relative;
  z-index: 2;
  margin-top: 3%;
  margin-left: 5%;
}

.btn {
  margin-left: 346px;
  margin-top: 10px;
}

.btn-bd-primary {
  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet);
  --bs-btn-border-color: var(--bd-violet);
  --bs-btn-border-radius: 0.5rem;
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #{shade-color($bd-violet, 10%)};
  --bs-btn-hover-border-color: #{shade-color($bd-violet, 10%)};
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #{shade-color($bd-violet, 20%)};
  --bs-btn-active-border-color: #{shade-color($bd-violet, 20%)};
}

.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  float: left;
  background: white;
  height: 100px;
  width: 215px;
  padding-bottom: 0px;
  margin: -220px;
  margin-top: 78px;
  text-align: center;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  border-radius: 15px;
}

.card:hover {
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

p {
  font-family: "Arial", Helvetica, sans-serif;
}

.cardCenter {
  width: 45%;
  margin: 0 auto;
}

hr {
  border: 0;
  height: 1px;
  background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
}

#site-search {
  margin-top: 30px;
  margin-left: -350px;
}

.circular {
  margin-right: 10px;
}

.flecha {
  margin-left: 92%;
  margin-top: -97px;
  margin-bottom: 3%;
  position: relative;
  z-index: 2;
}

.cuadrado-2 {
  margin-top: 90.3%;
  margin-left: 34%;
}
</style>