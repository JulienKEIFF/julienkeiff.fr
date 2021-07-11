<template>
  <div id="projects">
    <project-list />
  </div>
</template>

<script>
import projectList from '@/components/projectList'

export default {
  name: 'Home',
  components: { projectList }
}
</script>