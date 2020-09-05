<template>
  <div id="project-view">
    <h1>MES PROJETS</h1>
     <div id="card-list">
      <Card image="app/mangalist.png" title="MangaList" descr="Application destinée au mobile afin de pouvoir gérer simplement sa mangathèque." github githubURL="https://github.com/JulienKEIFF/mangalist" />
      <Card image="app/animList.png" title="animList" descr="Application web destinée à la gestion des series animée vue ou à voir. De plus ce système s'applique aussi sur une large gamme de manga." github githubURL="https://github.com/JulienKEIFF/animlist_v2" isOnSite onSiteURL="http://animlist.julienkeiff.fr" />
      <Card image="app/FridgeCompanion.png" title="Fridge Companion" descr="Application mobile dont le but est de gérer sa liste d'aliment et de créer automatiquement des listes de course" github githubURL="https://github.com/JulienKEIFF/Fridge_Companion" />
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
    color: rgba(0, 0, 0, 0.65);
    border-bottom: solid 2px rgba(0, 0, 0, 0.25);
  }
  .card-list{
    position: relative;
  }
}
</style>