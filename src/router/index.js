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
import AddUser from '../components/AddUser'
import AddContest from '../components/AddContest'
import AddQuestion from '../components/AddQuestion'
import Users from '../components/Users'
import Contests from '../components/Contests'
import Questions from '../components/Questions'
import Submissions from '../components/Submissions'
import ManagePracticeSession from '../components/ManagePracticeSession'
import CodeEditor from '../components/CodeEditor'

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
      path: '/adduser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/addcontest',
      name: 'AddContest',
      component: AddContest
    },
    {
      path: '/addquestion',
      name: 'AddQuestion',
      component: AddQuestion
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/contests',
      name: 'Contests',
      component: Contests
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/submissions',
      name: 'Submissions',
      component: Submissions
    },
    {
      path: '/managepracticesession',
      name: 'ManagePracticeSession',
      component: ManagePracticeSession
    },
    {
      path: '/codeeditor',
      name: 'CodeEditor',
      component: CodeEditor
    }
  ],
  mode: 'history'
})
