<template>
  <md-table md-sort="calories">
    <md-table-header>
      <md-table-row>
        <md-table-head md-sort-by="projectName">名称</md-table-head>
        <md-table-head md-sort-by="acl">可见性</md-table-head>
        <md-table-head md-sort-by="projectStatus">状态</md-table-head>
        <md-table-head md-sort-by="productName">关联产品</md-table-head>
        <md-table-head md-sort-by="productVersions">关联产品版本</md-table-head>
        <md-table-head md-sort-by="description">描述</md-table-head>
        <md-table-head md-sort-by="createTime">创建时间</md-table-head>
        <md-table-head>操作</md-table-head>
      </md-table-row>
    </md-table-header>

    <md-table-body>
      <md-table-row v-for="(row, index) in products" :key="index">
        <md-table-cell>
          <router-link :to="'project/' + row.projectId + '/overview'">{{row.projectName}}</router-link>
        </md-table-cell>
        <md-table-cell>{{row.acl == "PUBLIC" ? "公开" : "私有"}}</md-table-cell>
        <md-table-cell>{{row.projectStatus}}</md-table-cell>
        <md-table-cell>{{row.productName}}</md-table-cell>
        <md-table-cell>{{row.productVersions}}</md-table-cell>
        <md-table-cell>{{row.description}}</md-table-cell>
        <md-table-cell>{{row.createTime}}</md-table-cell>
        <md-table-cell>{{}}</md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
</template>
<style></style>
<script>
  export default {
    data() {
      return {
        project: "project/",
        products: []
      };
    },
    computed: {
      // products: this.$store.dispatch("queryProducts")
    },
    methods: {
      queryProjects() {
        this.$http.post('/api/pm/projects/projectlist').then((response) => {
          // success callback
          this.products = response.body.data;
        },
          (response) => {
            // error callback
            console.log("d1")
          }
        );
      }
    },
    props: {},
    mounted() {
      this.queryProjects();
    }
  }
</script>