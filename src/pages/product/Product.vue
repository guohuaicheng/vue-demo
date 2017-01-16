<style>
  .vue-home {
    position: absolute;
    min-width: 1000px;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
  }
  
  .vue-left-side {
    float: left;
    height: 100%;
    width: 150px;
    padding: 10px;
  }
  
  .vue-center-bar {
    float: left;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
  
  .vue-right-side {
    position: absolute;
    left: 151px;
    right: 0px;
    float: left;
    height: 100%;
    padding: 10px;
    overflow: auto
  }
</style>
<template>
<div class="vue-home">
  <div class="vue-left-side">
    <LeftBar></LeftBar>
  </div>
  <div class="vue-center-bar"></div>
  <div class="vue-right-side">
    <router-view/>
  </div>
</div>
</template>
<script>
  export default {
    props: {
      "head-height": {
        type: Number,
        default: 100
      },
      style: String
    },
    data: function() {
      return {}
    },
    methods: {
      ddd() {
        debugger;
        this.$store.dispatch("login");
      }
    }
  }
</script>