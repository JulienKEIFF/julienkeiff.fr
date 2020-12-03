<template>
  <div id="navbar">
    <div class="info"> {{nameSite}} </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data(){
    return{
      nameSite: "JULIEN KEIFF"
    }
  }
}
</script>

<style scoped lang="scss">
  #navbar{
    position: fixed;
    top: 0;
    left: 0;
    height: 10vh;
    width: 100vw;
    background: var(--dark-blue);
    .info{
      display: flex;
      height: 100%;
      align-items: center;
      margin-left: 1%;
      color: white;
      font-size: 3em;
      font-family: 'Julius Sans One', sans-serif;
    }
  }
</style>