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
body{
  background: rgb(241, 241, 241);
}
#home{
  width: 90%;
  margin: 0 auto;
  background: white;
  box-shadow: 3px 3px 15px rgb(167, 167, 167);
  padding-bottom: 50px;
  margin-bottom: 50px;
}
</style>
