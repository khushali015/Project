<template>
  <div class=".container">
    <div class="sidenav">
      <router-link to="/users" class="row"><h5>Manage Users</h5></router-link><br />
      <router-link to="/contests" class="row"><h5>Contests/Practice</h5></router-link><br />
      <router-link to="/questions" class="row"><h5>Question Master</h5></router-link><br />
      <router-link to="/submissions" class="row"><h5>Submission Master</h5></router-link>
    </div>
    <div class="main">
      <router-link class="nav-link" to="/adduser">Add User</router-link>
      <router-link class="nav-link" to="/addcoordinator">Add Co-ordinator</router-link>
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
            <th>Role</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.user_id">
            <td> </td>
            <td>{{ user.user_id }}</td>

            <td>{{ user.password }}</td>

            <td>{{ user.first_name }}</td>

            <td>{{ user.last_name }}</td>

            <td>{{ user.email }}</td>

            <td>{{ user.department }}</td>

            <td>{{ user.college }}</td>

            <td>{{ user.phone_number }}</td>

            <td>{{ user.role }}</td>

            <td>
              <button class="btn btn-danger" @click="updateUser(user)">
                Edit
              </button>
            </td>

            <td>
              <button class="btn btn-danger" @click="deleteUser(user)">
                X
              </button>
            </td>
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
      users: [
        // { user_id: 1, 
        //  password: '123', 
        //  first_name: 'Frank', 
        //  last_name: 'Murphy', 
        //  email: 'frank.murphy@test.com',
        //  department: 'Computer',
        //  college: 'vvp', 
        //  phone_number: 909094184,
        //  role: 'User' }
      ],
      numberOfUsers: 0,
      component: "",
    };
  },
  methods: {
    getUsers() {
      axios.get("http://192.168.1.103:5000/get_result/").then((response) => {
        const newItem = {
            user_id: response.data.user_id,
            password: response.data.password,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email_id: response.data.email_id,
            department: response.data.department,
            college: response.data.college,
            phone_number: response.data.phone_number,
            role: response.data.role
        };
        this.users.push(newItem);
        this.numberOfUsers = response.data.count;
      });
    },
    updateUser(user) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      return axios.put("http://192.168.1.103:5000/get_result/", user);
    },
    deleteUser(user) {
      // const url = `${API_URL}/api/contacts/${contact.pk}`;
      return axios.delete("http://192.168.1.103:5000/get_result/");
    },
  },
  mounted() {
    this.getUsers();
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
  left: 180px;
  top: 90px;
  right: 0;
  bottom: 0;
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
.row {
  text-decoration: none;
  color: black;
  padding: 2%;
  margin: 2%;
  border: none;
  border-radius: 10px;
  /* background: linear-gradient(to top, #00e4bb, #ccc); */
}
</style>
