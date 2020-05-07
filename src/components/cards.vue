<template>
  <div class="card">
    <div class="image-div">
      <img v-bind:src="require('./../assets/img/' + image)">
    </div>
    <h2>{{title}}</h2>
    <p>{{descr}}</p>
    <div class="link-card">
      <div v-if="github === true" class="icon">
        <a v-bind:href="githubURL" target="_blank">
          <GitHub />
        </a>
      </div>
      <div v-if="isOnSite === true" class="icon">
        <a v-bind:href="onSiteURL" target="_blank">
          <onSite />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import GitHub from 'vue-material-design-icons/GithubBox.vue'
import onSite from 'vue-material-design-icons/Web.vue'

export default {
  name: 'card',
  components: {
    GitHub,
    onSite
  },
  props: {
    image: String,
    title: String,
    descr: String,
    github: Boolean,
    githubURL: String,
    isOnSite: Boolean,
    onSiteURL: String
  }
}
</script>

<style scoped lang="scss">
.card{
  width: 300px;
  height: 400px;
  border: solid 1px #254E58;
  margin: 35px 20px;
  border-radius: 2px;
  float: left;
  transition-duration: 0.2s;
  .image-div{
    height: 150px;
    overflow: hidden;
    img{
      width: 300px;
    }
  }
  &:hover{
    scale: 1.01;
    transition-duration: 0.2s;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  }
  h2{
    border-bottom: 1px solid #254E58;
    color: #88BDBC;
    text-align: left;
    text-indent: 20px;
    margin: 0 15px;
    padding: 20px 0 5px 0;
    text-transform: uppercase;
  }
  p{
    text-align: justify;
    text-justify: auto;
    font-size: 16px;
    text-indent: 15px;
    margin-left: 5px;
    line-height: 22px;
    margin-bottom: 0;
    padding-bottom: 0;
    height: 50px;
    padding: 0 10px 0 10px;
  }
  .link-card{
    margin-top: 85px;
    text-align: left;
    margin-left: 20px;
    .icon{
      display: inline-block;
      width: 50px;
      .material-design-icon__svg{
        font-size: 2.7em;
        color: #254E58;
      }
    }
  }
}
</style>