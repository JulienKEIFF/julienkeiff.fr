<template>
  <div id="home">
    <projectView />
    <gameView />
  </div>
</template>

<script>
import gameView from '@/components/game.vue'
import projectView from '@/components/project.vue'

export default {
  name: 'Home',
  components: {
    gameView,
    projectView
  }
}
</script>

<style>

</style>
