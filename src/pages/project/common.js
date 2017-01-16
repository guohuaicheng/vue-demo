export default {
  methods: {
    queryBuildDefinitions(projectId, cb) {
      this.$http.get('/api/cd/build/definitions/project/' + projectId).then((response) => {
        // success callback
        // this.buildDefinitions = response.body;
        cb && cb(response.body);
      }, (response) => {
        // error callback
        console.log("d1")
      });
    }
  }
}