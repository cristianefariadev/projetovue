<template>
  <div id="app"> 
    <GithubIssues/>
  </div>
</template>

<script>
import GithubIssues from './components/GithubIssues.vue'

export default {
  name: 'App',
  components: {
    GithubIssues
  }
}
</script>

<style>
#app {
  
  margin-top: 60px;
}
</style>
