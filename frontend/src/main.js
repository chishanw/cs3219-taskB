import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import GetContacts from './components/GetContacts.vue'
import PostContact from './components/PostContact.vue'
import EditContact from './components/EditContact.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {
    path: "/",
    name: "Get",
    component: GetContacts,
  },
  {
    path: "/create",
    name: "Create",
    component: PostContact,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: EditContact
  }
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),router
}).$mount('#app')
