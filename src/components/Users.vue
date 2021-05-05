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
      <router-link class="nav-link" to="/adduser">Add User</router-link>      
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.user_id">
            <td></td>
            <td>{{ user.user_id }}</td>

            <td>{{ user.password }}</td>

            <td>{{ user.first_name }}</td>

            <td>{{ user.last_name }}</td>

            <td>{{ user.email }}</td>

            <td>{{ user.department }}</td>

            <td>{{ user.college }}</td>

            <td>{{ user.phone_number }}</td>


            <td>
              <button class="btn" @click="updateUser(user)">
                Edit
              </button>
            </td>

            <td>
              <button class="btn" @click="deleteUser(user)">
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
            >×</span>
          <h1 class="avatar">INOJ</h1>
        </div>
        <div class="container">
          <input
            type="text"
            v-model="currentUser.user_id"
            id="userID"
            placeholder="Enter UserID"
            required
            style="width: 100%"
          />
          <!-- <pre> {{ currentUser.user_id }} </pre><br /> -->
          <input
            type="password"
            v-model="currentUser.password"
            placeholder="Enter password"
            required
            style="width: 100%"
          /><br />
          <input
            type="text"
            v-model="currentUser.first_name"
            placeholder="Enter FirstName"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="text"
            v-model="currentUser.last_name"
            placeholder="Enter LastName"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="text"
            v-model="currentUser.department"
            placeholder="Enter Department"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="text"
            v-model="currentUser.college"
            placeholder="Enter College"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="tel"
            pattern="[0-9]{5}-[0-9]{5}"
            v-model="currentUser.phone_number"
            placeholder="Enter phone number"
            required
            style="width: 100%"
          />
          <br />
          <input
            type="email"
            v-model="currentUser.email"
            placeholder="Enter email ID"
            required
            style="width: 100%"
          />
          <br />
          <button
            @click="update">
            Submit
          </button>
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
      users: [
          {
            user_id: 1,
            password: "123",
            first_name: "Frank",
            last_name: "Murphy",
            email: "frank.murphy@test.com",
            department: "Computer",
            college: "vvp",
            phone_number: 9099094184
          },
          {
            user_id: 207,
            password: "567",
            first_name: "Zoobie",
            last_name: "Green",
            email: "17abc.zoobie@test.com",
            department: "Computer",
            college: "D.J. Abas",
            phone_number: 9825218422
          },
          {
            user_id: 113,
            password: "abc",
            first_name: "Tony",
            last_name: "Stark",
            email: "tony.stark@test.com",
            department: "Mechanical",
            college: "vvp",
            phone_number: 8899456231
          },
          {
            user_id: 4,
            password: "good",
            first_name: "Mark",
            last_name: "Twain",
            email: "mark56.twain@test.com",
            department: "IT",
            college: "Darshan",
            phone_number: 9089751246
          },
          {
            user_id: 189,
            password: "nointernet",
            first_name: "Robin",
            last_name: "Hood",
            email: "robin.hood@test.com",
            department: "Computer",
            college: "vvp",
            phone_number: 7894561230
          }
      ],
      currentUser: {
        user_id: "",
        password: "",
        first_name: "",
        last_name: "",
        email_id: "",
        department: "",
        college: "",
        phone_number: ""
      },
      edit: false,
      numberOfUsers: 0,
      component: "",
    };
  },
  methods: {
    getUsers() {
      axios.post("http://192.168.1.103:5000/users_ops/").then((response) => {
        const newItem = {
          user_id: response.data.user_id,
          password: response.data.password,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email_id: response.data.email_id,
          department: response.data.department,
          college: response.data.college,
          phone_number: response.data.phone_number
        };
        this.users.push(newItem);
        this.numberOfUsers = response.data.count;
      });
    },
    updateUser(user) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      axios
        .put("http://192.168.1.103:5000/get_result/", user)
        .then((response) => {
            currentUser.user_id = 1 //response.data.user_id,
            currentUser.password = response.data.password,
            currentUser.first_name = response.data.first_name,
            currentUser.last_name = response.data.last_name,
            currentUser.email_id = response.data.email_id,
            currentUser.department = response.data.department,
            currentUser.college = response.data.college,
            currentUser.phone_number = response.data.phone_number,
            currentUser.role = response.data.role
        });
        this.edit = true;
    },
    update(e) {
      axios
        .post("http://127.0.0.1:5000/get_data/", this.currentUser)
        .then((response) => {
          if (response.data.stdout == "") {
            alert("User updated successfully !!!");
          }
          this.$router.go();
          // console.log(e);
        });
      e.preventDefault();
    },
    deleteUser(user) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      return axios.delete("http://192.168.1.103:5000/get_result/");
    },
    close: function () {
      this.$router.go()
    //  this.edit = false;
    }
  },
  mounted() {
    this.getUsers();
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
