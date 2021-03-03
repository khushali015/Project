<template>
  <div class=".container"><br>
  <div style="margin: 25px;border: 1px solid gray">
      <h1 style="margin: 50px;">Code, Compile and Run</h1>
  
    <div class="selection">
        <label for="question"><h5>Question:</h5></label>
        <select name="question" v-model="question" style="margin-right: 20px;">
            <option v-for="ques in questions">{{ ques }}</option>
        </select>
        <label for="Lang"><h5>Language:</h5></label>
        <select name="Lang" v-model="language">
            <option v-for="lang in languages">{{ lang }}</option>
        </select>
    </div>
    <div id="editor">
      <editor
        v-model="content"
        @init="editorInit"
        lang="c_cpp"
        theme="chrome"
        width="1000px"
        height="500px"
        style="border: 1px solid gray"
      ></editor>
    </div>
    <div class="buttons">
        <button> Run</button>
        <button> Submit</button>
    </div>
    <div class="input">
        <textarea rows="5" cols="125"></textarea>
    </div>
    </div>
  </div>
</template>
<script src="src/js/ace.js" type="text/javascript" charset="utf-8"></script>
<script>
export default {
  data() {
      return {
        content: "",
        languages: ['C',"C++","Java","Python","C#"],
        question: "",
        questions: []
      }
  },
  methods: {
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
.selection{
    margin: 25px 50px;
    border: 1px solid gray;
    width: 1000px;
    padding: 15px;
}
.buttons{
    margin: 30px 50px ;
    /* border: 2px solid black; */
    width: 1000px;
    padding: 20px;
}
.input{
    margin: 30px 50px ;
    border: 2px solid black;
    width: 1000px;
    padding: 20px;
}
button{
    padding: 10px 205px;
    border: none;
    border-radius: 10px;
    margin: 5px;
    font-weight: bold;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    background: linear-gradient(to left, #00e4bb, #ccc);
}
#editor {
  position:relative;
  height: 500px;
  margin: 15px 50px;
  bottom: 0;
  /* border: 2px solid black; */
}
</style>
