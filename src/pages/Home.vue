<style>
  .vue-home {
    position: absolute;
    min-width: 1000px;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
  }
  
  .content {
    position: absolute;
    top: 64px;
    bottom: 0px;
    width: 100%;
  }
</style>
<template>
  <div class="vue-home">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <div></div>
  </div>
</template>
<script>
  export default {
    props: {
      "head-height": {
        type: Number,
        default: 64
      },
      style: String
    },
    data: function() {
      return {}
    },
    methods: {
      ddd() {
        this.$store.dispatch("login");
      }
    }
  }
</script>