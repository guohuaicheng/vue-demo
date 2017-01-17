<style>
</style>
<template>
  <div>
    <fieldset>
      <legend>
        <span>基本信息</span>
      </legend>
      <form>
        <md-input-container>
          <label>名称</label>
          <md-input v-model="buildDefinition.definitionName"></md-input>
        </md-input-container>

        <md-input-container>
          <label>描述</label>
          <md-input placeholder="描述信息" v-model="buildDefinition.description"></md-input>
        </md-input-container>
      </form>
    </fieldset>
  </div>
</template>
<script>
  export default {
    props: {
      buildDefinition: Object
    },
    data() {
      debugger;
      return {}
    }

  }
</script>