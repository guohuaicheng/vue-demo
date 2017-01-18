<style>
  .build-stage-card:hover {
    background-color: #EEE;
  }

  .build-stage-card-selected {
    background-color: #EEE;
  }
  .build-stage-card {
    position: relative;
    margin-bottom: 5px;
    height: 52px;
    margin-top: 5px;
  }
  .build-stage-card-img {
    position: absolute;
    width: 46px;
    height: 46px;
    margin-left: 10px;
    margin-top: 3px;
    cursor: move;
  }
  .build-stage-card-intro {
    text-align: left;
    padding-left: 50px;
    padding-top: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .build-stage-card-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 20px;
  }
  .build-stage-card-desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 20px;
  }
  .remove-img {
    position: absolute; 
    right: 10px; 
    top:15px; 
    display:none;
  }
</style>
<template>
  <li class='build-stage-card' :stageTpVOId="stageTpVO.stageTpVOId" :stage-template-id="stageTpVO.stageTpId" :title="stageTpVO.stageTpLabel">
    <!--{{buildStage.stageName}}-->
    <img class='build-stage-card-img' :src="StageIcons[stageTpVO.stageTpId]" />
    <div class='build-stage-card-intro'>
      <div class='build-stage-card-name large-font'>
        {{stageTpVO.stageTpLabel}}
      </div>
      <div class='build-stage-card-desc small-font'>
        {{stageTpVO.description}}
      </div>
    </div>
    <img class='build-button-img remove-img' title='删除' />
  </li>
</template>
<script>
  import StageIcons from "../../../common/js/StageIcons.js"
  export default {
    props: {
      buildStage: Object
    },
    computed: {
      stageTpVO() {
        var stageTpVOId = this.generateStageTpVOId();
        if (this.buildStage) {
          return {
            "stageTpVOId": stageTpVOId,
            "stageTpId": this.buildStage.stageTpId,
            "stageTpLabel": this.buildStage.stageName,
            "description": this.buildStage.stageTpDescription,
            "buildStageAttributeDefinitions": []
          }
        }
        return {};

      }
    },
    data() {
      return {
        StageIcons
      }
    },
    methods: {
      generateStageTpVOId() {
        return Math.random().toString().substring(2);
      }
    }
  }
</script>