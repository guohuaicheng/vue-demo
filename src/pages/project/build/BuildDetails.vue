<style>
.definition-name {
  margin: 0 0 10px 10px;
}
</style>
<template>
  <div>
    <h2 class="definition-name">{{buildDefinition.definitionName}}</h2>
    <md-tabs>
      <md-tab id="movies" md-label="Movies">
        <build-overview :buildDefinition="buildDefinition"></build-overview>
      </md-tab>

      <md-tab id="music" md-label="Music">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas
          voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas
          voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>

      <md-tab id="books" md-label="Books">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>

      <md-tab id="pictures" md-label="Pictures" md-tooltip="This is the pictures tab!">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
    </md-tabs>
  </div>
</template>
<script>
  import BuildOverview from './BuildOverview.vue';
  export default {
    data() {
      return {
        buildDefinition: {}
      }
    },
    computed: {
      buildDefinition() {
        return this.$store.state.build.buildDefinition || {};
      }
    },
    methods: {
      getBuildDefinition(definitionId) {
        this.$store.dispatch("getBuildDefinition", definitionId)
      }
    },
    components: {
      BuildOverview
    },
    mounted() {
      if (!!this.$route.params.definitionId) {
        this.getBuildDefinition(this.$route.params.definitionId);
      }
    }
  }
</script>