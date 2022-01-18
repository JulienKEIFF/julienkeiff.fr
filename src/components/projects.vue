<template>
  <div id="project" class="mt-16">
    <h1 class="text-4xl md:text-5xl text-center font-julius">MES PROJETS</h1>
    <div id="project" class="container flex flex-wrap justify-center row-span-3 gap-6 m-auto pb-12 w-full 2xl:w-4/5 h-auto mt-10">
      <cards v-for="project in cardContent" :key="project.id" :content="project" />
    </div>
  </div>
</template>

<script>
import Cards from './ui/cards.vue';
import Axios from 'axios';

export default {
  components: { Cards },
  name: 'projects',
  data(){
    return {
      cardContent: [],
    }
  },
  methods: {
    async getProjects() {
      const { data: projects } = await Axios.get('https://panel.julienkeiff.fr/projects');
      this.cardContent = projects;
    }
  },
  mounted() {
    this.getProjects();
  },
}
</script>