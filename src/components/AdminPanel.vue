<template>
    <div class=".container">
      <div class="sidenav">
        <router-link to="" class="row"><h5>Manage Users</h5></router-link><br>
        <router-link to="" class="row"><h5>Live Contests/Practice</h5></router-link><br>
        <router-link to="" class="row"><h5>Question Master</h5></router-link><br>
        <router-link to="" class="row"><h5>Submission Master</h5></router-link>
      </div>
      <div class="main">
      </div>
      <component :is="component"/>
    </div>
</template>

<script>
import ManageUser from './ManageUser'
export default {
  components: {
    'ManageUser': ManageUser
  },
  data () {
    return {
      component: ''
    }
  }
}
</script>

<style scoped>
.main {
  position: absolute;
  left:160px;
  top:80px;
  right:0;
  bottom:0;
}
.sidenav {
  height: 100%;
  width: 170px;
  position: absolute;
  z-index: 1;
  top: 80px;
  left: 0;
  background: linear-gradient(to top, #00e4bb, #ccc);
  overflow-x: hidden;
  padding-top: 20px;
  /* margin-top: 80px; */
}
.row{
  text-decoration: none;
  color: black;
  padding: 2%;
  margin: 2%;
  border: none;
  border-radius: 10px;
  /* background: linear-gradient(to top, #00e4bb, #ccc); */
}

</style>
