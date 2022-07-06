<template>
  <div class="home">
    <img class="img" src="../assets/negzw.jpg">
    <HelloWorld  msg="Welcome to Your Vue.js App New"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'HomeView',
	components: {
		HelloWorld,
	},
	mounted() {
		localStorage.setItem('YourItem', 'wwwwwwwwwwwww');
		console.log(localStorage.getItem('YourItem'));
	},
};
</script>


<style media="screen">
.img{
  width: 50%;
border-radius: 5px
}
</style>
