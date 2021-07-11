<template>
  <div id="home">
    <info-band />

    <div id="tabs">
      <button :class="project ? 'active' : ''" @click="project = true; cv = false">MES PROJETS</button>
      <button :class="cv ? 'active' : ''" @click="cv = true; project = false">MES COMPETENCES</button>
    </div>
    <Projects v-if="project" />
    <CV v-if="cv" />

    <bottomBar />
  </div>
</template>

<script>
import infoBand from '@/components/infoBand'
import bottomBar from '@/components/bottomBar'

import Projects from './Projects'
import CV from './CV'

export default {
  name: 'Home',
  components: {
    infoBand,
    Projects,
    CV,
    bottomBar,
  },
  data(){
    return{
      project: true,
      cv: false,
    }
  },
}
</script>

<style lang="scss" scoped>
  #home{
    margin-top: 10vh;
    width: 100vw;
  }
  #tabs{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 50px;
    button{
      border: none;
      width: 50%;
      font-size: 1.5em;
      font-weight: bold;
      color: #222;
      background: none;
      cursor: pointer;
      &:focus{
        outline: none;
      }
    }
    button.active{
      background: var(--dark-blue);
      color: white;
    }
  }
</style>
