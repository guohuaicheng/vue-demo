<style>
  .build-content {
    width: 100%;
    height: 100%;
  }
  
  .build-left-side {
    float: left;
    height: 100%;
    width: 150px;
    padding: 10px;
  }
  
  .build-center-bar {
    float: left;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
  
  .build-right-side {
    position: absolute;
    left: 151px;
    right: 0px;
    float: left;
    height: 100%;
    padding: 10px;
    overflow: auto
  }
  .active {
    text-decoration: underline !important;
  }
</style>
<template>
  <div class="build-content">
    <div class="build-left-side">
      <div v-for="buildDefinition in buildDefinitions">
        <router-link :to="'/project/' + $route.params.projectId + '/build/' + buildDefinition.definitionId" :class="{active: ('/project/' + $route.params.projectId + '/build/' + buildDefinition.definitionId) === path}">
          <div @click="getBuildDefinition" :definitionId="buildDefinition.definitionId">{{buildDefinition.definitionName}}</div>
        </router-link>
      </div>
      <!--<div :click="getBuildDefinition">dddddddddd</div>-->
    </div>
    <div class="build-center-bar"></div>
    <div class="build-right-side">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import mixins from '../common.js';
  export default {
    mixins: [mixins],
    data() {
      return {
        buildDefinitions: [],
        definitionId: this.$route.params.definitionId,

      }
    },
    computed: {
      path() {
        return this.$route.fullPath;
      }
    },
    methods: {
      getBuildDefinition(e) {
        var definitionId = e.target.getAttribute("definitionId");
        this.$http.get('/api/cd/build/definitions/details/' + definitionId).then((response) => {
          this.$store.dispatch("getBuildDefinition", response.body);
        }, (response) => {
          console.log("d1")
        });
      }
    },
    mounted() {
      this.queryBuildDefinitions(this.$route.params.projectId, (buildDefinitions) => {
        this.buildDefinitions = buildDefinitions;
        var path = this.$route.fullPath;
        if (path.endsWith("/build")) {
          if (buildDefinitions && buildDefinitions.length > 0) {
            this.$router.replace("/project/" + this.$route.params.projectId + "/build/" + buildDefinitions[0].definitionId);
          } else {

          }
        }
      });
    },
    updated() {
      var path = this.$route.fullPath;
      if (path.endsWith("/build")) {
        if (this.buildDefinitions && this.buildDefinitions.length > 0) {
          this.$router.replace("/project/" + this.$route.params.projectId + "/build/" + this.buildDefinitions[0].definitionId);
        } else {

        }
      }
    }
  }
</script>