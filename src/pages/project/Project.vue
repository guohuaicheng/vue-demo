<style>
  .project-content {
    width: 100%;
    height: 100%;
  }
  
  .project-left-side {
    float: left;
    height: 100%;
    width: 100px;
    padding: 10px;
  }
  
  .project-center-bar {
    float: left;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
  
  .project-right-side {
    position: absolute;
    left: 101px;
    right: 0px;
    float: left;
    height: 100%;
    padding: 10px;
    overflow: auto
  }
</style>
<template>
  <div class="project-content">
    <div class="project-left-side">
      <LeftBar></LeftBar>
    </div>
    <div class="project-center-bar"></div>
    <div class="project-right-side">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    beforeCreate() {
      var path = this.$route.fullPath;
      if (path.endsWith("/project")) {
        this.$router.replace("/project/" + this.$route.params.projectId + "/overview");
      }
    }
  }
</script>