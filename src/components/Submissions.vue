<template>
  <div class=".container">
    <div class="sidenav">
      <router-link to="/users" class="row"><h5>Manage Users</h5></router-link
      ><br />
      <router-link to="/contests" class="row"
        ><h5>Contests/Practice</h5></router-link
      ><br />
      <router-link to="/questions" class="row"
        ><h5>Question Master</h5></router-link
      ><br />
      <router-link to="/submissions" class="row"
        ><h5>Submission Master</h5></router-link
      >
    </div>
    <div class="main">
      <!-- <div>
        <label for="filterby"><h5>Filter By:</h5></label>
        <select name="filterby" v-model="filter" style="margin-right: 20px">
          <option v-for="filter in filterby" :key="filter">{{ filter }}</option>
        </select>
      </div><br> -->
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>

            <th>Competition ID</th>
            <th>Question ID</th>
            <th>User ID</th>
            <th>Participant ID</th>
            <th>Code</th>
            <th>Language</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="submission in submissions" :key="submission">
            <td></td>
            <td>{{ submission.competition_id }}</td>

            <td>{{ submission.question_id }}</td>

            <td>{{ submission.user_id }}</td>

            <td>{{ submission.participant_id }}</td>

            <td><button>Click</button></td>

            <td>{{ submission.language }}</td>

            <td>{{ submission.date }}</td>

            <td>{{ submission.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <component :is="component" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      filter: "",
      filterby: ["user", "question", "contest"],
      submissions: [
        {
          competition_id: "Code123",
          question_id: 12,
          user_id: 45,
          participant_id: "Code23",
          code:"",
          language: "cpp",
          date: "12/12/20",
          time: "4:45"
        },
        {
          competition_id: "Debug12",
          question_id: 53,
          user_id: 9,
          participant_id: "Debug18",
          code:"",
          language: "java",
          date: "12/12/20",
          time: "9:15"
        },
        {
          competition_id: "Jam",
          question_id: 1,
          user_id: 98,
          participant_id: "Jam6",
          code:"",
          language: "python",
          date: "01/11/20",
          time: "4:00"
        },
        {
          competition_id: "Rush456",
          question_id: 186,
          user_id: 89,
          participant_id: "Rush56",
          code:"",
          language: "C#",
          date: "11/12/20",
          time: "4:45"
        },
        {
          competition_id: "Code123",
          question_id: 12,
          user_id: 50,
          participant_id: "Code24",
          code:"",
          language: "cpp",
          date: "12/12/20",
          time: "4:45"
        },

      ],
      component: "",
    };
  },
  methods: {
    getSubmissions() {
      axios.get("http://192.168.1.103:5000/get_result/").then((response) => {
        const newItem = {
          competition_id: response.data.competition_id,
          question_id: response.data.question_id,
          user_id: response.data.user_id,
          participant_id: response.data.participant_id,
          code: response.data.code,
          language: response.data.language,
          date: response.data.date,
          time: response.data.time
        };
        this.submissions.push(newItem);
      });
    },
  },
  mounted() {
    this.getSubmissions();
  },
};
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
  left: 180px;
  top: 90px;
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
button {  
  background: #00e4bb;
  color: white;
  /* font-family: cursive; */
  letter-spacing: 0.15ch;
  /* font-weight: bolder; */
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
}
/* set a hover effect for the button*/
button:hover {
  opacity: 0.8;
  color: black;
}
</style>