import Vue from 'vue';
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  state: {
    buildDefinition: {}
  },
  mutations: {
    getBuildDefinition(state, buildDefinition) {
      state.buildDefinition = buildDefinition;
    }
  },
  actions: {
    getBuildDefinition(context, buildDefinitionId) {
      Vue.http.get('/iapi/cd/builddefs/' + buildDefinitionId + "/details").then((response) => {
        context.commit("getBuildDefinition", response.body);
      }, (response) => {
        console.log("d1")
      });
      // context.commit("getBuildDefinition", buildDefinition)
    }
  }
}