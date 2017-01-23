<style>
</style>
<template>
  <div>
    <div>
      <label class="ccc">循环时间</label>
      <time-spinner v-model="triggerTime"></time-spinner>
    </div>

    <div>
      <md-checkbox id="my-test0" name="my-test0" v-model="all">全选</md-checkbox>
      <md-checkbox id="my-test1" name="my-test1" v-model="mon">星期一</md-checkbox>
      <md-checkbox id="my-test2" name="my-test2" v-model="tus">星期二</md-checkbox>
      <md-checkbox id="my-test3" name="my-test3" v-model="wed">星期三</md-checkbox>
      <md-checkbox id="my-test4" name="my-test4" v-model="thu">星期四</md-checkbox>
      <md-checkbox id="my-test5" name="my-test5" v-model="fri">星期五</md-checkbox>
      <md-checkbox id="my-test6" name="my-test6" v-model="sat">星期六</md-checkbox>
      <md-checkbox id="my-test7" name="my-test7" v-model="sun">星期日</md-checkbox>
    </div>
  </div>
</template>
<script>
  import VueTimepicker from 'vue2-timepicker'
  import TimeSpinner from '../../../components/TimeSpinner.vue'
  export default {
    props: {
      value: String
    },
    data() {
      if (this.value) {
        var triggerRegex = this.value.split(" ");
        var triggerTime = triggerRegex[2] + ":" + triggerRegex[1];
        var triggerDate = triggerRegex[5];
        return {
          triggerTime,
          all: triggerDate === "1,2,3,4,5,6,7",
          mon: triggerDate.indexOf("1") != -1,
          tus: triggerDate.indexOf("2") != -1,
          wed: triggerDate.indexOf("3") != -1,
          thu: triggerDate.indexOf("4") != -1,
          fri: triggerDate.indexOf("5") != -1,
          sat: triggerDate.indexOf("6") != -1,
          sun: triggerDate.indexOf("7") != -1
        };
      } else {
        return {
          triggerTime: "22:00",
          all: false,
          mon: false,
          tus: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false
        };
      }
    },
    methods: {
      calculateValue() {
        var sss = "0 " + this.triggerTime.split(":")[1] + " " + this.triggerTime.split(":")[0] + " ? * " + (this.mon ? "1," : "") + (this.tus ? "2," : "") + (this.wed ? "3," : "") + (this.thu ? "4," : "") + (this.fri ? "5," : "") + (this.sat ? "6," : "") + (this.sun ? "7," : "");
        if (sss.endsWith(",")) {
          sss = sss.substring(0, sss.length - 1);
        }
        this.$emit("input", sss);
      }
    },
    watch: {
      triggerTime() {
        this.calculateValue();
      },
      "all": function(nv, ov) {
        if (ov == nv) return;
        if (nv) {
          if (this.mon && this.tus && this.wed && this.thu && this.fri && this.sat && this.sun) {
            return;
          }
          this.mon = this.mon || true;
          this.tus = this.tus || true;
          this.wed = this.wed || true;
          this.thu = this.thu || true;
          this.fri = this.fri || true;
          this.sat = this.sat || true;
          this.sun = this.sun || true;
        } else {
          if (this.mon && this.tus && this.wed && this.thu && this.fri && this.sat && this.sun) {
            this.mon = false;
            this.tus = false;
            this.wed = false;
            this.thu = false;
            this.fri = false;
            this.sat = false;
            this.sun = false;
          }
          if (this.mon || this.tus || this.wed || this.thu || this.fri || this.sat || this.sun) {
            return;
          }
          this.mon = false;
          this.tus = false;
          this.wed = false;
          this.thu = false;
          this.fri = false;
          this.sat = false;
          this.sun = false;
        }
        this.calculateValue();
      },
      mon(v) {
        if (v) {
          if (this.tus && this.wed && this.thu && this.fri && this.sat && this.sun) {
            this.all = true;
          }
        } else {
          this.all = false;
        }
        this.calculateValue();
      },
      tus(v) {
        if (v) {
          if (this.mon && this.wed && this.thu && this.fri && this.sat && this.sun) {
            this.all = true;
          }
        } else {
          this.all = false;
        }
        this.calculateValue();
      },
      wed(v) {
        if (v) {
          if (this.tus && this.mon && this.thu && this.fri && this.sat && this.sun) {
            this.all = true;
          }
        } else {
          this.all = false;
        }
        this.calculateValue();
      },
      thu(v) {
        if (v) {
          if (this.tus && this.wed && this.mon && this.fri && this.sat && this.sun) {
            this.all = true;
          }
        } else {
          this.all = false;
        }
        this.calculateValue();
      },
      fri(v) {
        if (v) {
          if (this.tus && this.wed && this.thu && this.mon && this.sat && this.sun) {
            this.all = true;
          }
        } else {
          this.all = false;
        }
        this.calculateValue();
      },
      sat(v) {
        if (v) {
          if (this.tus && this.wed && this.thu && this.fri && this.mon && this.sun) {
            this.all = true;
          }
        } else {
          this.all = false;
        }
        this.calculateValue();
      },
      sun(v) {
        if (v) {
          if (this.tus && this.wed && this.thu && this.fri && this.mon && this.mon) {
            this.all = true;
          }
        } else {
          this.all = false;
        }
        this.calculateValue();
      }
    },
    components: {
      VueTimepicker,
      TimeSpinner
    }
  }
</script>