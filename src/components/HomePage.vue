<template>
    <div style="background-image: linear-gradient(rgb(93, 199, 141),white,rgb(93, 199, 141))">
      <img  :src="require('../assets/image2.png')" class="center img-responsive"/>
      <div class="row">
        <div class="programming">
          <div class="img col-sm-4 img-responsive" style="margin-left: 5%;">
            <img :src="require('../assets/image1.png')" id="image" width="110%" />
          </div>
          <div class="text1 col-sm-5 img-responsive" style="text-align:justify;margin:5%;">
            <h2>Programming</h2>
            <p>Programming is one of the major leads that plays an important role in Computer Science. As it can always be sharpened by only practice, hence having better platform to practice and compete is
            essential. Participating in contests at a good platform leads to a better improvement in coding skills.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="about">
          <div class="text2 col-sm-5" style="text-align:justify;margin:5%;">
            <h2>About INOJ</h2>
            <p>
              INOJ is an organized and structured online judge system that auto grades contests
              and assist students with a rich set of programming assignments to amplify their
              strength and knowledge. INOJ platform is a system designed for real-time evaluation
              of algorithm-logic based source code through compiling and testing methods.
              It is built to test one’s intellect.
              <br />
              <br />Supports over 10+ programming language and compilers for user convenience.
              Facilitates with auto-grading system which is quick and efficient.
              Supports raking mechanism for users to seek where they stand.
              <br />
              <br />PRACTICE: This section contains the problem set assignments of curriculum
              subjects that student can have access to and practice to polish their programming skills.
              <br />COMPETE: This section is used to host different programming contests where in
               one can participate and disclose one's talent. Here is where one is introduced to
               Competitive Programming World.
            </p>
          </div>
          <div class="img col-sm-5" style="margin-right: 5%;">
            <img :src="require('../assets/image3.jpg')" id="image" width="100%"/>
          </div>
        </div>
      </div>
      <app-Footer></app-Footer>
    </div>
</template>

<script>
import Footer from './Footer.vue'
export default {
  components: {
    'app-Footer': Footer
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  padding-top: 3%;
  width: 50%;
}
.row{
    margin: 0px;
}
.programming {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4%;
}
.about {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
#image {
  border-style: none;
  border-radius: 55pt;
}
h2,p{
    color:black;
}
</style>
