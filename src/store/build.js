import Vue from 'vue';
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  state: {
    buildDefinition: {},
    stageTpsAttrsDefinitions: {},
    stageTpAttrDefinitions: {}
  },
  mutations: {
    getBuildDefinition(state, buildDefinition) {
      state.buildDefinition = buildDefinition;
    },
    getBuildStageTPAttrsDefs(state, attrsDefs) {
      state.stageTpAttrDefinitions = attrsDefs;
      // context.state.stageTpsAttrsDefinitions[stageTpId] = response.body;
    }
  },
  actions: {
    getBuildDefinition(context, buildDefinitionId) {
      Vue.http.get('/api/cd/builddefs/' + buildDefinitionId + "/details").then((response) => {
        context.commit("getBuildDefinition", response.body);
      }, (response) => {
        console.log("d1")
      });
    },
    getBuildStageTPAttrsDefs(context, stageTpId) {
      if (context.state.stageTpsAttrsDefinitions[stageTpId]) {
        context.commit("getBuildStageTPAttrsDefs", context.state.stageTpsAttrsDefinitions[stageTpId]);
      } else {
        Vue.http.get('/api/cd/buildstagetps/' + stageTpId + "/attrdefs").then((response) => {
          context.state.stageTpsAttrsDefinitions[stageTpId] = response.body;
          context.commit("getBuildStageTPAttrsDefs", response.body);
        }, (response) => {
          console.log("d1")
        });
      }


    }
  }
}