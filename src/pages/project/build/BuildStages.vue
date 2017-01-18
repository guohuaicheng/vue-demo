<style>
  .project-content {
    width: 100%;
    height: 100%;
  }
  
  .build-stage-left-side {
    float: left;
    height: 100%;
    width: 300px;
    padding: 10px;
  }
  
  .project-center-bar {
    float: left;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
  
  .build-stage-right-side {
    position: absolute;
    left: 301px;
    right: 0px;
    float: left;
    height: 100%;
    padding: 10px;
    overflow: auto;
    border-left: 1px #ccc solid;
  }
  .build-stages {
    padding-top: 5px;
    padding-left: 0;
    list-style: none;
  }
  .md-tabs .md-tab {
    padding: 0;
    height: 100%;
  }
</style>
<template>
  <div class="project-content">
    <div class="build-stage-left-side">
      <div v-if="buildDefinition.buildPipeline">
        <ul class="build-stages">
          <div v-for="buildStage in buildDefinition.buildPipeline.buildStages" @click="renderParams(buildStage)">
            <build-stage-card :buildStage="buildStage" />
          </div>
        </ul>
      </div>
    </div>
    <div class="project-center-bar"></div>
    <div class="build-stage-right-side">
      <build-stage-params :stageTpAttrDefs="stageTpAttrDefs" />
    </div>
  </div>
</template>
<script>
  import BuildStageCard from './BuildStageCard.vue';
  import BuildStageParams from './BuildStageParams.vue';
  export default {
    props: {
      buildDefinition: {
        type: Object,
        default: { buildPipeline: {} }
      }
    },
    data() {
      return {
        buildStage: {}
      }
    },
    computed: {
      stageTpAttrDefs() {
        let stageTpAttrs = this.$store.state.build.stageTpAttrDefinitions;
        let fields = [];
        var stageAttrs = this.buildStage.buildStageAttributes;
        if (!stageTpAttrs) return fields;
        for (let m = 0; m < stageTpAttrs.length; m++) {
          let stageTpAttr = stageTpAttrs[m];
          let defaultValue = "";
          for (let i = 0; i < stageAttrs.length; i++) {
            let stageAttr = stageAttrs[i];
            if (stageAttr.attrDefId === stageTpAttr.attrDefId) {
              defaultValue = stageAttr.attrValue;
              break;
            }
          }
          fields.push({
            "fieldId": stageTpAttr.attrDefId,
            "fieldName": stageTpAttr.attrDefName,
            "fieldLabel": stageTpAttr.attrDefLabel,
            "sort": stageTpAttr.sort,
            "category": stageTpAttr.category,
            "isRequired": stageTpAttr.isRequired,
            "displayFormat": stageTpAttr.displayFormat,
            "tip": stageTpAttr.tip,
            "defaultValue": defaultValue,
            "controlType": stageTpAttr.controlType,
            "valueProvider": JSON.parse(stageTpAttr.valueProvider)
          })
        }
        return fields;
      }
    },
    methods: {
      renderParams(buildStage) {
        this.buildStage = buildStage;
        this.$store.dispatch("getBuildStageTPAttrsDefs", buildStage.stageTpId);
      }
    },
    components: {
      BuildStageCard,
      BuildStageParams
    }
  }
</script>