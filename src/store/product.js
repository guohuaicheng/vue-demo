export default {
  state: {
    products: []
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
    queryProducts(context) {
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