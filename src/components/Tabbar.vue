<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title" style="height:40px">
        <mt-header :title="selected"></mt-header>
      </div>
      <!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="首页">
          <componentsA></componentsA>
          <div style="margin-top: 13%">
            <componentsIndex></componentsIndex>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="分类">
          <categoryA></categoryA>
        </mt-tab-container-item>
        <mt-tab-container-item id="购物车">
          <!--<mt-cell v-for="n in 7" :title="'购物车 ' + n" :key="n.index"/>-->
          <LogisticsA></LogisticsA>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <!-- cell -->
            <mt-cell v-for="n in 12" :title="'我的 ' + n" :key="n.index"/>
          </div>
          <router-link to="/">
            <!-- button -->
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" @click="c(1)" src="../assets/logo.png">首页
      </mt-tab-item>
      <mt-tab-item id="分类">
        <img slot="icon" @click="c(2)" src="../assets/logo.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" @click="c(3)" src="../assets/logo.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" @click="c(4)" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
 
<script>
import componentsA from "@/components/HelloWorld";
import componentsIndex from "@/components/Index";
import categoryA from "@/components/category";
import LogisticsA from "@/components/Logistics";

export default {
  name: "page-tabbar",
  data() {
    return {
      selected: "首页"
    };
  },
  components: {
    componentsA,
    componentsIndex,
    categoryA,
    LogisticsA
  },
  methods: {
    c(a) {
      /*this.$router.push({
                    path: '/HelloWorld'
                });     */
      if (a == 1) {
        this.selected = "首页";
      } else if (a == 2) {
        this.selected = "订单";
      }
      /*this.$axios.get("/api/Home/GetA?name=1&sex=2019").then(response => {
        console.log(response);
      });*/
      /*this.$http
        .post(
          "/api/order/orderTrack",
          { token: "k5curnZszFA7dxmAlNYfIXcbh", jdOrderId: "83907747500" },
          {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          }
        )
        .then(
          response => {
            console.log(response + "," + "1");
          },
          response => {
            console.log(response + "," + "2");
          }
        );*/
      this.$http
        .get(
          "/api/playlist/detail?id=19723756",
          {},
          {
            headers: {},
            emulateJSON: true
          }
        )
        .then(
          function(res) {
            this.musics = res.data.result.tracks;
            console.log(this.musics);
          },
          function(error) {
            console.log(error);
          }
        );
      this.$http
        .get("/api/Home/GetA?a=123", {}, { headers: {}, emulateJSON: true })
        .then(
          res => {
            console.log(res);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>
 
<style scoped>
.page-tabbar {
  overflow: hidden;
  height: 100vh;
}

.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>