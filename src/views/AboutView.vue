<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script type="text/javascript">

import axios from 'axios';

export default {
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
        .get(`https://www.esfapa.edu.pe:9797/api/curses/Controller/${user}`)
        .then(responce => console.log(responce.data))
        .catch(e => console.log(e));
    },

    getCurse() {
      axios
        .get('https://www.esfapa.edu.pe:9797/api/curses/Controller')
        .then(responce => this.curse = responce.data)
        .catch(e => console.log(e));
    },
  },
}
</script>
