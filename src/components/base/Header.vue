<style>
  .portal-header_div {
    position: fixed;
    width: 100%;
    height: 40px;
    background-color: saddlebrown;
  }
  
  .portal-header-right_div {
    float: right;
    margin-right: 10px;
    margin-top: 5px;
  }
  
  .router-link {
    /*float: left;*/
    margin-left: 40px;
    color: #FFF !important;
    font-size: 18px;
    /*color: red;*/
    /*border: 1px solid #FFF;*/
  }
  
  .active {
    text-decoration: underline !important;
  }
</style>
<template>
  <md-toolbar :class="className">
    <h2 class="md-title" style="flex: 1;"> PrimetonOps
<span style="margin-left: 100px">
<router-link class="router-link" to="/products" :class="{active:(path.indexOf('/product'))===0}">产品</router-link>
<router-link class="router-link" to="/projects" :class="{active:(path.indexOf('/project'))===0}">项目</router-link>
</span>
</h2>

<md-button class="md-icon-button">
  <md-icon>favorite</md-icon>
</md-button>
</md-toolbar>
</template>

<script>
  export default {
    props: {
      className: String
    },
    data() {
      return {
        path: ""
      }
    },
    computed: {
      path() {
        return this.$route.fullPath;
      }
    },
    methods: {
      gotoProject() {
        this.$store.dispatch("getLeftBarItems", "project")
      },
      gotoProduct() {
        this.$store.dispatch("getLeftBarItems", "product")
      }
    }
  }
</script>