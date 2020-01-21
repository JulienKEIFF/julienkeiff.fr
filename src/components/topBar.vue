<template>
  <div id="container">
    <div id="top-bar">
      <router-link to="/"><h1>JULIEN KEIFF</h1></router-link>
      <span id="reseaux">
        <a href="https://github.com/JulienKEIFF" target="_blank"><GitHub /></a>
        <a href="mailto:j.keiff@hotmail.fr" target="_blank"><Mail /></a>
        <a href="/document"><Document /></a>
      </span>
    </div>
  </div>
</template>

<script>
import GitHub from 'vue-material-design-icons/GithubBox.vue'
import Mail from 'vue-material-design-icons/Mail.vue'
import Document from 'vue-material-design-icons/FileDocumentBoxOutline.vue'

export default {
  name: 'topBar',
  components: {
    GitHub,
    Mail,
    Document
  }
}
</script>

<style scoped lang="scss">
#top-bar{
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 65px;
  background-color: #88BDBC;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  .material-design-icon__svg{
    font-size: 2.7em;
    margin: auto 0;
    display: flex;
    top: -6px;
    left: -5px;
    color: white;
  }
  h1{
    padding: 0;
    margin: 0 0 0 20px;
    color: white;
  }
  .router-link-exact-active.router-link-active{
    text-decoration: none;
  }
  .router-link-active{
    text-decoration: none;
  }
  #reseaux{
    padding-right: 20px;
    &:last-child{
      position: absolute;
      right: 20px;
    }
    a{
      margin-left: 15px;
      margin-right: 15px;
    }
  }
}
</style>