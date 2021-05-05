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
      <div class="participants">
        <p style="font-size: 2vw;display:inline-block;margin-right:1vw;">Participants:</p><span class="hover" @click="addParticipant">Add Participant</span>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>

              <th>User ID</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Department</th>
              <th>College</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="participant in participants" :key="participant.user_id">
              <td></td>
              <td>{{ participant.user_id }}</td>

              <td>{{ participant.password }}</td>

              <td>{{ participant.first_name }}</td>

              <td>{{ participant.last_name }}</td>

              <td>{{ participant.email }}</td>

              <td>{{ participant.department }}</td>

              <td>{{ participant.college }}</td>

              <td>{{ participant.phone_number }}</td>

              <td>
                <button
                  class="btn"
                  @click="deleteParticipant(participant)"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="add_participant">
          <form class="modal-content animate" method="post" style="width: 25%">
            <div class="imgcontainer">
              <span
                @click="close"
                style="cursor: pointer"
                class="close"
                title="Close page"
                >×</span
              >
              <h1 class="avatar">INOJ</h1>
            </div>
            <div class="container">
              <input
                type="text"
                v-model="user_id"
                id="userID"
                placeholder="Enter UserID"
                required
                style="width: 100%"
              />
              <!-- <pre> {{ currentUser.user_id }} </pre><br /> -->
              <br />
              <button @click="add_Participant">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div class="questions">
        <p style="font-size: 2vw;display:inline-block;margin-right:1vw;">Questions:</p><span class="hover" @click="addQuestion">Add Question</span>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>

              <th>Question ID</th>
              <th>Question Name</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="question in questions" :key="question">
              <td></td>
              <td>{{ question.question_id }}</td>

              <td>{{ question.question_name }}</td>

              <td>
                <button
                  class="btn btn-danger"
                  @click="deleteQuestion(question)"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="add_question">
          <form class="modal-content animate" method="post" style="width: 25%">
            <div class="imgcontainer">
              <span
                @click="close"
                style="cursor: pointer"
                class="close"
                title="Close page"
                >×</span
              >
              <h1 class="avatar">INOJ</h1>
            </div>
            <div class="container">
              <input
                type="text"
                v-model="this.question_id"
                placeholder="Enter Question ID"
                required
                style="width: 100%"
              />
              <br />
              <button @click="add_Question">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <component :is="component" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      user_id: null,
      question_id: null,
      contest_name: this.$route.params.name,
      participants: [],
      questions: [],
      add_participant: false,
      add_question: false,
      component: "",
    };
  },
  methods: {
    getParticipants() {
      axios
        .post("http://192.168.1.103:5000/get_participants/", this.contest_name)
        .then((response) => {
          const newItem = {
            user_id: response.data.user_id,
            password: response.data.password,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email_id: response.data.email_id,
            department: response.data.department,
            college: response.data.college,
            phone_number: response.data.phone_number,
          };
          this.participants.push(newItem);
          this.numberOfParticipants = response.data.count;
        });
    },
    addParticipant() {
      this.add_participant = true;
    },
    add_Participant(e) {
      axios
        .post("http://127.0.0.1:5000/get_data/", this.user_id)
        .then((response) => {
          if (response.data.stdout == "") {
            alert("Participant added successfully !!!");
          }
          this.$router.go();
          // console.log(e);
        });
      e.preventDefault();
    },
    deleteParticipant(participant) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      return axios.delete("http://192.168.1.103:5000/get_result/");
    },
    getQuestions() {
      axios
        .post("http://192.168.1.103:5000/get_participants/", this.contest_name)
        .then((response) => {
          const newItem = {
            question_id: response.data.question_id,
            question_name: response.data.question_name            
          };
          this.questions.push(newItem);
        });
    },
    addQuestion() {
      this.add_question = true;
    },
    add_Question(e) {
      axios
        .post("http://127.0.0.1:5000/get_data/", this.question_id)
        .then((response) => {
          if (response.data.stdout == "") {
            alert("Question added successfully !!!");
          }
          this.$router.go();
          // console.log(e);
        });
      e.preventDefault();
    },
    deleteQuestion(question) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      return axios.delete("http://192.168.1.103:5000/get_result/");
    },
    close: function () {
      this.$router.go();
      //  this.edit = false;
    },
  },
  mounted() {
    this.getParticipants();
    this.getQuestions();
  },
};
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
  left: 200px;
  top: 90px;
  right: 0;
  bottom: 0;
}
.hover{
  background: #00e4bb;
  color: white;
  /* font-family: cursive; */
  letter-spacing: 0.15ch;
  /* font-weight: bolder; */
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
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
input[type="text"],
input[type="password"],
input[type="email"],
input[type="number"],
input[type="date"],
input[type="tel"] {
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-sizing: inherit;
}
input:focus {
  border: none;
}
button{
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
}
/*centre the display image inside the container*/
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}
/*set image properties*/
img.avatar {
  width: 30%;
  /*border-radius: 50%;*/
}
/*set padding to the container*/
.container {
  padding: 16px;
}
/*set the forgot password text*/
span.psw {
  float: right;
  padding-top: 16px;
}
/*set the Modal background*/
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4); */
  padding-top: 60px;
}
/*style the model content box*/
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  border: 1px solid #888;
  border-radius: 25px;
  width: 20%;
}
/*style the close button*/
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}
/* add zoom animation*/
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}
@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}
@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
</style>
