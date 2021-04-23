<template>
    <div class=".container">
      <div class="sidenav">
        <router-link to="/users" class="row"><h5>Manage Users</h5></router-link><br>
        <router-link to="/contests" class="row"><h5>Contests/Practice</h5></router-link><br>
        <router-link to="/questions" class="row"><h5>Question Master</h5></router-link><br>
        <router-link to="/submissions" class="row"><h5>Submission Master</h5></router-link>
      </div>
      <div class="main">
        <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>

            <th>Question ID</th>
            <th>Description</th>
            <th>Time Limit</th>
            <th>Input File</th>
            <th>Output File</th>
            <th>Action</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="question in questions" :key="question">
            <td></td>
            <td>{{ question.question_id }}</td>

            <td>{{ question.description }}</td>

            <td>{{ question.time_limit }}</td>

            <td>{{ question.input_file }}</td>

            <td>{{ question.output_file }}</td>

            <td>
              <button class="btn btn-danger" @click="updateQuestion(question)">
                Edit
              </button>
            </td>

            <td>
              <button class="btn btn-danger" @click="deleteQuestion(question)">
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
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      questions: [],
      numberOfQuestions: 0,
      component: "",
    };
  },
  methods: {
    getQuestions() {
      axios.get("http://192.168.1.103:5000/get_result/").then((response) => {
        const newItem = {
            question_id: response.data.question_id,
            description: response.data.description,
            time_limit: response.data.time_limit,
            input_file: response.data.input_file,
            output_file: response.data.output_file,
        };
        this.questions.push(newItem);
        this.numberOfQuestions = response.data.count;
      });
    },
    updateQuestion(question) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      return axios.put("http://192.168.1.103:5000/get_result/", question);
    },
    deleteQuestion(question) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      return axios.delete("http://192.168.1.103:5000/get_result/");
    },
  },
  mounted() {
    this.getQuestions();
  },
}
</script>

<style scoped>
.nav-link {
  color: black;
  font-size: large;
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
