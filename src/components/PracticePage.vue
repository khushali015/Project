<template>
  <div class=".container">
    <div
      id="lab"
      class="jumbotron"
      style="background-color: white; padding-left: 10%">
      <div class="row" style="padding-left: 2%">
        <img
          :src="require('../assets/trophy.png')"
          style="height: 3%; width: 3%"/>
        <h1>Lab Sessions</h1>
      </div>
      <div class="row">
        <router-link
          :to="lab.routerURL"
          v-for="lab in labs"
          :key="lab.name"
          class="col-sm-3"
          style="font-size: 35px">
          {{ lab.labname }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labs: [
        {
          labname: "C",
          routerURL: "/practicedetail/c",
        },
        {
          labname: "JAVA",
          routerURL: "/practicedetail/java",
        },
        {
          labname: "PYTHON",
          routerURL: "/practicedetail/python",
        },
        {
          labname: "ADA",
          routerURL: "/practicedetail/ada",
        },
        {
          labname: "SP",
          routerURL: "/practicedetail/sp",
        },
      ],
      data: {
        is_admin: false,
        action: "read",
        is_practice: true
      },
      component: "",
    };
  },
  mounted () {
    axios
      .post('https://127.0.0.1:5000/competition_ops',this.data)
      .then(response => {
        const newItem = {
            comp_id: response.data.comp_id,
            name: response.data.name,
            routerURL: "/practicedetail/" + response.data.comp_id
        };
        this.labs.push(newItem);
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    } 
};
</script>

<style scoped>
h1 {
  text-align: center;
}
a:hover {
  text-decoration: none;
  color: black;
  opacity: 0.8;
}
.col-sm-3 {
  padding: 2%;
  margin: 2%;
  border: none;
  border-radius: 15px;
  background: linear-gradient(to top, #00e4bb, #ccc);
  text-decoration: none;
  color: black;
  text-align: center;
}
/*set a style for the buttons*/
button {
  background: linear-gradient(to left, #00e4bb, #ccc);
  color: black;
  /* font-family: cursive; */
  letter-spacing: 0.15ch;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
}
/* set a hover effect for the button*/
button:hover {
  opacity: 0.8;
}
.router-link:hover {
  text-decoration: none;
}
</style>
