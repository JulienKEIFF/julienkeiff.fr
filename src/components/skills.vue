<template>
  <div id="skills" class="mt-32">
    <h1 class="text-4xl md:text-5xl text-center font-julius mb-12">MES COMPETENCES</h1>

    <div id="container-landscape" class="w-full xl:w-8/12 h-96 mx-auto flex flex-row rounded-2xl overflow-hidden" v-if="!portrait">
      <div id="chooser" class="w-2/12 h-full bg-gray-700">
        <div @click="changeTab(0)" class="flex mb-2 cursor-pointer p-2" :class="tab == 0 ? 'bg-gray-600' : ''">
          <unicon name="github-alt" fill="white" class="mt-1"></unicon>
          <span class="ml-2 text-xl">Professionel</span>
        </div>
        <div @click="changeTab(1)" class="flex mb-2 cursor-pointer align-middle self-center p-2" :class="tab == 1 ? 'bg-gray-600' : ''">
          <unicon name="desktop" fill="white" class="mt-1"></unicon>
          <span class="ml-2 text-xl">Bureatique</span>
        </div>
      </div>

      <div id="content" class="bg-gray-600 w-10/12 overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-400 border-gray-600 border-solid border-t-12 border-b-12">
        <div v-if="tab == 0"> <skill-list :content="proContent" /> </div>
        <div v-if="tab == 1"> <skill-list :content="desktopContent" /> </div>
      </div>
    </div>

    <div id="container-portrait" class="w-full max-h-96 mx-auto flex flex-col rounded-2xl overflow-hidden" v-else>
      <div id="chooser" class="w-full h-9 bg-gray-700 flex">
        <div @click="changeTab(0)" class="flex mb-2 cursor-pointer w-2/4 h-full text-center justify-center content-center" :class="tab == 0 ? 'bg-gray-600' : ''">
          <span class="text-lg h-full flex text-center w-full items-center justify-center">Professionel</span>
        </div>
        <div @click="changeTab(1)" class="flex mb-2 cursor-pointer w-2/4 h-full text-center justify-center content-center" :class="tab == 1 ? 'bg-gray-600' : ''">
          <span class="text-lg h-full flex text-center w-full items-center justify-center">Bureautique</span>
        </div>
      </div>

      <div id="content" class="bg-gray-600 w-12/12 overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-400 border-gray-600 border-solid border-t-12 border-b-12">
        <div v-if="tab == 0"> <skill-list :content="proContent" /> </div>
        <div v-if="tab == 1"> <skill-list :content="desktopContent" /> </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import SkillList from './ui/skillList.vue';

export default {
  name: 'skills',
  components: { SkillList },
  setup() {
    let tab = ref(0);
    let portrait = ref(false);
    
    function changeTab(newtab) {
      tab.value = newtab;
    }

    function isPortrait() {
      if(innerHeight > innerWidth) portrait.value = true;
      else portrait.value = false;
    }

    const proContent = [
      {
        title: 'HTML/CSS',
        logo: 'assets/images/res/html.png',
        value: '10',
      },
      {
        title: 'JavaScript',
        logo: 'assets/images/res/js.png',
        value: '10',
      },
      {
        title: 'Vue',
        logo: 'assets/images/res/vue.png',
        value: '9',
      },
      {
        title: 'Angular',
        logo: 'assets/images/res/angular.png',
        value: '6',
      },
      {
        title: 'MongoDB',
        logo: 'assets/images/res/mongo.png',
        value: '7',
      },
      {
        title: 'SQL',
        logo: 'assets/images/res/SQL.png',
        value: '6',
      },
      {
        title: 'Docker',
        logo: 'assets/images/res/docker.png',
        value: '8',
      },
      {
        title: 'C#',
        logo: 'assets/images/res/csharp.png',
        value: '5',
      },
      {
        title: 'Dart',
        logo: 'assets/images/res/dart.png',
        value: '5',
      },
      {
        title: 'Flutter',
        logo: 'assets/images/res/flutter.png',
        value: '5',
      },
      {
        title: 'Kotlin',
        logo: 'assets/images/res/kotlin.png',
        value: '5',
      }
    ]

    const desktopContent = [
      {
        title: 'Suite Office',
        logo: 'assets/images/res/office.png',
        value: '8',
      },
      {
        title: 'Suite Adobe',
        logo: 'assets/images/res/adobe.png',
        value: '6',
      }
    ]

    isPortrait();

    window.onresize = isPortrait

    return { tab, changeTab, proContent, desktopContent, portrait }
  }
}
</script>