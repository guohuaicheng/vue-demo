<template>
    <md-table md-sort="calories">
    <md-table-header>
      <md-table-row>
        <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
        <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
        <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
        <md-table-head md-sort-by="carbs" md-numeric>Carbs (g)</md-table-head>
        <md-table-head md-sort-by="protein" md-numeric>Protein (g)</md-table-head>
      </md-table-row>
    </md-table-header>

    <md-table-body>
      <md-table-row v-for="(row, index) in 5" :key="index">
        <md-table-cell>Dessert Name</md-table-cell>
        <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
</template>
<style></style>
<script>
  export default {
    data() {
      return {};
    },
    props: {

    }
  }
</script>