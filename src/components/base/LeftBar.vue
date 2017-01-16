<style>

</style>
<template>
  <div>
    <!--<div v-for="(item, index) in this.items" style="padding-bottom:20px">-->
    <router-link v-for="(item, index) in this.items" :to='item.path' class="aaa" :class="{active: (path === item.path) }">{{item.name}}</router-link>
    <!--</div>-->
  </div>
</template>
<style>
  .active {
    text-decoration: underline !important;
  }
  
  .aaa {
    display: block;
    font-size: 18px;
    color: #000 !important;
    margin-bottom: 10px;
  }
</style>
<script>
  export default {
    data() {
      var items = null;
      var route = this.$route.fullPath;
      if (route.indexOf("/project") === 0) {
        items = [{
          path: "/project/" + this.$route.params.projectId + "/overview",
          name: "overview"
        }, {
          path: "/project/" + this.$route.params.projectId + "/build",
          name: "构建"
        }]
      } else if (route.indexOf("/product") === 0) {
        items = [{
          path: "/products/p1",
          name: "p1"
        }, {
          path: "/products/p2",
          name: "p2"
        }]
      } else {
        items = [];
      }
      return {
        items: items
      }
    },
    beforeCreate() {
    },
    computed: {
      // items: function() {
      //   // debugger;
      //   var route = this.$route.fullPath;
      //   if (route.indexOf("/project") === 0) {
      //     return [{
      //       path: "overview",
      //       name: "overview"
      //     }, {
      //       path: "build",
      //       name: "构建"
      //     }]
      //   } else if (route.indexOf("/product") === 0) {
      //     return [{
      //       path: "/products/p1",
      //       name: "p1"
      //     }, {
      //       path: "/products/p2",
      //       name: "p2"
      //     }]
      //   } else {
      //     return [];
      //   }
      // },
      path() {
        return this.$route.fullPath;
      }
    },
    watch: {
      '$route'(to, from) { }
    },
    updated() {
    }

  }
</script>