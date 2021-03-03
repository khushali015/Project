<template>
  <div class=".container">
    <div class="sidenav">
      <router-link to="" v-for="ques in questions" class="row"><h5>Question: {{ ques }}</h5></router-link><br>
      <router-link to="/codeeditor" class="row"><h5 style="background-color: gray;padding:5px;border:1px;border-radius:5px;">Submit</h5></router-link>
    </div>
    <div class="main">
      <p>
        In Chefland, there is a very famous street where N types of street food
        (numbered 1 through N) are offered. For each valid i, there are Si
        stores that offer food of the i-th type, the price of one piece of food
        of this type is Vi (the same in each of these stores) and each day, Pi
        people come to buy it; each of these people wants to buy one piece of
        food of the i-th type.
      </p>

      <p>
        Chef is planning to open a new store at this street, where he would
        offer food of one of these N types. Chef assumes that the people who
        want to buy the type of food he'd offer will split equally among all
        stores that offer it, and if this is impossible, i.e. the number of
        these people p is not divisible by the number of these stores s, then
        only ⌊ps⌋ people will buy food from Chef.
      </p>

      <p>
        Chef wants to maximise his daily profit. Help Chef choose which type of
        food to offer and find the maximum daily profit he can make.
      </p>

      <p>
        <b>Input</b><br />
        The first line of the input contains a single integer T denoting the
        number of test cases.<br />
        The description of T test cases follows.<br />
        The first line of each test case contains a single integer N.<br />
        N lines follow. <br />For each i (1≤i≤N), the i-th of these lines
        contains three space-separated integers Si, Pi and Vi.
      </p>

      <p>
        <b>Output</b> For each test case, print a single line containing one
        integer ― the maximum profit.
      </p>

      <p>
        <b>Constraints</b><br />
        1≤T≤100<br />
        1≤N≤100<br />
        1≤Si,Vi,Pi≤10,000 for each valid i<br />
      </p>

      <b>Example Input</b>
      <pre>
2
3
4 6 8
2 6 6
1 4 3
1
7 7 4</pre>
      <pre><b>Output</b>
12
0</pre>
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      questions: [1,2]
    }
  },
  methods: {
    
  }
}
</script>
<style scoped>
.row {
  text-decoration: none;
  color: black;
  padding: 2%;
  margin: 2%;
  border: none;
  border-radius: 10px;
  /* background: linear-gradient(to top, #00e4bb, #ccc); */
}
.main {
  position: absolute;
  left: 180px;
  top: 90px;
  right: 10px;
  bottom: 0;
}
p {
  text-align: justify;
}
.sidenav {
  height: 110%;
  width: 160px;
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
