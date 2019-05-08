'use strict';

Vue.component('mis-tareas', {
  props: ['listado'],
  template: '#template-listado',
});

new Vue({
  el: "main",
  data: {
    tareas: [
      { actividad: "Bañarse", hora: "7am" },
      { actividad: "Desayunar", hora: "8am" },
      { actividad: "Hacer ejercicio", hora: "12pm" },
      { actividad: "Prepararse la comida", hora: "3pm" },
      { actividad: "Estudiar Vuejs", hora: "6pm" }
    ]
  }
});
