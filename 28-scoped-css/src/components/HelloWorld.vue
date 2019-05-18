<template>
  <div class="mensaje__bg">
    <h2 v-text="mensaje"></h2>
    <h2>Mensaje Estatico</h2>
  </div>
</template>

<script>
export default {
  props: {
    mensaje: {
      type: String
    }
  }
}
</script>

<!-- Se pueden implementar mas de una estiqueta 'style' dentro del single file component -->
<style>
/* Estilos globales */
/* Este estilo se aplica hasta en el padre, porque se situa a nivel global de la webapp */
h2 {
  color: #ff9216;
}
</style>

<style scoped>
/* Estilos locales - Solo aplican al componente */
.mensaje__bg {
  width: auto;
  height: auto;
  border: 5px solid #00ffb7;
  background-color: #00ffb7;
}

h2 {
  color: #f72d5c;
  text-transform: uppercase;
}
</style>
