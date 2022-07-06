<template>
  <img alt="Vue logo" class="imgw" src="./assets/negzw.jpg">
  <tr v-for="wwwww in curse" :value="wwwww._id" :key="wwwww._id">
  <td>{{wwwww._id}}</td>
  <td>{{wwwww.title}}</td>
  <td>{{wwwww.user}}</td>
  <td><button class="btn" v-on:click="errase(wwwww._id)">wwwww</button></td>
  <td><button class="btn" v-on:click="update(wwwww._id)">wwwww</button></td>
  <td><button class="btn" v-on:click="getupdate(wwwww._id)">wwwww</button></td>
  </tr>

  <HelloWorld :www1=curse msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

export default {
	name: 'App',
	components: {
		HelloWorld,
	},

	data() {
		return {
			curse: [],
			getcurseupdate: [],
			wwwww: 'wzwzw',
		};
	},

	mounted() {
		this.getCurse();
	},

	methods: {
		errase(user) {
			console.log(user);
		},
		update(user) {
			console.log(user);
		},
		getupdate(user) {
			console.log(user);
		},
		getCurse() {
			axios
				.get('http://169.197.183.233:3000/api/curses/Controller')
				.then(responce => this.curse = responce.data)
				.catch(e => console.log(e));
		},
	},
};
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
.btn {
  background-color: gray;
  padding: .5em;
  border-radius: .5em;
  margin: .1em;
  cursor: pointer
}


</style>
