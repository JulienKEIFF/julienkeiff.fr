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
        github: "https://github.com/JulienKEIFF/mangalist"
      },{
        name: "AnimList",
        img: "animList.png",
        type: "app",
        github: "https://github.com/JulienKEIFF/animlist_v2",
        web: "https://animlist.julienkeiff.fr/"
      },{
        name: "Fridge Companion",
        img: "FridgeCompanion.png",
        type: "app",
        github: "https://github.com/JulienKEIFF/Fridge_Companion"
      }],
      gameProjectListData: [{
        name: "Game Of Life",
        img: "gameOfLife.png",
        type: "game",
        github:"https://github.com/JulienKEIFF/gameOfLife",
        web: "https://gameoflife.julienkeiff.fr/"
      }],
      moduleProjectListData: [{
        name: "Vue Filter Collection",
        img: "vueFilter.png",
        type: "module",
        github: "1"
      },{
        name: "Vue Translate System",
        img: "code.jpeg",
        type: "module",
        github: "1"
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