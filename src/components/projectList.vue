<template>
  <div id="project-list">
    <span class="title"> {{"Application"}} </span>
    <div class="container">
      <project-component class="project" v-for="(appProject, i) in appProjectListData" 
        :key="i" 
        :data="appProject"
      />
    </div>

    <span class="title"> {{"Jeux"}} </span>
    <div class="container">
      <project-component class="project" v-for="(gameProject, i) in gameProjectListData" 
        :key="i+gameProject.name" 
        :data="gameProject" 
      />
    </div>

    <span class="title"> {{"Module"}} </span>
    <div class="container">
      <project-component class="project" v-for="(moduleProject, i) in moduleProjectListData" 
        :key="i+moduleProject.name" 
        :data="moduleProject"
      />
    </div>

    <span class="title"> {{"Projet Scolaire"}} </span>
    <div class="container">
      <project-component class="project" v-for="(moduleProject, i) in moduleProjectSchoolData" 
        :key="i+moduleProject.name" 
        :data="moduleProject"
      />
    </div>
  </div>
</template>

<script>
import projectComponent from '@/components/project/projectComponent'
export default {
  name: 'projectList',
  components:{
    projectComponent
  },
  data(){
    return{
      appProjectListData:[{
        name: "Mangalist",
        img: "mangalist.png",
        type: "app",
        github: "https://github.com/JulienKEIFF/mangalist",
        descr: "Une application Android pour garder une trace des livres que l'on possède"
      },{
        name: "AnimList",
        img: "animList.png",
        type: "app",
        github: "https://github.com/JulienKEIFF/animlist_v2",
        web: "https://animlist.julienkeiff.fr/",
        descr: "Site pour répertorier les séries animées vues"
      },{
        name: "Fridge Companion",
        img: "FridgeCompanion.png",
        type: "app",
        github: "https://github.com/JulienKEIFF/Fridge_Companion",
        descr: "Application Android afin de faire un inventaire de ses produits alimentaires"
      },{
        name: "Feed-Tech",
        img: "Feed-tech.png",
        type: "app",
        github: "https://github.com/JulienKEIFF/Feed-Tech_App",
        descr: "Application Android qui permet de faire une veille technologique en egregeant différents flux RSS"
      }],
      gameProjectListData: [{
        name: "Game Of Life",
        img: "gameOfLife.png",
        type: "game",
        github:"https://github.com/JulienKEIFF/gameOfLife",
        web: "https://gameoflife.julienkeiff.fr/",
        descr: "Implémentation Vanilla JS du célèbre jeu de la vie"
      }],
      moduleProjectListData: [{
        name: "Vue Filter Collection",
        img: "vueFilter.png",
        type: "module",
        github: "1",
        descr: "Collection de différents filtres pour VueJS"
      },{
        name: "Vue Translate System",
        img: "code.jpeg",
        type: "school",
        github: "1",
        descr: "Système basique pour la localization d'un site"
      }],
      moduleProjectSchoolData: [{
        name: "Maquette projet fil rouge",
        img: "maquette.png",
        type: "school",
        github: "https://github.com/JulienKEIFF/maquette1",
        descr: "Maquette pour le site du projet 'Fil Rouge' du CESI"
      },{
        name: "Better Eats",
        img: "code.jpeg",
        type: "school",
        github: "https://github.com/JulienKEIFF/BetterEats",
        descr: "Application en ligne de commande sous NodeJS pour se faire livrer des repas chez soi"
      }]
    }
  }
}
</script>

<style scoped lang="scss">
  #project-list{
    padding: 2.5vh 5% 2.5vh 5%;
    width: 90%;
    height: 100%;
    z-index: -1;
    .title{
      display: block;
      width: 100%;
      font-size: 2.5em;
      border-bottom: black 1px solid;
      margin-top: 2%;
      margin-bottom: 1%;
      &:first-of-type{
        margin-top: 0;
      }
    }
    .container{
      width: 100%;
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
    }
  }
</style>