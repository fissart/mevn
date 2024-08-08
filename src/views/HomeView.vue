<template>
	<div class="bg-info">
		<img class="img w-100" src="../assets/negzw.jpg">
		<HelloWorld msg="Welcome to Your Vue.js App New" www1="hellow" />
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
	.img {
		border: .2cm;
		padding: .2cm;
		border-radius: 17px
	}
</style>