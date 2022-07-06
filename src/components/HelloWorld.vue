<template>
  <div>
    <h1>{{ msg }}</h1>
      <tr v-for="wwwww in curse" :value="wwwww._id" :key="wwwww._id">
      <td>{{wwwww._id}}</td>
      <td>{{wwwww.title}}</td>
      <td>{{wwwww.user }}</td>
      <td>wwwwwwwwww
      <img class="imgw" v-bind:src="`http://169.197.183.233:3000/${wwwww.user[0].foto}`">
    </td>
      <td><button class="btn" v-on:click="errase(wwwww._id)">errase</button></td>
      <td><button class="btn" v-on:click="update(wwwww._id)">update</button></td>
      <td><button class="btn" v-on:click="getupdate(wwwww._id)">getupdate</button></td>
      </tr>
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/www">www</router-link>
  </nav>
  <router-view/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    www1: String
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
      axios
        .get(`http://169.197.183.233:3000/api/curses/Controller/${user}`)
        .then(responce => console.log(responce.data))
        .catch(e => console.log(e));
		},
		getCurse() {
			axios
				.get('http://169.197.183.233:3000/api/curses/Controller')
				.then(responce => this.curse = responce.data)
				.catch(e => console.log(e));
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.imgw{
  width: 50px;
border-radius: 5px
}
</style>
