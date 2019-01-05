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
