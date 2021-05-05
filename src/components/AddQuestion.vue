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
      </div>
      <div class="container">
        <input
          type="number"
          v-model="content.question_id"
          placeholder="Enter questionID"
          required
          style="width: 100%"
        /><br />
        <input
          type="text"
          v-model="content.description"
          placeholder="Enter Description"
          required
          style="width: 100%"
        />
        <br />
        <input
          type="text"
          v-model="content.time_limit"
          placeholder="Enter time-limit"
          required
          style="width: 100%"
        />
        <br />
        <!-- v-model -->
        <input
          type="file"
          placeholder="Input/Output File"
          id="files"
          ref="files"
          multiple
          v-on:change="handleFileUploads()"
          required
          style="width: 100%"
        />
        <br />
        <!-- v-model -->
        <button
          v-if="this.content.question_id && this.content.description && this.content.time_limit"
          @click="add"
        >
          Submit
        </button>
      </div>
    </form>
    <component :is="component" />
  </div>
</template>

<script>
import AdminPanel from "./AdminPanel";
import axios from 'axios';
export default {
  components: {
    AdminPanel: AdminPanel
  },
  data() {
    return {
      content: {
        question_id: null,
        description: null,
        time_limit: null,
        files: ''
      },
      component: "",
    };
  },
  methods: {
    add(e) {
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);
      }
      axios
        .post("http://127.0.0.1:5000/get_data/", this.content, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.stdout == "") {
            alert("Question added successfully !!!");
          }
          this.$router.replace("/questions");
          // console.log(e);
        });
      e.preventDefault();
    },
    handleFileUploads() {
      this.files = this.$refs.files.files;
    },
    close: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="file"],
input[type="number"] {
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
