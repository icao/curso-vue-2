<template>
  <div>
    <HelloWorld mensaje="Hola Mundo"></HelloWorld>
    <h2>Tareas Pendientes</h2>
    <ul v-for="(tarea, index) in tareasPendientes" :key="tarea.actividad">
      <li @click="actualizarTarea(tarea)">
        {{ index + 1 }}
        {{ tarea.actividad }}
      </li>
    </ul>
    <h2>Tareas Hechas</h2>
    <ol v-for="(tarea, index) in tareasHechas" :key="tarea.actividad">
      <li @click="actualizarTarea(tarea)">
        {{ index + 1 }}
        {{ tarea.actividad }}
      </li>
    </ol>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Tareas',
  components: {
    HelloWorld
  },
  data() {
    return {
      tareas: [
        { actividad: 'Aprender Vuex', completado: true },
        { actividad: 'Aprender Router', completado: false },
        { actividad: 'Aprender Webpack + Vue', completado: false },
        { actividad: 'Aprender Firebase', completado: true },
        { actividad: 'Terminar este capitulo Vuex', completado: true },
        { actividad: 'Hacer ejercicio de nuevo', completado: false },
        { actividad: 'Ir al super a comprar', completado: false },
        { actividad: 'Planear viaje a Colombia', completado: false }
      ]
    }
  },
  computed: {
    tareasHechas() {
      return this.tareas.filter(tarea => tarea.completado === true)
    },
    tareasPendientes() {
      return this.tareas.filter(tarea => tarea.completado === false)
    }
  },
  methods: {
    actualizarTarea(tarea) {
      tarea.completado = !tarea.completado
    }
  }
}
</script>

<!--
Para limitar los estilos del componente, hacemos uso del atributo 'sccoped'. 
Esto hace que el padre no interfiera heredando sus estilos y afectando al componente.
Al usar 'scoped' garantizamos la encapsulacion del componente.
-->
<style scoped>
div {
  background-color: palegreen;
  border-radius: 5px;
  padding: 2em;
}

h2 {
  color: #7700ff;
}

ul,
ol {
  padding: 0;
}

ul li,
ol li {
  text-align: start;
  cursor: pointer;
  padding: 0.1em 0.1em;
  font-size: 1.05em;
  list-style: none;
  border: 1px solid transparent;
  font-weight: bolder;
}

ul li:hover,
ol li:hover {
  border: 1px solid #06ec79;
}
</style>
