<template>
  <div id="document">
    <div id="tab-list">
      <h2 class="active">CV</h2>
      <h2>Autre Documents</h2>
    </div>
    <cv />
  </div>
</template>

<script>
import cv from './../components/cv'

export default {
  name: 'Document',
  components: {
    cv,
  }
}
</script>

<style scoped lang="scss">
#document{
  position: relative;
  top: 65px;
  #tab-list{
    display: flex;
    justify-content: center;
    width: 100%;
    h2{
      margin: 0 15px 0 15px;
      padding: 15px 5px 3px 5px;
      font-size: 1.2em;
      cursor: pointer;
    }
    .active{
      border-bottom: solid 4px #88BDBC;
      cursor: default;
    }
  }
}
</style>