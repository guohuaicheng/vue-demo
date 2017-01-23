<template>
  <md-checkbox v-else-if="field.controlType === 'checkbox'" v-model="ccc">{{fieldLabel}}</md-checkbox>
</template>

<script>
  export default {
    props: {
      id: String,
      value: String,
      fieldLabel: String
    },
    data() {
      let ddd = this.value === "true";
      return {
        ccc: ddd
      }
    },
    watch: {
      ccc(value) {
        this.$emit("input", value + "");
      }
    }
  }
</script>