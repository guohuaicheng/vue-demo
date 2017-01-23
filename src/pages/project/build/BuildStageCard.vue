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
  <li class='build-stage-card' @click="stageCardClicked">
    <!--{{buildStage.stageName}}-->
    <img class='build-stage-card-img' :src="StageIcons[buildStage.stageTpId]" />
    <div class='build-stage-card-intro'>
      <div class='build-stage-card-name large-font'>
        <!--{{stageTpVO.stageTpLabel}}-->
        {{buildStage.stageName}}
      </div>
      <div class='build-stage-card-desc small-font'>
        <!--{{stageTpVO.description}}-->
        {{buildStage.stageTpDescription}}
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
    data() {
      return {
        StageIcons
      }
    },
    methods: {
      stageCardClicked() {
        this.$emit("click", this.buildStage);
      }
    }
  }
</script>