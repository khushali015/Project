<template>
  <div class=".container">
    <div id="lab" class="jumbotron" style="background-color: white; padding-left: 10%">
      <div class="row" style="padding-left: 2%">
        <img
          :src="require('../assets/trophy.png')"
          style="height: 3%; width: 3%"
        />
        <h1>Lab Sessions</h1>
      </div>
      <!--<div class="row" style="padding-left: 10%;">
          <div class="col-sm-3">
            <h1>C</h1><hr>
          </div>
          <div class="col-sm-3">
              <h1>PYTHON</h1><hr>
          </div>
          <div class="col-sm-3">
            <h1>JAVA</h1><hr>
          </div>
        </div>
        <div class="row" style="padding-left: 10%;">
          <div class="col-sm-3">
            <h1>ADA</h1><hr>
          </div>
          <div class="col-sm-3">
              <h1>DS</h1><hr>
          </div>
          <div class="col-sm-3">
            <h1>SP</h1><hr>
          </div>
        </div> -->
      <div class="row">
         <router-link to="./practicedetail"
                 class="col-sm-3"
                 v-for="lab in labs"
                 style="font-size: 35px">
                 {{ lab }}</router-link>
      </div>
    </div>
    <!-- <component v-bind:is="component"/> -->
  </div>
</template>

<script>
// import PracticeDetail from './PracticeDetail'
export default {
  // components: {
  //   'PracticeDetail': PracticeDetail
  // },
  data () {
    return {
      labs: ['C', 'JAVA', 'PYTHON', 'ADA', 'SP', 'DS'],
      component: ''
    }
  }
}
</script>

<style>
h1 {
  text-align: center;
}
a:hover{
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
  text-align:  center;
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
.router-link:hover{
  text-decoration: none;
}
</style>
