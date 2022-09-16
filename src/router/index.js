import { createRouter, createWebHashHistory } from 'vue-router'

import vContactList from '../components/contacts/v-contact-list'
import vUserChat from '../components/chats/v-user-chat'

const routes = [
  {
    path: '/',
    name: 'contact-list',
    component: vContactList
  },
  {
    path: '/chat',
    name: 'chat',
    component: vUserChat
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
