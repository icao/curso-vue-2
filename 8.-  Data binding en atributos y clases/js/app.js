'use strict';

const vm = new Vue({
  el: 'main',
  data: {
    tareas: [
      {
        titulo: 'Comprar leche',
        completado: false
      },
      {
        titulo: 'Comprar pasta de dientes',
        completado: false
      },
      {
        titulo: 'Comprar maletas',
        completado: false
      },
      {
        titulo: 'Comprar cereal',
        completado: false
      },
      {
        titulo: 'Comprar desodorante',
        completado: false
      }
    ]
  },
  methods: {
    completarTarea(tarea) {
      console.log('Tarea completada');
      tarea.completado = !tarea.completado;
    }
  },
  computed: {
    tareasCompletadas() {
      return this.tareas.filter((tarea) => tarea.completado);
    }
  }
});