<template>
    <div class=".container">
      <div class="sidenav">
        <router-link to="/users" class="row"><h5>Manage Users</h5></router-link><br>
        <router-link to="/contests" class="row"><h5>Contests/Practice</h5></router-link><br>
        <router-link to="/questions" class="row"><h5>Question Master</h5></router-link><br>
        <router-link to="/submissions" class="row"><h5>Submission Master</h5></router-link>
      </div>
      <div class="main">
        <div>
        <label for="filterby"><h5>Filter By:</h5></label>
        <select name="filterby" v-model="filter" style="margin-right: 20px">
          <option v-for="filter in filterby" :key="filter">{{ filter }}</option>
        </select>
      </div>
      </div>
      <component :is="component"/>
    </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      filter: "",
      filterby: ["user", "question","contest"],
      component: ''
    }
  }
}
</script>

<style scoped>
/* .nav-link {
  color: black;
  font-size: large;
}
.nav-link:hover {
  color: #00e4bb;
} */
.main {
  position: absolute;
  left:180px;
  top:90px;
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
