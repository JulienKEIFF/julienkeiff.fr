<template>
  <div class="bubble">
    <div class="triangle"></div>
    {{descr}}
  </div>
</template>

<script>
export default {
  name: "infoBubble",
  props: ["descr"]
}
</script>

<style scoped lang="scss">
.bubble{
  padding: 7% 5%;
  background: var(--ligther-blue);
  box-shadow: 0.5vh 0.5vh 1vh rgba(0, 0, 0, 0.4);
  text-align: center;
  color: white;
  .triangle{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -2.5vh;
    width: 0;
    height: 0;
    border-top: 2vh solid transparent; 
    border-bottom: 2vh solid transparent;
    border-right: 2.5vh solid var(--ligther-blue);
  }
}

</style>