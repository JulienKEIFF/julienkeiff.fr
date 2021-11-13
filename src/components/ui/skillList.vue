<template>
  <div>
    <div v-if="!isPortrait">
      <div v-for="(skill, i) in content" :key="i" class="h-20 flex my-2 py-2">
        <img :src="getImgPath(skill.logo)" class="w-2/12 h-5/12 object-scale-down object-center" />
        <div class="h-full flex items-center w-2/12 text-2xl">{{skill.title}}</div>

        <div class="bar-outline w-7/12 flex items-center self-center bg-gray-400 h-7 rounded-xl">
          <div :class="`bar-inline bg-gray-700 w-${skill.value}/12 h-full rounded-xl`"></div>
        </div>
      </div>
    </div>

  <div v-else>
    <div v-for="(skill, i) in content" :key="i" class="h-1/4 flex flex-col justify-center my-2 py-2">
      <div class="flex gap-4 mb-2 w-10/12 justify-center mx-auto">
        <img :src="getImgPath(skill.logo)" class="w-2/12 h-full object-scale-down object-center m-0" />
        <div class="h-full flex items-center self-center max-w-8/12 text-2xl">{{skill.title}}</div>
      </div>
      
      <div class="bar-outline w-10/12 flex items-center self-center bg-gray-400 h-5 rounded-xl">
        <div :class="`bar-inline bg-gray-700 w-${skill.value}/12 h-full rounded-xl`"></div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'skill list',
  props: ['content'],
  methods: {
    getImgPath: function(logo) {
      return require(`../../${logo}`);
    }
  },
  computed: {
    isPortrait() {
      return innerHeight > innerWidth;
    }
  }
}
</script>

<style>

</style>