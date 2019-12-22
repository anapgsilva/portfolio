import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Contacts from '@/components/Contacts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/#projects',
    name: 'projects',
    component: Projects
  }, {
    path: '/#skills',
    name: 'skills',
    component: Skills
  }, {
    path: '/#education',
    name: 'education',
    component: Education
  }, {
    path: '/#experience',
    name: 'experience',
    component: Experience
  }, {
    path: '/#contacts',
    name: 'contacts',
    component: Contacts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
