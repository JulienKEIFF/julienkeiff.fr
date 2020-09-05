<template>
  <div id="project-view">
    <h1>MES JEUX</h1>
     <div id="card-list">
       <Card image="game/gameOfLife.png" title="Jeu de la vie" descr="Le jeu de la vie (Game Of Life) est un automate cellulaire inventé en 1970." github githubURL="https://github.com/JulienKEIFF/gameOfLife" isOnSite onSiteURL="http://gameoflife.julienkeiff.fr" />
    </div>
  </div>
</template>

<script>
import Card from './../components/cards.vue'

export default {
  name: 'Game',
  components: {
    Card
  }
}
</script>

<style scoped lang="scss">
#project-view{
  height: 550px ;
  overflow-y: hidden;
  position: relative;
  top: 50px;
  h1{
    margin: 0 60px 0 10px;
    padding-top: 50px;
    text-align: left;
    font-size: 1.7em;
    color: rgba(0, 0, 0, 0.65);
    border-bottom: solid 2px rgba(0, 0, 0, 0.25);
  }
  .card-list{
    position: relative;
  }
}
</style>