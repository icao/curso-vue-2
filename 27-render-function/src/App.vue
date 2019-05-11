<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <RenderElement msg="Hola Componente usando Render" />
  </div>
</template>

<script>
import RenderElement from "./components/RenderElement.vue";

export default {
  name: "app",
  components: {
    RenderElement
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
