<style>
  .js-editor {
    width: 100%;
    height: 200px;
    margin-top: 5px;
  }
</style>
<template>
  <div class="js-editor">
  </div>
</template>
<script>
  export default {
    props: {
      value: String,
      language: {
        type: String,
        default: "xml"
      }
    },
    methods: {
    },
    mounted() {
      this.editor = mymonaco.editor.create(this.$el, {
        value: this.value,
        language: this.language
      });
      var _this = this;
      this.editor.onKeyUp(function() {
        _this.$emit("input", _this.editor.getValue());
      })
      this.editor.onMouseUp(function() {
        _this.$emit("input", _this.editor.getValue());
      })
      // console.log(this.editor.getValue());
    }
  }
</script>