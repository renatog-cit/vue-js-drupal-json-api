<template>
  <div id="app">

    <BarTop/>

    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>
  import BarTop from '@/components/BarTop.vue';
  export default {
    components: {
      BarTop
    }
  }
</script>

<style lang="scss">
  @import 'scss/style';
  body {
    padding-top: 70px;
    padding-bottom: 70px;
  }
</style>