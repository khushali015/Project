import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/HomePage'
import Contest from '../components/ContestPage'
import Practice from '../components/PracticePage'
import Login from '../components/LoginPage'
import PracticeLogin from '../components/PracticeLogin'
import ContestDetail from '../components/ContestDetail'
import PracticeDetail from '../components/PracticeDetail'
import AdminPanel from '../components/AdminPanel'
import AdminLogin from '../components/AdminLogin'
import ManageUser from '../components/ManageUser'
import ManageContest from '../components/ManageContest'
import ManagePracticeSession from '../components/ManagePracticeSession'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contest',
      name: 'Contest',
      component: Contest
    },
    {
      path: '/practice',
      name: 'Practice',
      component: Practice
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signin',
      name: 'login',
      component: PracticeLogin
    },
    {
      path: '/contestdetail',
      name: 'ContestDetail',
      component: ContestDetail
    },
    {
      path: '/practicedetail',
      name: 'PracticeDetail',
      component: PracticeDetail
    },
    {
      path: '/adminlogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/adminpanel',
      name: 'AdminPanel',
      component: AdminPanel
    },
    {
      path: '/manageuser',
      name: 'ManageUser',
      component: ManageUser
    },
    {
      path: '/managecontest',
      name: 'ManageContest',
      component: ManageContest
    },
    {
      path: '/managepracticesession',
      name: 'ManagePracticeSession',
      component: ManagePracticeSession
    }
  ],
  mode: 'history'
})
