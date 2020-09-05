<template>
  <div class="card">
    <div class="info">
      <a v-bind:href="onSiteURL" target="_blank" v-if="isOnSite === true" class="icon"> <onSite /> </a>
      <a v-bind:href="githubURL" target="_blank" v-if="github === true" class="icon"> <GitHub /> </a>
    </div>

    <div class="background">
      <img v-bind:src="require('./../assets/img/' + image)">
    </div>

    <div class="text">
      <h1> {{title}} </h1>
      <h2> {{descr}} </h2>
    </div>

  </div>
</template>

<script>
import GitHub from 'vue-material-design-icons/GithubBox.vue'
import onSite from 'vue-material-design-icons/Web.vue'

export default {
  name: 'card',
  components: {
    GitHub,
    onSite
  },
  props: {
    image: String,
    title: String,
    descr: String,
    github: Boolean,
    githubURL: String,
    isOnSite: Boolean,
    onSiteURL: String
  }
}
</script>

<style scoped lang="scss">
.card{
  position: relative;
  overflow: hidden;
  height: 400px;
  width: 300px;
  float: left;
  background: rgba(255, 0, 0, 0.356);
  margin: 3vh 2vw;
  border: 1px solid rgba(0, 0, 0, 0.212);
  border-radius: 2%;
  .background{
    img{
      width: 100%;
    }
  }
  .text{
    position: absolute;
    top: 80%;
    height: 100%;
    background: rgb(255, 255, 255);
    transition-duration: 1s;
    border-radius: 5%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.527);
    h1{
      margin-top: 25px;
      margin-left: 10px;
      text-transform: uppercase;
      font-size: 3.5vh;
      font-weight: bold;
    }
    h2{
      text-align: left;
      text-justify: inter-word;
      font-size: 2.5vh;
      margin: 0 10px;
    }
  }
  .info{
    position: absolute;
    width: 20%;
    background: #88BDBC;
    display: flex;
    flex-direction: column;
    border-bottom-right-radius: 10%;
    .icon{
      color: white;
      height: 100%;
      font-size: 2vw;
      margin: 0 auto;
      text-align: center;
      text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.527);
    }
  }
  &:hover > .text{
    top: 30%;
    transition-duration: 1s;
  }
}


</style>