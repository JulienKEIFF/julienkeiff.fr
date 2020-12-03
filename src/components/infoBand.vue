<template>
  <div id="info-band">
    {{repoLength}}
  </div>
</template>

<script>
export default {
  name: 'infoBand',
  props: {
    repoLength: 0
  },
  mounted: function(){
    this.axios.get("https://api.github.com/users/JulienKEIFF/repos").then(resp=>{
      this.repoLength = resp.data.length
    })
  }
}
</script>

<style scoped lang="scss">
  #info-band{
    height: 30vh;
    width: 100vw;
    background: var(--ligther-blue);
  }
</style>