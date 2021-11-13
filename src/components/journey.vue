<template>
  <div id="journey" class="mt-32">
    <h1 class="text-4xl md:text-5xl text-center font-julius mb-12">MON PARCOURS</h1>

    <div id="content" class="h-full border-l-2 max-w-max bg-red-30 mx-auto">
      <div class=""></div>

      <div class="relative item flex flex-row items-center w-full mb-7" v-for="(journey, i) in journeyList" :key="i">
        <div class="absolute -left-2 w-3 h-3 rounded-xl flex bg-white" :class="portrait ? 'top-2' : 'top-4'"> </div>

        <div class="flex flex-col text-base md:text-xl ml-4">
          <h1 class="text-xl font-bold md:text-3xl">{{journey.title}}</h1>
          <div class="ml-4">
            <h2 class="italic">{{journey.location}} - {{journey.date}}</h2>
            <div class="mt-4 mb-4">{{journey.descr}}</div>
            <div>Durée de l'expérience: {{journey.duration}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'journey',
  setup() {
    let portrait = ref(false);

    function isPortrait() {
      if(innerHeight > innerWidth) portrait.value = true;
      else portrait.value = false;
    }

    const journeyList = [
      {
        title: 'Baccalauréat Profesionnel Aménagement Paysager',
        location: 'Lycée agricole de Courcelle-Chaussy',
        descr: 'Réalisation d\'un Baccalauréat Profesionnel Aménagement Paysager ',
        date: '2014 / 2017',
        duration : '3ans'
      },
      {
        title: 'BTS Aménagement Paysager',
        location: 'CFA de Courcelle-Chaussy',
        descr: '',
        date: '2017 / 2019',
        duration : '2ans'
      },
      {
        title: 'Licence profesionnel Infographie Paysagère',
        location: 'Epinal',
        descr: 'Formations dans le domaine de l’infographie paysagère mise en place par l’Ecole d’horticulture et de paysage de Roville-aux-chênes.',
        date: '2018 / 2019',
        duration : '1an'
      },
      {
        title: 'Auto Formation',
        location: 'Metz',
        descr: 'Année d\'autoformation en étant en intérim',
        date: '2019 / 2020',
        duration : '1an'
      },
      {
        title: 'Bac +4 - DevOps',
        location: 'CESI de Nancy ',
        descr: '',
        date: '2020 / 2022',
        duration : '2ans'
      }
    ];

    isPortrait();

    return { journeyList, portrait }
  }
}
</script>