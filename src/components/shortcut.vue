<template>
  <div class="text-4xl relative w-full mx-auto text-center mt-7 mb-7 font-julius font-normal select-none" v-if="portrait">JULIEN KEIFF</div>
  <div class="relative flex justify-end items-center gap-2 md:gap-4 font-medium text-sm flex-col xl:flex-row xl:text-xl pt-8">
    <span class="text-5xl absolute left-0 font-julius font-normal select-none" v-if="!portrait">JULIEN KEIFF</span>
    <!--<span class="text-2xl md:text-xl p-1 cursor-pointer transition-all duration-200 hover:border-white border-transparent border-b-2"><a href="#who-am-i">Qui suis je ?</a></span> -->
    <span class="text-2xl md:text-xl p-1 cursor-pointer transition-all duration-200 hover:border-white border-transparent border-b-2"><a href="#journey">Mon parcours</a></span>
    <span class="text-2xl md:text-xl p-1 cursor-pointer transition-all duration-200 hover:border-white border-transparent border-b-2"><a href="#skills">Mes compétences</a></span>
    <span class="text-2xl md:text-xl p-1 cursor-pointer transition-all duration-200 hover:border-white border-transparent border-b-2"><a href="#project">Mes projets</a></span>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'shortcut',
  setup() {
    const portrait = ref(false);

    function isPortrait() {
      if(innerHeight > innerWidth) portrait.value = true;
      else portrait.value = false;
    }

    window.onresize = isPortrait;

    isPortrait();

    return {portrait}
  }
}
</script>