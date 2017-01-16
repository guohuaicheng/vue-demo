export default {
  state: {
    name: "dd"
  },
  mutations: {
    login(state) {
      debugger;
      //   setTimeout(() => {
      state.name = "ddww"
        //   }, 3000);
    }
  },
  actions: {
    login(context) {
      debugger;
      $.ajax({
        url: "api/aaa",
        method: "get",
        success: function(res) {
          debugger;
        }
      })
    }
  }
}