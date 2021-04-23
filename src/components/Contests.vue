<template>
    <div class=".container">
      <div class="sidenav">
        <router-link to="/users" class="row"><h5>Manage Users</h5></router-link><br>
        <router-link to="/contests" class="row"><h5>Contests/Practice</h5></router-link><br>
        <router-link to="/questions" class="row"><h5>Question Master</h5></router-link><br>
        <router-link to="/submissions" class="row"><h5>Submission Master</h5></router-link>
      </div>
      <div class="main">
        <router-link class="nav-link" to="/addcontest">Add Contest</router-link>
        <router-link class="nav-link" to="/addquestion">Add Question</router-link>
        <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>

            <th>Contest ID</th>
            <th>Contest Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Conducted By</th>
            <th>Is it Practice contest??</th>
            <th>Department</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contest in contests" :key="contest">
            <td></td>
            <td>{{ contest.competition_id }}</td>

            <td>{{ contest.name }}</td>

            <td>{{ contest.date }}</td>

            <td>{{ contest.description }}</td>

            <td>{{ contest.conducted_by }}</td>

            <td>{{ contest.is_prctice }}</td>

            <td>{{ contest.department }}</td>

            <td>
              <button class="btn btn-danger" @click="updateContest(contest)">
                Edit
              </button>
            </td>

            <td>
              <button class="btn btn-danger" @click="deleteContest(contest)">
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <component :is="component"/>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  components: {},
  data() {
    return {
      contests: [],
      numberOfContests: 0,
      component: ""
    };
  },
  methods: {
    getContests() {
     axios.get("http://192.168.1.103:5000/get_result/").then((response) => {
        const newItem = {
            competition_id: response.data.competition_id,
            name: response.data.name,
            date: response.data.date,
            description: response.data.description,
            conducted_by: response.data.conducted_by,
            is_prctice: response.data.is_practice,
            department: response.data.department            
        };
        this.contests.push(newItem);
        this.numberOfContests = response.data.count;
      });
    },
    updateContest(contest) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      return axios.put("http://192.168.1.103:5000/get_result/", contest);
    },
    deleteContest(contest) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      return axios.delete("http://192.168.1.103:5000/get_result/");
    },
  },
  mounted() {
    this.getContests();
  },
}
</script>

<style scoped>
.nav-link {
  color: black;
  font-size: large;
  float: left;
}
.nav-link:hover {
  color: #00e4bb;
}
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
