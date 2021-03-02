<template>
  <div class=".container">
    <div class="jumbotron" style="background-color: white;">
        <div class="row" style="padding-left: 2%">
          <img
            :src="require('../assets/trophy.png')"
            style="height: 3%; width: 3%"
          />
          <h1>Live Contests</h1>
        </div>
        <div class="row" style="padding-left: 10%;">
          <!-- <router-link to="/login" class="col-sm-3 nav-link">
            <h1>Codejam</h1><hr>
            <p >sfdrvgfdv fdvgrgrfxdgr<br>dbfdgbfvg /frvgregrffregrrf<br>aksdbcjkaheuojh</p>
          </router-link>
          <router-link to="/login" class="col-sm-3 nav-link">
              <h1>Realy Coding</h1><hr>
              <p>sfdrvgfdv fdvgrgrfxdgr<br>dbfdgbfvg frvgregrffregrrf<br>aksdbcjkaheuojh</p>
          </router-link>
          <router-link to="/login" class="col-sm-3 nav-link">
            <h1>Code Storm</h1><hr>
            <p>sfdrvgfdv fdvgrgrfxdgr<br>dbfdgbfvg frvgregrffregrrf<br>aksdbcjkaheuojh</p>
          </router-link>
         </div>
         <div class="row" style="padding-left: 10%;">
          <router-link to="/login" class="col-sm-3 nav-link">
            <h1>Code Rush</h1><hr>
            <p>sfdrvgfdv fdvgrgrfxdgr<br>dbfdgbfvg frvgregrffregrrf<br>aksdbcjkaheuojh</p>
          </router-link>
          <router-link to="/login" class="col-sm-3 nav-link">
              <h1>Debug</h1><hr>
              <p>sfdrvgfdv fdvgrgrfxdgr<br>dbfdgbfvg frvgregrffregrrf<br>aksdbcjkaheuojh</p>
          </router-link>
          <router-link to="/login" class="col-sm-3 nav-link">
            <h1>Code Hack</h1><hr>
            <p>sfdrvgfdv fdvgrgrfxdgr<br>dbfdgbfvg frvgregrffregrrf<br>aksdbcjkaheuojh</p>
          </router-link>
         </div> -->
          <button @click="component='Login'"
                  v-for="contestName in contestNames"
                  class="col-sm-3"
                  style="font-size: 35px;">
                  {{ contestName }}
          </button>
        </div>
        <component v-bind:is="component"/>
     </div>
  </div>
</template>

<script>
import Login from './LoginPage'
export default {
  components: {
    'Login': Login
  },
  data () {
    return {
      contestNames: ['CodeJam', 'CodeRush', 'Debug', 'CodeJam', 'CodeRush', 'Debug'],
      contestDetails: ['sfdrvgfdv fdvgrgrfxdg', 'sfdrvgfdv fdvgrgrfxdg', 'sfdrvgfdv fdvgrgrfxdg', 'sfdrvgfdv fdvgrgrfxdg', 'sfdrvgfdv fdvgrgrfxdg', 'sfdrvgfdv fdvgrgrfxdg'],
      component: ''
    }
  }
}
</script>

<style scoped>
button:hover{
  opacity: 0.8;
  }
li{
  list-style-type: none;
  font-size: 35px;
}
.nav-link:hover{
  color: #fff;
}
.col-sm-3 {
  /* padding-top: 2%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 2%; */
  text-decoration: none;
  color: black;
  padding: 2%;
  margin: 2%;
  border: none;
  border-radius: 10px;
  background: linear-gradient(to top, #00e4bb, #ccc);
}
</style>
