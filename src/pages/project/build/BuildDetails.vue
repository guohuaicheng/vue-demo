<style>
  .definition-name {
    margin: 0 0 10px 10px;
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
    top: 30px;
    bottom: 0px;
  }
  .md-tabs-content {
    position: absolute !important;
    top: 48px;
    bottom: 0px;
    height: auto !important;
  }
  #overview {
    padding: 10px;
  }
</style>
<template>
  <div class='build-stages-height-100'>
    <h2 class="definition-name">{{buildDefinition.definitionName}}</h2>
    <md-tabs>
      <md-tab id="overview" md-label="Movies">
        <build-overview :buildDefinition="buildDefinition"></build-overview>
      </md-tab>

      <md-tab id="stages" md-label="Music">
        <build-stages :buildDefinition="buildDefinition"></build-stages>
      </md-tab>

      <md-tab id="books" md-label="Books">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>

      <md-tab id="pictures" md-label="Pictures" md-tooltip="This is the pictures tab!">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
    </md-tabs>
  </div>
</template>
<script>
  import BuildOverview from './BuildOverview.vue';
  import BuildStages from './BuildStages.vue';
  export default {
    props: {
      buildDefinition: Object
    },
    components: {
      BuildOverview,
      BuildStages
    }
  }
</script>