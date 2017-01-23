<style>

</style>
<template>
  <div>
    {{project.projectId}} - {{project.projectName}}
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        project: {
          projectId: "x"
        }
      }
    },
    computed: {},
    methods: {
      getProject() {
        var projectId = this.$route.params.projectId;
        this.$http.get('/api/pm/projects/' + projectId).then((response) => {
          // success callback
          this.project = response.body || {};
        }, (response) => {
          // error callback
          console.log("d1")
        });
      }
    },
    mounted() {
      this.getProject();
    }
  }
</script>