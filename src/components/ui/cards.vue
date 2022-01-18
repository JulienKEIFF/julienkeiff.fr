<template>
  <div class="group relative w-full lg:w-gap justify-center h-96 bg-gray-700 rounded-2xl overflow-hidden">
    <div class="relative title flex flex-wrap xl:flex-nowrap z-10 bg-gray-700 justify-between">
      <h1 class="text-2xl w-full xl:w-2/3 font-bold py-2 px-4" :class="!content.link ? 'xl:w-11/12' : ''">{{ content.name }}</h1>
      <div class="link flex gap-4 justify-center align-middle self-center xl:w-1/3 px-6" :class="!content.link ? 'xl:w-1/12' : ''">
        <a :href="content.github" target="_blank"><unicon name="github-alt" fill="white"></unicon></a>
        <a :href="content.link" v-if="content.link" target="_blank"><unicon name="link-h" fill="white"></unicon></a>
      </div>
    </div>
    <div class="absolute transition-all duration-500 group-hover:bottom-0 -bottom-1/3 h-1/3 mt-4 py-2 px-4 z-10 justify-center text-center min-w-full text-lg xl:text-xl">{{ content.description }}</div>
    <img v-if="content.image" :src="'https://panel.julienkeiff.fr' + content.image.url" class="absolute top-0 z-0 group-hover:top-14 group-hover:opacity-20 transition-all duration-500 rounded-2xl rounded-t-none object-cover h-full w-full" />
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['content'],
}
</script>