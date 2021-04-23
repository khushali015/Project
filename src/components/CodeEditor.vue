<template>
  <div class=".container" style="margin: 30px">
    <div>
      <p style="margin: 2vw 2vw;font-size: 2.5vw">Code, Compile and Run</p>
      <div class="selection">
        <label for="question"><p style="font-size: 1.5vw;margin-right:1vw;">Question:</p></label>
        <select
          name="question"
          v-model="content.question"
          style="margin-right: 2px">
          <option v-for="ques in questionID" :key="ques">{{ ques }}</option>
        </select>
        <label for="Lang"><p style="font-size: 1.5vw;margin-left:1vw;margin-right:1vw;">Language:</p></label>
        <select name="Lang" v-model="content.language">
          <option v-for="lang in languages" :key="lang">{{ lang }}</option>
        </select>
      </div>
      <div id="editor">
        <editor
          v-model="content.code"
          @init="editorInit"
          lang="c_cpp"
          theme="chrome"
          width="65vw"
          height="30vw"
          style="border: 1px solid gray; font-size: 1vw"
        ></editor>
      </div>
      <div class="input">
        <p style="font-size: 1.5vw;">Input:</p>
        <textarea
          rows="4"
          maxlength="100"
          v-model="content.input"
          cols="80"
        ></textarea>
      </div>
      <div class="buttons">
        <button type="submit" @click="run">Run</button>
        <button type="submit" @click="submit">Submit</button>
      </div>
      <div class="output" v-if="output">
        <h5>Output</h5>
        <div style="border: 1px solid black">{{ output }}</div>
      </div>
      <div class="result" v-if="result">
        <h5>Result</h5>
        <div style="border: 1px solid black">{{ result }}</div>
      </div>
    </div>
  </div>
</template>
<script src="src/js/ace.js" type="text/javascript" charset="utf-8"></script>
<script>
import axios from "axios";

export default {
  data() {
    return {
      content: {
        code: "",
        language: "",
        question: "",
        input: "",
        button: "",
      },
      languages: ["c", "cpp", "java", "python3", "c#"],
      questionID: [],
      output: "",
      result: "",
      newline: "\n",
    };
  },
  methods: {
    run(e) {
      this.content.button = "run";
      axios
        .post("http://127.0.0.1:5000/get_data/", this.content)
        .then((response) => {
          if (response.data.stdout == "") {
            this.output = response.data.outcome + response.data.cmpinfo;
          } else this.output = response.data.stdout;
          // console.log(e);
        });
      e.preventDefault();
    },
    submit(e) {
      // this.output = ''
      this.content.button = "submit";
      axios
        .post("http://192.168.43.154:5000/get_result/", this.content)
        .then((response) => {
          this.result = response.data.outcome;
        });
      e.preventDefault();
    },
    editorInit: function () {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/html");
      require("brace/mode/c_cpp"); //language
      require("brace/mode/less");
      require("brace/theme/chrome");
      require("brace/snippets/javascript"); //snippet
    },
  },
  components: {
    editor: require("vue2-ace-editor"),
  },
};
</script>

<style scoped>
.selection {
  margin: 1vw 2vw;
  /* border: 1px solid gray; */
  width: 65vw;
  padding: 1.5vw;
  background: linear-gradient(to left, #00e4bb, #ccc);
}
.input,.output,
.result {
  margin: 1vw 2vw;
  /* padding: 1vw; */
  /* border: 2px solid black; */
  width: 40px;
}
button {
  /* padding: 1vw 8vw; */
  height: 5vw;
  width: 15vw;
  border: none;
  border-radius: 1vw;
  margin: 1vw 1vw 1vw 2vw;
  font-size: 1.5vw;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif, Geneva, Tahoma,
    sans-serif;
  background: linear-gradient(to left, #00e4bb, #ccc);
}
#editor {
  /* position: relative; */
  margin: 3vw 2vw 1vw;
  bottom: 0;
  /* font-size: 20pt; */
  /* border: 2px solid black; */
}
</style>
