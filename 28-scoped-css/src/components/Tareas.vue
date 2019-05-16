<template>
  <div>
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
export default {
  name: 'Tareas',
  data() {
    return {
      tareas: [
        { actividad: 'Aprender Vuex', completado: true },
        { actividad: 'Aprender Router', completado: false },
        { actividad: 'Aprender Webpack + Vue', completado: false },
        { actividad: 'Aprender Firebase', completado: true },
        { actividad: 'Terminar este capitulo Vuex', completado: true },
        { actividad: 'Hacer ejercicio de nuevo', completado: false },
        { actividad: 'Ir al super a comprar', completado: false }
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

<style scoped>
div {
  background-color: palegreen;
  border-radius: 5px;
  padding: 2em;
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
}

ul li:hover,
ol li:hover {
  border: 1px solid #06ec79;
}
</style>
