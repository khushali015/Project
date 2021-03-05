import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import editor from 'vue2-ace-editor';
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(editor)
// var express = require('express')
// var cors = require('cors')
// var app = express()
 
// app.use(cors())
 
// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
