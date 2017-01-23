<style>

</style>
<template>
  <md-table-card>
    <md-toolbar>
      <md-button class="md-icon-button" @click="openEditDialog">
        <md-icon>add</md-icon>
      </md-button>
    </md-toolbar>
    <md-table md-sort="calories">
      <md-table-header>
        <md-table-row>
          <md-table-head>名称</md-table-head>
          <md-table-head>值</md-table-head>
          <md-table-head>描述</md-table-head>
          <md-table-head width="10px">操作</md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, rowIndex) in cVariables" :key="rowIndex">
          <md-table-cell>
            {{row.name}}
          </md-table-cell>
          <md-table-cell>
            {{row.value}}
          </md-table-cell>
          <md-table-cell>
            {{row.description}}
          </md-table-cell>
          <md-table-cell>
            <md-button class="md-icon-button" @click="openEditDialog(row)">
              <md-icon>edit</md-icon>
            </md-button>
          </md-table-cell>
          <md-table-cell>
            <md-button class="md-icon-button" @click="deleteRow(row)">
              <md-icon>delete</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
      <md-dialog-confirm md-content="是否删除此变量" md-ok-text="OK" md-cancel-text="NO" @close="onClose" ref="dialog3">
      </md-dialog-confirm>
      <md-dialog md-open-from="body" md-close-to="body" ref="dialog2">
        <md-dialog-title>{{dialogTitle}}</md-dialog-title>

        <md-dialog-content>
          <form>
            <md-input-container>
              <label>名称</label>
              <md-input v-model="varKey" required></md-input>
            </md-input-container>
            <md-input-container>
              <label>值</label>
              <md-input v-model="varValue" required></md-input>
            </md-input-container>
            <md-input-container>
              <label>描述</label>
              <md-textarea v-model="varDesc"></md-textarea>
            </md-input-container>
          </form>
        </md-dialog-content>

        <md-dialog-actions>
          <md-button class="md-primary" @click="closeEditDialog('cancel')">Cancel</md-button>
          <md-button class="md-primary" @click="closeEditDialog('ok')">Save</md-button>
        </md-dialog-actions>
      </md-dialog>
    </md-table>
  </md-table-card>
</template>
<script>
  export default {
    props: {
      value: {
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
      openEditDialog(row) {
        if (row && row.name) {
          this.dialogTitle = "修改";
          this.rowName = row.name;
          this.varKey = row.name;
          this.varValue = row.value;
          this.varDesc = row.description;
        } else {
          this.dialogTitle = "增加";
          this.rowName = "";
          this.varKey = "";
          this.varValue = "";
          this.varDesc = "";
        }
        this.$refs["dialog2"].open();
      },
      closeEditDialog(action) {
        if (action === "ok") {
          if (this.rowName) {
            for (let i = this.cVariables.length - 1; i >= 0; i--) {
              if (this.cVariables[i].name === this.rowName) {
                this.cVariables[i] = {
                  name: this.varKey,
                  value: this.varValue,
                  description: this.varDesc
                };
                break;
              }
            }
          } else {
            this.cVariables.push({
              name: this.varKey,
              value: this.varValue,
              description: this.varDesc
            })
          }
        }
        this.$emit("input", JSON.stringify(this.cVariables));
        this.$refs["dialog2"].close();
      },
      deleteRow(row) {
        this.rowName = row.name;
        this.$refs["dialog3"].open();
      },
      onClose(type) {
        if (type === "ok") {
          for (let i = this.cVariables.length - 1; i >= 0; i--) {
            if (this.cVariables[i].name === this.rowName) {
              this.cVariables.splice(i, 1);
              break;
            }
          }
          this.$emit("input", JSON.stringify(this.cVariables));
        } else if (type === "cancel") {

        }
      }
    },
    watch: {},
    data() {
      return {
        rowName: "",
        dialogTitle: "",
        varKey: "",
        varValue: "",
        varDesc: ""
      }
    },
    components: {}
  }
</script>