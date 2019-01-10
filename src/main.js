// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import Button from 'mint-ui/lib/button';

import { Swipe, SwipeItem } from 'mint-ui';

import { Search } from 'mint-ui';

import { Tabbar, TabItem } from 'mint-ui';

import { Header } from 'mint-ui';

import { InfiniteScroll } from 'mint-ui';

import { Spinner } from 'mint-ui';

/*import axios from "axios";

axios.defaults.timeout = 5000; // 在超时前，所有请求都会等待 5 秒
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
// 配置请求头
axios.defaults.baseURL = "https://localhost:44341"; // 配置接口地址
axios.defaults.withCredentials = false;

Vue.prototype.$axios = axios; // 将axios配置成vue的原型*/

import VueResource from 'vue-resource'

/*使用VueResource插件*/
Vue.use(VueResource)

Vue.component(Spinner.name, Spinner);

Vue.use(InfiniteScroll);

Vue.component(Header.name, Header);

Vue.component(Tabbar.name, Tabbar);

Vue.component(TabItem.name, TabItem);

Vue.component(Search.name, Search);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Button.name, Button);

Vue.use(MintUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
