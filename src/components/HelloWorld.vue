<template>
  <div class="hello" style="height:200px">
    <div style="height:50px">
      <mt-search cancel-text="取消" v-model="searchVal"  placeholder="搜索" @keyup.enter.native="submit"></mt-search>
    </div>
    <mt-swipe :auto="5000">
      <mt-swipe-item>
        <img src="../assets/1.jpg" height="100%" width="100%">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/2.jpg" height="100%" width="100%">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/3.jpg" height="100%" width="100%">
      </mt-swipe-item>
    </mt-swipe>
    <!--<div style="margin-top: 3%;">
      <div style="float:left;width:25%">
        <img src="../assets/1.jpg" height="40" width="40" slot="icon">
      </div>
      <div style="float:left;width:25%">
        <img src="../assets/2.jpg" height="40" width="40" slot="icon">
      </div>
      <div style="float:left;width:25%">
        <img src="../assets/3.jpg" height="40" width="40" slot="icon">
      </div>
      <div style="float:left;width:25%">
        <img src="../assets/3.jpg" height="40" width="40" slot="icon">
      </div>
    </div>-->
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: "HelloWorld",
  data() {
    return {
      searchVal: ""
    };
  },
  components: {},
  methods: {
    submit() {      
      Toast({
        message: this.searchVal,
        position: "bottom",
        duration: 1000
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
