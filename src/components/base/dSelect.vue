<template>
  <div>
    <md-input-container>
      <label :for="name">{{name}}</label>
      <md-select :name="name" :id="id" v-model="defaultValue">
        <md-option v-for="option in options" :value="option[valueField]">{{option[textField]}}</md-option>
      </md-select>
    </md-input-container>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      id: String,
      url: String,
      data: Array,
      textField: String,
      valueField: String,
      value: String
    },
    data() {
      return {
        options: this.url ? null : this.data,
        defaultValue: this.value
      }
    },
    watch: {
      defaultValue(value) {
        this.$emit("input", value);
      }
    },
    methods: {
    },
    mounted() {
      this.$http.get("/" + this.url).then((response) => {
        this.options = response.body;
      }, (response) => {

      })
    },
    updated() {

    }
  }
</script>