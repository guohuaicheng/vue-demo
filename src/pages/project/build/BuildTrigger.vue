<style>
</style>
<template>
  <div>
    <md-input-container>
      <label for="triggerType">触发策略</label>
      <md-select name="triggerType" id="triggerType" v-model="buildDefinition.triggerType">
        <md-option value="daily">每日触发</md-option>
        <md-option value="manual">手动触发</md-option>
      </md-select>
    </md-input-container>
    <div v-if="buildDefinition.triggerType === 'daily'">
      <trigger-regex v-model="buildDefinition.triggerRegex" />
    </div>
  </div>
</template>
<script>
  import VueTimepicker from 'vue2-timepicker'
  import TimeSpinner from '../../../components/TimeSpinner.vue'
  import TriggerRegex from './TriggerRegex.vue'
  export default {
    props: {
      buildDefinition: {
        type: Object,
        default: {}
      }
    },
    computed: {
    },
    watch: {
    },
    data() {
      return {
      }
    },
    components: {
      VueTimepicker,
      TimeSpinner,
      TriggerRegex
    }
  }
</script>