<template>
  <div class="project-item">
    <div class="info-item" @mouseover="viewBubble = true" @mouseleave="viewBubble = false">
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

  <transition name="fade" mode="out-in">
    <bubble class="bubble-info" :descr="data.descr" v-if="viewBubble && data.descr" />
  </transition>

  </div>
</template>

<script>
import bubble from './hoverBubble'

export default {
  name: 'project-item',
  components: {
    bubble
  },
  props:{
    data: Object,
  },
  data(){
    return{
      open: false,
      imgPath: "",
      viewBubble: false
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
      background: var(--ligther-blue);
      height: 10%;
      width: 80%;
      left: 10%;
      align-items: center;
      justify-content: center;
      border-radius: 15% 15% 15% 15% / 0% 0% 100% 100% ;
      font-size: 130%;
      color: #ececec;
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
      transition-duration: 0.4s;
      z-index: 2;
      background: var(--ligther-blue);
      color: white;
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
      bottom: 4%;
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
      color: white;
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
    .bubble-info{
      position: absolute;
      top: 20%;
      left: 110%;
      width: 50%;
      z-index: 200;
      overflow: visible;
    }
  }


  .fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>