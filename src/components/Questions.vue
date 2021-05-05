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
      <router-link class="nav-link" to="/addquestion">Add Question</router-link>
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
          <tr v-for="question in questions" :key="question.question_id">
            <td></td>
            <td>{{ question.question_id }}</td>

            <td>{{ question.description }}</td>

            <td>{{ question.time_limit }}</td>

            <td>{{ question.input_file }}</td>

            <td>{{ question.output_file }}</td>

            <td>
              <button class="btn" @click="updateQuestion(question)">
                Edit
              </button>
            </td>

            <td>
              <button class="btn" @click="deleteQuestion(question)">
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="edit">
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
            v-model="currentQuestion.question_id"
            id="userID"
            placeholder="Enter Question ID"
            required
            style="width: 100%"
          />
          <!-- <pre> {{ currentUser.user_id }} </pre><br /> -->
          <br />
          <input
            type="text"
            v-model="currentQuestion.description"
            placeholder="Enter Description"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="text"
            v-model="currentQuestion.time_limit"
            placeholder="Enter time_limit"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="file"
            id="files"
            ref="files"
            multiple
            v-on:change="handleFileUploads()"
            required
            style="width: 100%"
          /><br /><br/>
          <button @click="update">Submit</button>
        </div>
      </form>
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
      questions: [
        {
          question_id: "1",
          description:
            "In Chefland, there is a very famous street where N types of street food (numbered 1 through N) are offered. For each valid i, there are Si stores that offer food of the i-th type, the price of one piece of food of this type is Vi (the same in each of these stores) and each day, Pi people come to buy it; each of these people wants to buy one piece of food of the i-th type.",
          time_limit: "1 sec",
          input_file: "Input File",
          output_file: "Output File",
        },
        {
          question_id: "2",
          description:
            "In Chefland, there is a very famous street where N types of street food (numbered 1 through N) are offered. For each valid i, there are Si stores that offer food of the i-th type, the price of one piece of food of this type is Vi (the same in each of these stores) and each day, Pi people come to buy it; each of these people wants to buy one piece of food of the i-th type.",
          time_limit: "1 sec",
          input_file: "Input File",
          output_file: "Output File",
        },
        {
          question_id: "3",
          description:
            "In Chefland, there is a very famous street where N types of street food (numbered 1 through N) are offered. For each valid i, there are Si stores that offer food of the i-th type, the price of one piece of food of this type is Vi (the same in each of these stores) and each day, Pi people come to buy it; each of these people wants to buy one piece of food of the i-th type.",
          time_limit: "1 sec",
          input_file: "Input File",
          output_file: "Output File",
        },
        {
          question_id: "4",
          description:
            "In Chefland, there is a very famous street where N types of street food (numbered 1 through N) are offered. For each valid i, there are Si stores that offer food of the i-th type, the price of one piece of food of this type is Vi (the same in each of these stores) and each day, Pi people come to buy it; each of these people wants to buy one piece of food of the i-th type.",
          time_limit: "1 sec",
          input_file: "Input File",
          output_file: "Output File",
        },
      ],
      currentQuestion: {
        question_id: "",
        description: "",
        time_limit: "",
      },
      edit: false,
      files: '',
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
      axios
        .put("http://192.168.1.103:5000/get_result/", question)
        .then((response) => {
            currentQuestion.question_id = response.data.question_id,
            currentQuestion.description = response.data.description,
            currentQuestion.time_limit = response.data.time_limit;
        });
      this.edit = true;
    },
    update(e) {
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);
      }
      axios
        .post("http://127.0.0.1:5000/get_data/", this.currentQuestion,formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.stdout == "") {
            alert("Question updated successfully !!!");
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
    handleFileUploads() {
      this.files = this.$refs.files.files;
    },
    close: function () {
      this.$router.go();
      //  this.edit = false;
    },
  },
  mounted() {
    this.getQuestions();
  },
};
</script>

<style scoped>
.nav-link {
  background-color:  #00e4bb;
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  margin: 20px 30px;
  cursor: pointer;
}
.nav-link:hover {
  color: black;
}
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
input[type="text"],
input[type="password"],
input[type="email"],
input[type="number"],
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
