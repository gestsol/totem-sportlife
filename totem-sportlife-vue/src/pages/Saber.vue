<template>
  <body>
        <header>
            <div class="flecha">
                <router-link :to="{name: 'inicio'}"> <img src="./../assets/img/flecha.svg"> </router-link>
            </div>
            <div class="logo">
                <router-link :to="{name: 'home'}"> <img src="./../assets/img/logoazul.svg"> </router-link>                
            </div>

        </header>
        <iframe src="https://www.sportlife.cl/por-que-sportlife/" width="100%"
            height="900px" frameborder="0"></iframe>
        <footer>
            <div class="cuadrado-2">
                <img src="./../assets/img/Componente1–2.png" width="180"
                    height="180">
            </div>
        </footer>
    </body>
</template>

<script>
export default {

}
</script>

<style scoped>

.home {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
  }

  .flecha {
      position: fixed;
      margin-left: 92.8%;
      margin-top: 74px;
      z-index: 2;
  }
  
  .logo {

      position: fixed;
      z-index: 2;
      margin-top: 3%;
      margin-left: 5%;
  }
  header {
      position: relative;
      height: 100px
  }

  footer {
    height: 100px;
    position: relative;
   
}
.cuadrado-2 {
    margin-top: -256px;
    margin-left: 842px;
    position: fixed;
}
  

</style>