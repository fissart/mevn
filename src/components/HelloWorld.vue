<template>
  <div class="container">
  <div class="row border d-flex justify-content-between">
    <h1 class="bg-success rounded">{{ msg }}</h1>
      <div class="bg-warning col-md-3 m-1" v-for="wwwww in curse" :value="wwwww._id" :key="wwwww._id">
      <div class="bg-success">{{wwwww._id}}</div>
      <div class="bg-light">{{wwwww.title}}</div>
      <div class="bg-info">{{wwwww.user }}</div>
      <div class="border">wwwwwwwwwwwwwwwwwww
      <img class="w-100" v-bind:src="`http://169.197.183.233:3000/${wwwww.user[0].foto}`">
    </div>
      <div><button class="btn btn-success" v-on:click="errase(wwwww._id)">errase</button></div>
      <div><button class="btn btn-danger" v-on:click="update(wwwww._id)">update</button></div>
      <div><button class="btn btn-success" v-on:click="getupdate(wwwww._id)">getupdate</button></div>
    </div>
  </div>

  <swiper
      :modules="modules"
      effect="coverflow"
      :slides-per-view="3"
      :space-between="50"
      loop: true
      navigation
      :autoplay="{delay: 1000, disableOnInteraction: true}"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >

     <swiper-slide class="justify-content-center align-items-center bg-ligth" v-for="wwwww in curse" :value="wwwww._id" :key="wwwww._id">
       <div class="bg-info">{{wwwww.title}}</div>
      <img class="w-100 bg-info" v-bind:src="`http://169.197.183.233:3000/${wwwww.user[0].foto}`">
      <div class="bg-info">{{wwwww._id}}</div>
     </swiper-slide>

   </swiper>
   <div>
               <div class="file-upload-form">
                   Upload an image file:
                   <input refs="w_w" type="file" @change="previewImage" accept="image/*">
               </div>
               <div class="image-preview" v-if="imageData.length > 0">
                   <img class="preview" :src="imageData" @click="wwfile">
               </div>
           </div>
  </div>
  <router-view/>
</template>

   
<script>
// import Swiper core and required modules
 import { Navigation, Pagination, Scrollbar, A11y, Autoplay , EffectFade, EffectCoverflow } from 'swiper';

 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

 // Import Swiper styles
   import 'swiper/css';
   import 'swiper/css/navigation';
   import 'swiper/css/pagination';
   import 'swiper/css/scrollbar';
   import 'swiper/css/autoplay';
   import 'swiper/css/effect-fade';
   import 'swiper/css/effect-coverflow';
//import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    www1: String
  },

  components: {
        Swiper,
        SwiperSlide,
      },

  setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          EffectFade,
          EffectCoverflow,
          modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow ],
        };
      },

  data() {
		return {
			curse: [],
			getcurseupdate: [],
			wwwww: 'wzwzw',
      imageData: ""
		};
	},

  mounted() {
		this.getCurse();
	},

	methods: {
wwfile (){
console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
this.$refs.w_w.click()
},
    previewImage: function(event) {
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        },

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
