<template>
  <div id="info-band">
    <div class="display-info outter">

      <div class="item" v-for="item in nbItem" :key="item">

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg">
          <polygon style="fill:var(--dark-blue);" points="136.737609507049,188.692435121084 63.2623904929514,188.692435121084 11.3075648789165,136.737609507049 11.3075648789165,63.2623904929514 63.2623904929513,11.3075648789165 136.737609507049,11.3075648789165 188.692435121084,63.2623904929513 188.692435121084,136.737609507049" />
        </svg>

        <div class="logo">  
          <icon :icon="logo[item-1]" class="icon" />
        </div>

        <div class="text-logo">
          <pre>{{info[item-1] || repoLength}}</pre>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'infoBand',
  data(){
    return{
      repoLength: "",
      nbItem: 3,
      logo: [ ['fa','tv'], ['fas','cogs'], ['fab','github'] ],
      info: [ "Développement\nFront", "Développement\nBack" ]
    }
  },
  mounted: function(){
    this.axios.get("https://api.github.com/users/JulienKEIFF/repos").then(resp=>{
      this.repoLength = "Repository publique\nGithub: " + resp.data.length
    })
  }
}
</script>

<style scoped lang="scss">
  #info-band{
    height: 50vh;
    width: 100vw;
    background: var(--ligther-blue);
    .display-info{
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      color: white;
      font-size: 2em;
      .item{
        position: relative;
        height: 25vh;
        width: 30%;
        .svg{
          position: relative;
          display: block;
          left: 50%;
          transform: translateX(-50%);
          height: auto;
          width: 40%;
          height: 80%;
          filter: drop-shadow( 1vh 1vh 1vh rgba(0, 0, 0, .7));
        }
        .logo{
          position: absolute;
          top: 22%;
          left: 50%;
          transform: translateX(-50%);
          height: 35%;
          .icon{
            height: 100%;
            width: auto;
          }
        }
        .text-logo{
          text-align: center;
          margin-top: 3%;
          filter: drop-shadow( 1vh 1vh 1vh rgba(0, 0, 0, .7));
        }
      }
    }
  }
</style>