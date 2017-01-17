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
        <router-link :to="'/projects/' + $route.params.projectId + '/builds/' + buildDefinition.definitionId" :class="{active: ('/projects/' + $route.params.projectId + '/builds/' + buildDefinition.definitionId) === path}">
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
        this.$store.dispatch("getBuildDefinition", definitionId);
      }
    },
    mounted() {
      this.queryBuildDefinitions(this.$route.params.projectId, (buildDefinitions) => {
        this.buildDefinitions = buildDefinitions;
        var path = this.$route.fullPath;
        if (path.endsWith("/builds")) {
          if (buildDefinitions && buildDefinitions.length > 0) {
            this.$router.replace("/projects/" + this.$route.params.projectId + "/builds/" + buildDefinitions[0].definitionId);
          } else {

          }
        }
      });
    },
    updated() {
      var path = this.$route.fullPath;
      if (path.endsWith("/builds") || path.endsWith("/builds/")) {
        if (this.buildDefinitions && this.buildDefinitions.length > 0) {
          this.$router.replace("/projects/" + this.$route.params.projectId + "/builds/" + this.buildDefinitions[0].definitionId);
        } else {

        }
      }
    }
  }
</script>