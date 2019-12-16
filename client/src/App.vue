<template>
  <div id="app">
    <tasks Task_Name="Complete Frontend" Due_Date="12/16/2019"/>
  </div>
</template>

<script>
import tasks from './components/task.vue'

export default {
  name: 'app',
  components: {
    tasks
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
