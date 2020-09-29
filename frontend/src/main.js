import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import GetContacts from './components/GetContacts.vue'
import PostContact from './components/PostContact.vue'

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
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).use(router).mount('#app')
