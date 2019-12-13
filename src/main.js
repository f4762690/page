// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import { MessageBox,Message } from 'element-ui'
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/style.css'
import './assets/public.less'

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$axios = axios

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created:function(){
    this.$store.commit('init')
  },
  components: { App },
  template: '<App/>'
})
