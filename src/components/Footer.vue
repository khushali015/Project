<template>
    <footer class="container-fluid">
        <p> &#169; {{ copyright }}</p>
    </footer>
</template>

<script>
export default{
  data () {
    return {
      copyright: 'Copyright 2021 - Institute Online Judge'
    }
  }
}
</script>

<style scoped>
footer{
    background-image: linear-gradient(rgb(93, 199, 141),white);
    margin: 0px;
    padding: 5px;
}
p{
    color: black;
    text-align: center;
}
</style>
