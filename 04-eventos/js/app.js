
'use strict';

const vm = new Vue({
  el: 'main',
  data: {
    nuevaTarea: null,
    tareas: [
      'Aprender Vue.js',
      'Aprender ES6',
      'Aprender CSS Grid'
    ]
  },
  methods: {
    agregarTarea() {
      // this, hace referencia a la instancia Vue
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea = null;
    }
  }
  // Las funciones que sera invocadas 
  // tienen que estar dentro de la instancia Vue
  // en el objeto de "methods"
});
