<template>
  <div class=".container">
    <div class="sidenav">
      <router-link to="/users" class="row"><a>Manage Users</a></router-link
      ><br />
      <router-link to="/contests" class="row"
        ><a>Contests/Practice</a></router-link
      ><br />
      <router-link to="/questions" class="row"
        ><a>Question Master</a></router-link
      ><br />
      <router-link to="/submissions" class="row"
        ><a>Submission Master</a></router-link
      >
    </div>
    <div class="main">
      <img :src="require('../assets/Admin.jpg')" id="image" width="780vw" />
    </div>
    <component :is="component" />
  </div>
</template>

<script>
// import ManageUser from './ManageUser'
export default {
  components: {
    // 'ManageUser': ManageUser
  },
  data() {
    return {
      component: "",
    };
  },
};
</script>

<style scoped>
.main {
  position: absolute;
  left: 30vw;
  top: 15vw;
  right: 0;
  bottom: 0;
}
.row {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5%;
  margin: 2%;
  border: none;
  border-radius: 2px;
  /* background: linear-gradient(to top, #00e4bb, #ccc); */
}

.row:hover {
  background-color: rgb(220, 241, 231);
  color: rgb(4, 133, 90);
}
.sidenav {
  height: 100%;
  width: 180px;
  position: absolute;
  z-index: 1;
  top: 80px;
  left: 0;
  background: linear-gradient(to top, #00e4bb, #ccc);
  overflow-x: hidden;
  padding-top: 20px;
  /* margin-top: 80px; */
}
</style>
