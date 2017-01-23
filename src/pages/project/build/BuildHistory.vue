<style>

</style>
<template>
  <md-table-card>
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>add</md-icon>
      </md-button>
    </md-toolbar>
    <md-table md-sort="calories">
      <md-table-header>
        <md-table-row>
          <md-table-head>Build No.</md-table-head>
          <md-table-head>开始时间</md-table-head>
          <md-table-head>结束时间</md-table-head>
          <md-table-head>持续时间</md-table-head>
          <md-table-head>进度</md-table-head>
          <md-table-head>状态</md-table-head>
          <md-table-head>操作</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, rowIndex) in instances" :key="rowIndex">
          <md-table-cell>
            {{row.buildNumber}}
          </md-table-cell>
          <md-table-cell>
            {{row.beginTime}}
          </md-table-cell>
          <md-table-cell>
            {{row.endTime}}
          </md-table-cell>
          <md-table-cell>
            {{row.buildDuration}}
          </md-table-cell>
          <md-table-cell>
            {{row.buildProgress}}
          </md-table-cell>
          <md-table-cell>
            {{row.instanceStatus}}
          </md-table-cell>
          <md-table-cell>
            <md-button class="md-icon-button">
              <md-icon>edit</md-icon>
            </md-button>
          </md-table-cell>
          <md-table-cell>
            <md-button class="md-icon-button">
              <md-icon>delete</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-table-card>
</template>
<script>
  export default {
    props: {
      definitionId: {
        type: String
      }
    },
    computed: {
      cVariables() {
        if (this.value && this.value.length > 0) {
          return JSON.parse(this.value);
        }
        return [];
      }
    },
    methods: {
    },
    watch: {
      definitionId(nv, ov) {
        // console.log(nv + "   " + ov);
      }
    },
    data() {
      return {
        instances: []
      }
    },
    components: {},
    mounted() {
      if (!this.definitionId) {
        this.$destroy();
      }
      console.log(this.definitionId);
      this.$http.get('/api/cd/builddefs/' + this.definitionId + '/instances?pageSize=10&pageIndex=0').then((resp) => {
        this.instances = resp.body.data;
      }, (resp) => {

      })
    }
  }
</script>