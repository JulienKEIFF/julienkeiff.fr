<template>
  <div id="home">
    <info-band />
  </div>
</template>

<script>
import infoBand from '@/components/infoBand'
export default {
  name: 'Home',
  components: {
    infoBand
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
