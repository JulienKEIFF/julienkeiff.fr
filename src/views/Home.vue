<template>
  <div id="home">
    <info-band />
    <project-list />
    <bottomBar />
  </div>
</template>

<script>
import infoBand from '@/components/infoBand'
import projectList from '@/components/projectList'
import bottomBar from '@/components/bottomBar'

export default {
  name: 'Home',
  components: {
    infoBand,
    projectList,
    bottomBar
  },
  data(){
    return{
    }
  },
  mounted: function(){
    
  }
}
</script>

<style lang="scss" scoped>
  #home{
    margin-top: 10vh;
    width: 100vw;
  }
</style>
