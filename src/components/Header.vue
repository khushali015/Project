<template>
    <div class="container-fluid" style="padding-right: 0px;padding-left: 0px;">
        <nav class="navbar" style="padding: 0px;">
        <span class="logo">
          <pre style="color:white;font-weight:bold;font-size:110%;">   INOJ
<small style="color:#00E4BB;">drive to code</small></pre>
          <router-link class="admin" to="/adminlogin">Admin Panel</router-link>
        </span>
         <ul class="nav navbar-nav" style="flex-direction: row">
          <!-- <button @click="component='app-Article'" class="nav-item" id="home">Home -->
            <router-link class="nav-link" to="/" exact>Home</router-link>
           <!-- </button> -->
          <!-- <button @click="component='ContestPage'" class="nav-item" id="contest">Contest -->
            <router-link class="nav-link" to="/contest" exact>Contest</router-link>
           <!-- </button> -->
          <!-- <button @click="component='PracticePage'" class="nav-item" id="practice">Practice -->
            <router-link class="nav-link" to="/signin" exact>Practice</router-link>
          <!-- </button> -->
        </ul>
      </nav>
      <!-- <component v-bind:is="component"></component> -->
    </div>
</template>

<script>
import ContestPage from './ContestPage'
import PracticePage from './PracticePage'

export default {
  components: {
    'ContestPage': ContestPage,
    'PracticePage': PracticePage
  },
  data () {
    return {
      component: ''
    }
  }
}
</script>

<style>
.logo {
  height: fit-content;
  align-content: center;
  padding: 0.75% 1% 0% 1%;
  display: flex;
  flex-direction: row;
}
.nav-link{
    color: white;
    margin: 15pt;
}
.nav-link:hover{
  color: #00e4bb;
}
.nav{
  display: inline;
}
.navbar {
  background: #414141;
  height: 80px;
}
.navbar-nav{
  display: flex;
  flex-direction: row;
  padding-right: 3%;
}
.admin{
  margin-left:50px;
  background:none;
  border:none;
  color:white;
  margin-top:20px;
}
.admin:hover{
  color:#00E4BB;
  text-decoration: none;
}
/* .router-link-active {
  font-weight: bold;
  color: #00e4bb;
} */
</style>
