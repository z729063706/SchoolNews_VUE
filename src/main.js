import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios';
axios.defaults.baseURL = process.env.NODE_ENV==='production'?'http://8.141.64.60:8080/untitled-1.0-SNAPSHOT/':'/api'
// axios.defaults.baseURL = '/api'

axios.defaults.withCredentials=true;

import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import qs from 'qs'
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const errorHandler = (error, vm)=>{
  // window.console.error('抛出全局异常');
  // window.console.error(vm);
  // window.console.error(error);
  // 代码太烂 是个满控制台红字的屎山 注释错误提示 防止污染视觉
}
Vue.config.errorHandler = errorHandler;


Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
