<template>
  <div id="project-view">
    <h1>MES PROJETS</h1>
     <div id="card-list">
       <Card image="app/mangalist.png" title="MangaList" descr="Application destinée au mobile afin de pouvoir gérer simplement sa mangathèque." github githubURL=" " />
    </div>
  </div>
</template>

<script>
import Card from './../components/cards.vue'

export default {
  name: 'project',
  components: {
    Card
  }
}
</script>

<style scoped lang="scss">
#project-view{
  height: 550px;
  overflow-y: hidden;
  position: relative;
  top: 50px;
  h1{
    margin: 0 60px 0 10px;
    padding-top: 50px;
    text-align: left;
    font-size: 1.7em;
    color: #254E58;
    border-bottom: solid 2px #254E58;
  }
  .card-list{
    width: 100%;
    height: 400px;
  }
}
</style>