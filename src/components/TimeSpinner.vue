<style>
.timespinner {
  border-bottom: 1px solid #CCC; 
}

.timespinner .time {
  display: inline-block;
  width: 30px;
  min-height: 32px;
  padding-top: 0;
}
.timespinner input {
  text-align: center;
}
.timespinner span {
  font-weight: bold;
}
</style>
<template>
  <div class="timespinner">
    <md-input-container class="time">
      <md-input v-model="hh"></md-input>
    </md-input-container>

    <span>:</span>
    <md-input-container class="time">
      <md-input v-model="mm"></md-input>
    </md-input-container>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        default: "22:00"
      }
    },
    data: function() {
      let t = this.value.split(":");
      return {
        hh: t[0],
        mm: t[1]
      }
    },
    watch: {
      hh(nv, ov) {
        try {
          nv = parseInt(nv);
          if (nv < 0 || nv > 23) {
            alert("hour error");
            this.hh = ov;
          }
        } catch (e) {
          alert("hour error");
          this.hh = ov;
        }
        this.$emit("input", this.hh + ":" + this.mm);
      },
      mm(nv, ov) {
        try {
          nv = parseInt(nv);
          if (nv < 0 || nv > 59) {
            alert("minute error");
            this.mm = ov;
          }
        } catch (e) {
          alert("minute error");
          this.mm = ov;
        }
        this.$emit("input", this.hh + ":" + this.mm);
      }
    },
    methods: {

    }
  }
</script>