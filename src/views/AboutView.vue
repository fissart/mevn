<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'HomeView',
  mounted(){
    localStorage.removeItem('YourItem')
    console.log(localStorage.getItem('YourItem'));
    
  }
}
</script>
