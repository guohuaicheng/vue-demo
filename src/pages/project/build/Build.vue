<style>
  .build-content {
    width: 100%;
    height: 100%;
    position: relative;
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
    /*padding: 10px;*/
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
      <build-details :buildDefinition="buildDefinition" />
    </div>
  </div>
</template>
<script>
  import mixins from '../common.js';
  import BuildDetails from './BuildDetails.vue';
  export default {
    mixins: [mixins],
    data() {
      return {
        buildDefinitions: [],
        definitionId: this.$route.params.definitionId,
        buildDefinition: {}
      }
    },
    computed: {
      path() {
        return this.$route.fullPath;
      },
      buildDefinition() {
        return this.$store.state.build.buildDefinition;
      }
    },
    methods: {
      getBuildDefinition(e) {
        let buildDefinitionId = "";
        if (typeof e === "string") {
          buildDefinitionId = e;
        } else {
          buildDefinitionId = e.target.getAttribute("definitionId");
        }
        this.$store.dispatch("getBuildDefinition", buildDefinitionId);
      }
    },
    mounted() {
      this.queryBuildDefinitions(this.$route.params.projectId, (buildDefinitions) => {
        this.buildDefinitions = buildDefinitions;
        var path = this.$route.fullPath;
        let buildDefinitionId = "";
        if (path.endsWith("/builds")) {
          if (buildDefinitions && buildDefinitions.length > 0) {
            this.$router.replace("/projects/" + this.$route.params.projectId + "/builds/" + buildDefinitions[0].definitionId);
            buildDefinitionId = buildDefinitions[0].definitionId;
          } else {

          }
        } else {
          buildDefinitionId = this.$route.params.definitionId;
        }
        this.getBuildDefinition(buildDefinitionId);
      });
    },
    updated() {
    },
    components: {
      BuildDetails
    },
  }
</script>