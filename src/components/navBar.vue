<template>
  <div id="navbar">
    <div class="info"> {{nameSite}} </div>
    <div class="logo">
      <icon :icon="['fab','github']" class="icon" v-on:click="openNewTab('https://github.com/JulienKEIFF')" />
      <icon :icon="['fab','linkedin']" class="icon" v-on:click="openNewTab('https://www.linkedin.com/in/julien-keiff-aa762b1b1/')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data(){
    return{
      nameSite: "JULIEN KEIFF"
    }
  },
  methods:{
    openNewTab: function(link){
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
  #navbar{
    position: absolute;
    top: 0;
    left: 0;
    height: 10vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    background: var(--dark-blue);
    box-shadow: 0 1vh 1vh rgba(0, 0, 0, 0.3);
    z-index: 10;
    .info{
      display: flex;
      height: 100%;
      align-items: center;
      margin-left: 1%;
      color: white;
      font-size: 3em;
      font-family: 'Julius Sans One', sans-serif;
    }
    .logo{
      position: absolute;
      right: 3%;
      height: 100%;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      .icon{
        height: 4.5vh;
        width: auto;
        color: white;
        margin-left: 35%;
        cursor: pointer;
        transition-duration: 0.2s;
        &:hover{
          color: var(--ligther-blue);
          transition-duration: 0.2s;
        }
      }
    }
  }
</style>