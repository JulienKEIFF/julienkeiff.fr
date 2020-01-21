<template>
  <div id="app">
    <topBar />
    
    <router-view/>
  </div>
</template>

<script>
import topBar from './components/topBar'

export default {
  name: 'app',
  components: {
    topBar,    
  }
}
</script>

<style>
html{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
