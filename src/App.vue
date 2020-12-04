<template>
  <div id="app">
    <nav-bar />
    <router-view/>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  components:{
    navBar
  }
}
</script>

<style lang="scss">
  :root{
    --dark-blue: #12232E;
    --ligther-blue: #007CC7;
    --ligthest-blue: #4DA8DA;
    --shadow-dark-blue: #203647;
    --shadow-light-blue: #EEFBFB;
  } 
  body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: var(--shadow-light-blue);
    overflow-x: hidden;
  }
</style>
