<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>Titulo Principal</h2>
    <Tareas></Tareas>
  </div>
</template>

<script>
import Tareas from '@/components/Tareas'

export default {
  name: 'app',
  components: {
    Tareas
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
