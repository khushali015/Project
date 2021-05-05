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
      <router-link class="nav-link" to="/addcontest">Add Contest</router-link>
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
          <tr v-for="contest in contests" :key="contest.comp_id">
            <td></td>
            <td>{{ contest.comp_id }}</td>

            <td>
              <button class="hover" @click="gotoContest(contest.name)">
                {{ contest.name }}
              </button>
            </td>

            <td>{{ contest.date }}</td>

            <td>{{ contest.description }}</td>

            <td>{{ contest.conducted_by }}</td>

            <td>{{ contest.is_practice }}</td>

            <td>{{ contest.department }}</td>
            <td>
              <button class="btn" @click="updateContest(contest)">Edit</button>
            </td>

            <td>
              <button class="btn" @click="deleteContest(contest)">X</button>
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
            v-model="currentContest.comp_id"
            id="userID"
            placeholder="Enter Competition ID"
            required
            style="width: 100%"
          />
          <!-- <pre> {{ currentUser.user_id }} </pre><br /> -->
          <input
            type="text"
            v-model="currentContest.name"
            placeholder="Enter Name"
            required
            style="width: 100%"
          /><br />
          <input
            type="date"
            v-model="currentContest.date"
            placeholder="Enter Date"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="text"
            v-model="currentContest.description"
            placeholder="Enter Description"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="text"
            v-model="currentContest.conducted_by"
            placeholder="Enter Department"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="text"
            v-model="currentContest.is_practice"
            placeholder="Is Practice ?"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="text"
            v-model="currentContest.department"
            placeholder="Enter Department"
            required
            style="width: 100%"
          />
          <br />
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
      contests: [
        {
          comp_id: "Code123",
          name: "Codejam",
          date: "12/12/21",
          description: "In this you can showcase your programming skills.",
          conducted_by: "AS",
          is_practice: "True",
          department: "Computer",
        },
        {
          comp_id: "Csk",
          name: "CounterStrike",
          date: "12/12/21",
          description: "In this you can showcase your programming skills.",
          conducted_by: "DKS",
          is_practice: "False",
          department: "Computer",
        },
        {
          comp_id: "Code",
          name: "CodeRush",
          date: "12/12/21",
          description: "In this you can showcase your programming skills.",
          conducted_by: "GHM",
          is_practice: "False",
          department: "Computer",
        },
        {
          comp_id: "Debug",
          name: "Debugging",
          date: "12/12/21",
          description: "In this you can showcase your programming skills.",
          conducted_by: "MVD",
          is_practice: "True",
          department: "Computer",
        },
      ],
      currentContest: {
        comp_id: "",
        name: "",
        date: "",
        description: "",
        conducted_by: "",
        department: "",
        is_practice: "",
      },
      data: {
        is_admin: false,
        action: "read"
      },
      edit: false,
      numberOfContests: 0,
      component: "",
    };
  },
  methods: {
    getContests() {
      axios
        .post("http://192.168.1.103:5000/competition_ops/", this.data)
        .then((response) => {
          const newItem = {
            comp_id: response.data.comp_id,
            name: response.data.name,
            date: response.data.date,
            description: response.data.description,
            conducted_by: response.data.conducted_by,
            is_practice: response.data.is_practice,
            department: response.data.department,
          };
          this.contests.push(newItem);
          this.numberOfContests = response.data.count;
        });
    },
    updateContest(contest) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      axios
        .put("http://192.168.1.103:5000/get_result/", contest)
        .then((response) => {
          currentContest.comp_id = response.data.comp_id,
          currentContest.name = response.data.name,
          currentContest.date = response.data.date,
          currentContest.description = response.data.description,
          currentContest.conducted_by = response.data.conducted_by,
          currentContest.is_practice = response.data.is_practice,
          currentContest.department = response.data.department;
        });
      this.edit = true;
    },
    update(e) {
      axios
        .post("http://127.0.0.1:5000/get_data/", this.currentContest)
        .then((response) => {
          if (response.data.stdout == "") {
            alert("Contest updated successfully !!!");
          }
          this.$router.go();
          // console.log(e);
        });
      e.preventDefault();
    },
    deleteContest(contest) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      return axios.delete("http://192.168.1.103:5000/get_result/");
    },
    gotoContest(name) {
      this.$router.replace("/detailsofcontest/" + name);
    },
    close: function () {
      this.$router.go();
      //  this.edit = false;
    },
  },
  mounted() {
    this.getContests();
  },
};
</script>

<style scoped>
.nav-link {
  background-color: #00e4bb;
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

.hover {
  cursor: pointer;
  background: #00e4bb;
  color: white;
  /* font-family: cursive; */
  /* font-weight: bolder; */
  border: none;
  border-radius: 15px;
  align-content: center;
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
