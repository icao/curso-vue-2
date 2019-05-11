<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <section>
      <small>Componente HelloWorld</small>
      <HelloWorld msg="enviado al componente hello world"/>
    </section>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
section {
  border: 1px solid #42b983;
  border-radius: 5px;
}
</style>
