<template>
  <div id="project" class="mt-16">
    <h1 class="text-4xl md:text-5xl text-center font-julius">MES PROJETS</h1>
    <div id="project" class="container flex flex-wrap justify-center row-span-3 gap-6 m-auto pb-12 w-full 2xl:w-4/5 h-auto mt-10">
      <cards v-for="(project, i) in cardContent" :key="i" :content="project" />
    </div>
  </div>
</template>

<script>
import Cards from './ui/cards.vue';

export default {
  components: { Cards },
  name: 'projects',
  setup() {
    const cardContent = [
      {
        title: 'MangaList',
        description: 'Une application Android permettant de garder une trace de livre dans sa bibliothèque',
        image: 'assets/images/app/mangalist.png',
        link: '',
        github: 'https://github.com/JulienKEIFF/mangalist',
      },
      {
        title: 'AnimList',
        description: 'Un site pour répertorier les séries animées regardées',
        image: 'assets/images/app/animList.png',
        link: 'https://animlist.julienkeiff.fr/',
        github: 'https://github.com/JulienKEIFF/animlist_v2',
      },
      {
        title: 'Fridge Companion',
        description: 'Application Android permettant de faire l\'inventaire de ses produit alimentaires',
        image: 'assets/images/app/FridgeCompanion.png',
        link: '',
        github: 'https://github.com/JulienKEIFF/Fridge_Companion',
      },
      {
        title: 'Feed Tech',
        description: 'Application Android permettant de faire une veille technologique en agregeant des flux RSS',
        image: 'assets/images/app/Feed-tech.png',
        link: '',
        github: 'https://github.com/JulienKEIFF/Feed-Tech_App',
      },
      {
        title: 'Game Of Life',
        description: 'Implémentation JavaScript du célèbre jeu de la vie',
        image: 'assets/images/game/gameOfLife.png',
        link: 'https://gameoflife.julienkeiff.fr/',
        github: 'https://github.com/JulienKEIFF/gameOfLife',
      },
      {
        title: 'Vue Filter Collection',
        description: 'Collection de filtre pour Vue.js 2',
        image: 'assets/images/module/code.jpeg',
        link: '',
        github: 'https://github.com/JulienKEIFF/Vue-filter-collection',
      },
      {
        title: 'Vue Translate System',
        description: 'Système basique de localisation pour Vue.js 2',
        image: 'assets/images/module/code.jpeg',
        link: '',
        github: 'https://github.com/JulienKEIFF/vue-simple-localization',
      },
      {
        title: 'Maquette de projet',
        description: 'Maquette pour le site du projet \'Fil Rouge\' du CESI',
        image: 'assets/images/school/maquette.png',
        link: 'https://maquette1.julienkeiff.fr',
        github: 'https://github.com/JulienKEIFF/maquette1',
      },
      {
        title: 'Better Eats',
        description: 'Application en ligne de commande sou NodeJS pour se faire livrer des repas chez soi',
        image: 'assets/images/school/code.jpeg',
        link: '',
        github: 'https://github.com/JulienKEIFF/BetterEats',
      },
    ];
    return {cardContent}
  }
}
</script>