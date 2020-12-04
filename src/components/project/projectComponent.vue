<template>
  <div class="project-item">
    <div class="info-item">
      <div class="name">
        {{data.name}}
      </div>
      <img :src="getImgPath()" class="img" />
    </div>
    <div class="more" @click="open = !open" :class="open ? 'open' : 'close'">
      <icon :icon="open ? 'angle-up' : 'angle-down'" class="icon" />
    </div>

    <div class="plus" :class="open ? 'show' : 'hide'">
      <div class="plus-item">
        <icon :icon="['fab', 'github']" v-if="data.github" class="icon-plus" /> 
        <span class="info-plus" v-if="data.github" @click="goTo(data.github)">{{"Voir le Github"}}</span>
      </div>
      <div class="plus-item">
        <icon :icon="['fas', 'globe-europe']" v-if="data.web" class="icon-plus" /> 
        <span class="info-plus" v-if="data.web" @click="goTo(data.web)">{{"Voir sur le web"}}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'project-item',
  props:{
    data: Object,
  },
  data(){
    return{
      open: false,
      imgPath: "",
    }
  },
  methods:{
    getImgPath: function(){
      return require(`../../assets/img/${this.data.type}/${this.data.img}`)
    },
    goTo: function(path){
      window.open(path, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
  .project-item{
    position: relative;
    display: block;
    width: 20%;
    height: 50vh;
    cursor: pointer;
    margin-right: 5%;
    z-index: 0;
    margin-bottom: 3%;
    .info-item{
      position: relative;
      height: 100%;
      text-align: center;
      z-index: 2;
    }
    .name{
      display: flex;
      position: relative;
      top: 0;
      z-index: 1;
      background: var(--ligthest-blue);
      height: 10%;
      width: 80%;
      left: 10%;
      align-items: center;
      justify-content: center;
      border-radius: 15% 15% 15% 15% / 0% 0% 100% 100% ;
      font-size: 130%;

    }
    .img{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: 0;
    }
    .more{
      position: absolute;
      display: flex;
      justify-content: center;
      bottom: -5%;
      height: 3vw;
      width: 3vw;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      transition-duration: 0.2s;
      z-index: 2;
      background: var(--ligthest-blue);
    }
    .more.close{
      .icon{
        position: absolute;
        top: 15%;
        height: 80%;
        width: auto;
      }
    }
    .more.open{
      bottom: 0%;
      .icon{
        position: absolute;
        top: 7%;
        height: 80%;
        width: auto;
      }
    }
    .plus{
      position: absolute;
      top: 50%;
      height: 7vh;
      width: 100%;
      background: var(--ligthest-blue);
      transition-duration: 0.5s;
      display: flex;
      flex-direction: column;
    }
    .show{
      top: 100%;
      transition-duration: 0.5s;
    }
    .hide{
      opacity: 0;
    }
    .plus-item{
      display: flex;
      flex-direction: row;
      height: 45%;
      align-items: center;
      .icon-plus{
        width: 20%;
        height: 70%;
      }
      .info-plus{
        display: flex;
        align-items: center;
        height: 100%;
        margin-left: 0%;
        z-index: 10;
      }
      &:first-of-type{
        margin-top: 1%;
      }
    }
  }
</style>