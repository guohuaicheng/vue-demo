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
  .build-stage-card-selected {
    background-color: #EEE;
  }
</style>
<template>
  <div class="project-content">
    <div class="build-stage-left-side">
      <div v-if="buildDefinition.buildPipeline">
        <ul class="build-stages">
          <!--<div >-->
          <build-stage-card :buildStage="buildStage1" :class="{'build-stage-card-selected': buildStage1 === buildStage }" v-for="buildStage1 in buildDefinition.buildPipeline.buildStages"
            @click="renderParams" />
          <!--</div>-->
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
        type: Object
      }
    },
    data() {
      return {
        buildStage: null
      }
    },
    computed: {
      stageTpAttrDefs() {
        if (!this.buildStage) return [];
        if (this.buildStage.buildStageAttributes[0].category) return this.buildStage.buildStageAttributes;
        let stageTpAttrs = this.$store.state.build.stageTpAttrDefinitions;
        if (!stageTpAttrs || !stageTpAttrs.length) {
          return [];
        }
        // let fields = [];
        // var stageAttrs = this.buildStage.buildStageAttributes;
        // if (!stageTpAttrs) return fields;
        // for (let m = 0; m < stageTpAttrs.length; m++) {
        //   let stageTpAttr = stageTpAttrs[m];
        //   let defaultValue = "";
        //   for (let i = 0; i < stageAttrs.length; i++) {
        //     let stageAttr = stageAttrs[i];
        //     if (stageAttr.attrDefId === stageTpAttr.attrDefId) {
        //       defaultValue = stageAttr.attrValue;
        //       break;
        //     }
        //   }
        //   fields.push({
        //     "fieldId": stageTpAttr.attrDefId,
        //     "fieldName": stageTpAttr.attrDefName,
        //     "fieldLabel": stageTpAttr.attrDefLabel,
        //     "sort": stageTpAttr.sort,
        //     "category": stageTpAttr.category,
        //     "isRequired": stageTpAttr.isRequired,
        //     "displayFormat": stageTpAttr.displayFormat,
        //     "tip": stageTpAttr.tip,
        //     "defaultValue": defaultValue,
        //     "controlType": stageTpAttr.controlType,
        //     "valueProvider": JSON.parse(stageTpAttr.valueProvider)
        //   })
        // }
        // let flag = false;
        for (let i = 0, l = this.buildStage.buildStageAttributes.length; i < l; i++) {
          let attr = this.buildStage.buildStageAttributes[i];
          for (let j = 0, jl = stageTpAttrs.length; j < jl; j++) {
            if (attr.attrDefId === stageTpAttrs[j].attrDefId) {
              let stageTpAttr = stageTpAttrs[j];
              // this.configuredStage[this.buildStage.stageId] = true;
              attr.fieldLabel = stageTpAttr.attrDefLabel;
              attr.fieldName = stageTpAttr.attrDefName;
              attr.controlType = stageTpAttr.controlType;
              attr.valueProvider = stageTpAttr.valueProvider;
              attr.category = stageTpAttr.category;
              break;
            }
          }
        }
        if (!this.buildStage.buildStageAttributes[0].category) return [];
        return this.buildStage.buildStageAttributes;
      }
    },
    methods: {
      renderParams(buildStage) {
        this.buildStage = buildStage;
        if (!this.buildStage.buildStageAttributes[0].category) {
          this.$store.dispatch("getBuildStageTPAttrsDefs", buildStage.stageTpId);
        }
      }
    },
    mounted() {
    },
    watch: {
      buildDefinition() {
        if (this.buildDefinition && this.buildDefinition.buildPipeline && this.buildDefinition.buildPipeline.buildStages && this.buildDefinition.buildPipeline.buildStages.length > 0) {
          this.renderParams(this.buildDefinition.buildPipeline.buildStages[0]);
        } else {
          this.buildStage = null;
        }
      }
    },
    updated() {
      // if (!this.buildStage && this.buildDefinition && this.buildDefinition.buildPipeline && this.buildDefinition.buildPipeline.buildStages && this.buildDefinition.buildPipeline.buildStages.length > 0) {
      //   this.renderParams(this.buildDefinition.buildPipeline.buildStages[0]);
      // }
    },
    components: {
      BuildStageCard,
      BuildStageParams
    }
  }
</script>