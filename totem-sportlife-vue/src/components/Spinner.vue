<template>
  <div class="w-full h-full z-50 bg-white absolute flex flex-col justify-center">
    <ring-loader color="#ffa500" size="200px" class="mx-auto" />
  </div>
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'

 export default({
   components: {
     RingLoader
   }
 })
</script>

<style>

</style>