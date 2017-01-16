import Vue from 'vue';

export default {
  state: {
    buildDefinition: {}
  },
  mutations: {
    getBuildDefinition(state, buildDefinition) {
      debugger;
      //   setTimeout(() => {
      state.buildDefinition = buildDefinition;
      //   }, 3000);
    }
  },
  actions: {
    getBuildDefinition(context, buildDefinition) {
      context.commit("getBuildDefinition", buildDefinition)
    }
  }
}