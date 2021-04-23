<template>
  <div id="id01" class="modal">
    <form class="modal-content animate" method="post" style="width: 25%">
      <div class="imgcontainer">
        <span
          @click="close"
          style="cursor: pointer"
          class="close"
          title="Close page"
          >×</span>
        <h1 class="avatar">INOJ</h1>
        <h6 class="avatar" style="color:#00a4aa;">Please Login for {{ details.compName }}</h6>
      </div>
      <div class="container">
        <input
          type="text"
          v-model="details.userID"
          placeholder="Enter UserID"
          required
          style="width: 100%"
        /><br />
        <button type="submit" v-if="details.userID" @click="login">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      details: {
        userID: null,
        compName: this.$route.params.name
      }
    };
  },
  methods: {
    login(e) {
      axios
        .post("http://127.0.0.1:5000/get_data/", this.details)
        .then((response) => {
          this.$router.replace("/contestdetail/"+this.$route.params.name);
          if (response.data.stdout == "") {
              this.$router.replace("/contestdetail/"+this.$route.params.name);
          } else this.output = response.data.stdout;
          // console.log(e);
        });
      e.preventDefault();
    },
    // login(e) {
    //   axios
    //     .post("http://127.0.0.1:5000/get_data/", this.details)
    //     .then((response) => {
    //       if (response.data.stdout == "") {
    //         // this.output = response.data.outcome + response.data.cmpinfo;
    //         this.$router.replace("/contestdetail/"+this.$route.params.name);
    //       } 
    //       else 
    //         this.$router.replace("/contestdetail/"+this.$route.params.name)
    //       // console.log(e);
    //     });
    //   e.preventDefault();
    // },
    close: function () {
      this.$router.replace("/contest");
    },
  },
};
</script>
<style scoped>
input[type="text"],
input[type="password"] {
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
  background: linear-gradient(to left, #00e4bb, #ccc);
  color: black;
  font-family: cursive;
  letter-spacing: 0.15ch;
  font-weight: bolder;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
}
/* set a hover effect for the button*/
button:hover {
  opacity: 0.6;
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
