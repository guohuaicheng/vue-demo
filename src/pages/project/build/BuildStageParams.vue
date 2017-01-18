<style>
</style>
<template>
  <div>
    <div v-for="(fields, key) in fields">
      <fieldset>
        <legend>
          <span>{{key.split(":")[1]}}</span>
        </legend>
        <div v-for="field in fields">
          <md-input-container v-if="field.controlType === 'textbox'">
            <label>{{field.fieldLabel}}</label>
            <md-input v-model="field.defaultValue"></md-input>
          </md-input-container>
          <md-input-container v-else-if="field.controlType === 'password'">
            <label>{{field.fieldLabel}}</label>
            <md-input type="password" v-model="field.defaultValue"></md-input>
          </md-input-container>
          <d-select v-else-if="field.controlType === 'combobox'" :url="field.valueProvider.url" :valueField="field.valueProvider.valueField"
            :textField="field.valueProvider.textField" :name="field.fieldLabel" :defaultValue="field.defaultValue"></d-select>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      stageTpAttrDefs: Array
    },
    computed: {
      fields() {
        let fieldsByCategoryObj = {}, stageTpAttrDefs = this.stageTpAttrDefs;
        for (var i = 0; i < stageTpAttrDefs.length; i++) {
          if (fieldsByCategoryObj[stageTpAttrDefs[i]["category"]]) {
            fieldsByCategoryObj[stageTpAttrDefs[i]["category"]].push(stageTpAttrDefs[i]);
          } else {
            fieldsByCategoryObj[stageTpAttrDefs[i]["category"]] = [stageTpAttrDefs[i]];
          }
        }
        return fieldsByCategoryObj;
      }
    },
    mounted() {

    },
    updated() {

    }
  }
</script>