<style>
  .definition-name {
    font-size: 20px;
    padding: 10px;
    display: inline-block;
  }
  .build-stages-height-100{
    height: 100%;
    position: relative;
    /*position: absolute;
    top:20px;
    bottom:20px;
    width: 100%;*/
  }
  .md-dynamic-height {
    position: absolute;
    top: 40px;
    bottom: 0px;
  }
  .md-tabs-content {
    position: absolute !important;
    top: 48px;
    bottom: 0px;
    height: auto !important;
  }
  #overview, #trigger {
    padding: 10px;
  }
  .build-def-header {
    height: 40px;
    width: 100%;
  }

  .build-def-header button {
    position: absolute;
    /*top: -4px;*/
    right: 0px;
  }
</style>
<template>
  <div class='build-stages-height-100'>
    <div class="build-def-header">
      <span class="definition-name">{{buildDefinition.definitionName}}</span>
      <md-button class="md-icon-button" @click="save">
        <md-icon>save</md-icon>
      </md-button>
    </div>
    <md-tabs>
      <md-tab id="overview" md-label="概要">
        <build-overview :buildDefinition="buildDefinition" ref="overview"></build-overview>
      </md-tab>

      <md-tab id="stages" md-label="任务">
        <build-stages :buildDefinition="buildDefinition" ref="stages"></build-stages>
      </md-tab>

      <md-tab id="trigger" md-label="触发策略">
        <build-trigger :buildDefinition="buildDefinition"></build-trigger>
      </md-tab>

      <md-tab id="variables" md-label="变量">
        <build-variable v-model="buildDefinition.variableDefine" />
      </md-tab>

      <md-tab id="history" md-label="历史">
        <build-history v-if="buildDefinition.definitionId" :definitionId="buildDefinition.definitionId" />
      </md-tab>
    </md-tabs>
  </div>
</template>
<script>
  import BuildOverview from './BuildOverview.vue';
  import BuildStages from './BuildStages.vue';
  import BuildTrigger from './BuildTrigger.vue';
  import BuildVariable from './BuildVariable.vue';
  import BuildHistory from './BuildHistory.vue';
  export default {
    props: {
      buildDefinition: Object
    },
    methods: {
      save() {
        this.$http.put("/api/cd/builddefs/" + this.buildDefinition.definitionId, { "buildDefinition": this.buildDefinition }).then((res) => {
          debugger;
        }, (res) => {
          debugger;
        })
      }
    },
    components: {
      BuildOverview,
      BuildStages,
      BuildTrigger,
      BuildVariable,
      BuildHistory
    }
  }
</script>