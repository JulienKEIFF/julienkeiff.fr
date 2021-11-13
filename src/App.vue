<template>
    <div class="w-full lg:w-5/6 m-auto min-h-screen px-16 bg-gray-800 text-white overflow-x-hidden">
      <shortcut />
     <!--  <introduce /> -->
      <journey />
      <skills />
      <projects />

    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Shortcut from './components/shortcut.vue';
import Introduce from './components/introduce.vue';
import Journey from './components/journey.vue';
import Skills from './components/skills.vue';
import Projects from './components/projects.vue';

import Bottom from './components/bottom.vue';

@Options({
  components: { Shortcut, Introduce, Journey, Skills, Projects, Bottom },
})
export default class App extends Vue {}
</script>

<style>

</style>