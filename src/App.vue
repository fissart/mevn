<template>
  <img alt="Vue logo" class="imgw" src="./assets/negzw.jpg">
  <tr v-for="wwwww in www" :value="wwwww._id" :key="wwwww._id">
  <td>{{wwwww._id}}</td>
  <td>{{wwwww.title}}</td>
    <td>{{wwwww.user}}</td>
  </tr>

  <HelloWorld msg="wwWelcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data(){
  return {
  www:null
  }
  },

  mounted(){
this.getWw();
  },

  methods:{
     getWw(){
     axios.get("http://169.197.183.233:3000/api/curses/Controller")
     .then(responce => this.www=responce.data)
     .catch(e=>console.log(e))
    }

  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.imgw {
width:50%;
  margin-top: 60px;
  background-color: gray
}

</style>
