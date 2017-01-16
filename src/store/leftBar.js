export default {
  state: {
    items: [],
    items1: []
  },
  mutations: {
    getLeftBarItems(state, mType) {
      if(mType === "project") {
        state.items = [{
          path: "pj1",
          name: "pj1"
        }, {
          path: "pj2",
          name: "pj2"
        }]
      } else if(mType === "product") {
        state.items = [{
          path: "p1",
          name: "p1"
        }, {
          path: "p2",
          name: "p2"
        }]
      } else {
        state.items = [];
      }
    },
    getLeftBarItems1(state, mType) {
      if(mType === "project") {
        state.items1 = [{
          path: "pj1",
          name: "pj1"
        }, {
          path: "pj2",
          name: "pj2"
        }]
      } else if(mType === "product") {
        state.items1 = [{
          path: "p1",
          name: "p1"
        }, {
          path: "p2",
          name: "p2"
        }]
      } else {
        state.items1 = [];
      }
    }
  },
  actions: {
    getLeftBarItems(context, mType) {
      context.commit("getLeftBarItems", mType)
    },
    getLeftBarItems1(context, mType) {
      context.commit("getLeftBarItems1", mType)
    }
  }
}