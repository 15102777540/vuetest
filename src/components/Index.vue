<template>
  <div>
    <div class="shopping_class">
      <ul class="clearBoth">
        <li>
          <a href>
            <img src="/images/icon/icon-02x.png" width="40" height="40">
            <p>生态农产</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="/images/icon/icon-03x.png" width="40" height="40">
            <p>饮料冲调</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="/images/icon/icon-04x.png" width="40" height="40">
            <p>家居日用</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="/images/icon/icon-05x.png" width="40" height="40">
            <p>生鲜海产</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="/images/icon/icon-06x.png" width="40" height="40">
            <p>粮油调味</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="/images/icon/icon-07x.png" width="40" height="40">
            <p>小家电</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="/images/icon/icon-08x.png" width="40" height="40">
            <p>3C数码</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="/images/icon/icon-09x.png" width="40" height="40">
            <p>运动户外</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="/images/icon/icon-10x.png" width="40" height="40">
            <p>母婴用品</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="/images/icon/icon-11x.png" width="40" height="40">
            <p>端午专区</p>
          </a>
        </li>
      </ul>
    </div>
    <div style="background-color: #f7f7f7;height: 10px;"></div>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div class="lc" style="margin-bottom:50px">
        <div class="tabContent">
          <div class="proListItme-table" v-for="item in list" :key="item.index">
            <a href>
              <img :src="item.showimg" width="100" height="100">
            </a>
            <div class="proListItme2">
              <a href>
                <span>{{item.name}}</span>
              </a>
              <p>
                <a href="javascript:void(0)">热销</a>
                <a href="javascript:void(0)">推荐</a>
              </p>
              <b>￥{{item.price}}</b>
            </div>
            <div class="clear"></div>
          </div>
          <div class="loading-box tc" v-show="loading">
            <mt-spinner type="snake" class="loading-more"></mt-spinner>
            <span class="loading-more-txt">加载中...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: [],
      t: 1,
      isLoading: false,
      loading: false
    };
  },
  methods: {
    loadMore() {
      this.isLoading = true;
      this.loading = true;
      this.t++;
      setTimeout(() => {
        /*let last = this.list[this.list.length - 1];
        for (let i = this.list.length + 1; i <= this.t * 4; i++) {
          this.list.push("Apple iPhone" + i);          
        }*/
        /*this.$http
          .jsonp(
            "http://192.168.1.105:8001/api/Home/GetProductList?pageIndex=1&pageSize=10",
            {params:{pageIndex:this.t,pageSize:10}},
            { headers: {}, emulateJSON: true }
          )
          .then(
            res => {
              console.log(res.data)
              res.data.forEach(element => {
                this.list.push(element);
              });
            },
            error => {
              console.log(error);
            }
          );*/
        let JSONparams = {
          params: {
            pageIndex: this.t,
            pageSize: 4
          },
          jsonp: "callback" // 设置回调函数的参数的一个名字，默认是话是callback,
        };
        /*this.$http
          .jsonp(
            "https://sug.so.360.cn/suggest",
            { word: "a" },
            { jsonp: "callback" }
          )
          .then(
            function(res) {
              console.log(res.data);
            },
            function(res) {
              console.log(res.status);
            }
          );*/
        //   process.env.API_HOST
        this.$http
          .jsonp(
            "http://192.168.1.105:8001/api/Home/GetProductList",
            JSONparams,
            { jsonp: "callback" }
          )
          .then(
            res => {
              console.log(res);
              res.data.forEach(element => {
                this.list.push(element);
              });
            },
            err => {
              console.log(err);
            }
          );

        this.loading = false;
        this.isLoading = false;
      }, 2000);
    }
  }
};
</script>
<style scoped>
@import "../css/base.css";
@import "../css/home.css";
.loading-box {
  padding: 0.1rem 0;
}
.loading-more {
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.2rem;
}
.loading-more-txt {
  vertical-align: middle;
  font-size: 0.22rem;
}

.no-more {
  color: blue;
  font-size: 0.16rem;
  padding: 0.1rem 0 0.2rem;
}
</style>


