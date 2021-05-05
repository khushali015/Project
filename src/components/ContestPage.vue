<template>
  <div class=".container">
    <div class="jumbotron" style="background-color: white">
      <div class="row" style="padding-left: 2%">
        <img
          :src="require('../assets/trophy.png')"
          style="height: 3%; width: 3%"
        />
        <h1>Live Contests</h1>
      </div>
      <div class="row" style="padding-left: 10%">
        <router-link :to="contest.routerURL"
          v-for="contest in contests"
          :key="contest.name"
          class="col-sm-3"
          style="font-size: 2.5vw">
          {{ contest.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contests: [
        {
          name:"CodeJam",
          contestID: "",
          routerURL: "/login/CodeJam"
        },
        {
          name:"CodeRush",
          contestID: "",
          routerURL: "/login/CodeRush"
        },
        {
          name:"Debugging",
          contestID: "",
          routerURL: "/login/Debugging"
        },
        {
          name:"CodeStorm",
          contestID: "",
          routerURL: "/login/CodeStorm"
        },
        {
          name:"DigCode",
          contestID: "",
          routerURL: "/login/DigCode"
        }
      ],
      data: {
        is_admin: false,
        action: "read",
        is_practice: false
      },
      component: "",
    }
  },
  mounted () {
    axios
      .post('https://127.0.0.1:5000/competition_ops',this.data)
      .then(response => {
        const newItem = {
            comp_id: response.data.comp_id,
            name: response.data.name,
            routerURL: "/login/" + response.data.comp_id
        };
        this.contests.push(newItem);
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    } 
  }
</script>

<style scoped>
button:hover {
  opacity: 0.8;
}
li {
  list-style-type: none;
  font-size: 35px;
}
.nav-link:hover {
  color: #fff;
}
.col-sm-3 {
  text-decoration: none;
  color: black;
  padding: 2%;
  margin: 2%;
  border: none;
  border-radius: 10px;
  background: linear-gradient(to top, #00e4bb, #ccc);
}
.router-link:hover{
  text-decoration: none;
}
</style>
