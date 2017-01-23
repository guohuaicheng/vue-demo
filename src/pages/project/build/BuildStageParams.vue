<style>
  #js-editor {
    width: 100%;
    height: 200px;
    margin-top: 5px;
  }
  label.ccc {
    font-size: 12px;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: .3s;
    color: rgba(0, 0, 0, 0.54);
    line-height: 20px;
  }
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
            <md-input v-model="field.attrValue"></md-input>
          </md-input-container>
          <md-input-container v-else-if="field.controlType === 'password'">
            <label>{{field.fieldLabel}}</label>
            <md-input type="password" v-model="field.attrValue"></md-input>
          </md-input-container>
          <d-select v-else-if="field.controlType === 'combobox'" :url="generateUrl(JSON.parse(field.valueProvider).url)" :valueField="JSON.parse(field.valueProvider).valueField"
            :textField="JSON.parse(field.valueProvider).textField" :name="field.fieldLabel" v-model="field.attrValue"></d-select>
          <div v-else-if="field.controlType === 'editor'">
            <label class="ccc">{{field.fieldLabel}}</label>
            <!--<div id="js-editor">
            </div>
            {{renderEditor(field.attrValue)}}-->
            <monaco-editor v-model="field.attrValue" />
          </div>
          <d-checkbox :key="field.attrId" v-else-if="field.controlType === 'checkbox'" v-model="field.attrValue" :id="field.attrId"
            :fieldLabel="field.fieldLabel"></d-checkbox>
        </div>
        <!--<div @click="aaaa">ddd</div>-->
      </fieldset>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      stageTpAttrDefs: Array
    },
    data() {
      return {};
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
    methods: {
      generateUrl(url) {
        let pathParams = {
          projectId: this.$route.params.projectId
        };
        if (url && url.indexOf(":") !== -1) {
          var params = url.match(/\:[a-zA-Z]+[\/]*/g);
          if (!params) {
            return url;
          }
          for (var i = 0; i < params.length; i++) {
            var param = params[i].substring(1);
            if (param.indexOf("/") !== -1) {
              param = param.substring(0, param.length - 1);
            }
            url = url.substring(0, url.indexOf(":" + param)) + pathParams[param] + url.substring(url.indexOf(":" + param) + param.length + 1);
          }
        }
        return url;
      },
      aaaa() {
        debugger;
        console.log("ggg");
      },
      // renderEditor(attrValue) {
      //   let fn = function() {
      //     var dd = document.getElementById('js-editor');
      //     if (dd) {
      //       var editor = mymonaco.editor.create(dd, {
      //         value: attrValue,
      //         language: 'xml'
      //       });
      //     } else {
      //       setTimeout(function() {
      //         fn();
      //       }, 50);
      //     }
      //   }
      //   fn();
      // }
    },
    mounted() {

    },
    updated() {
    }
  }
</script>