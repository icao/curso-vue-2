'use strict';

Vue.component('mis-tareas', {
  template: `<h1>Hola Scoped Slots</h1>`
});

new Vue({
  el: 'main',
  data: {
    mensaje: 'Hola mundo'
  }
});