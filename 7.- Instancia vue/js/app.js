
'use strict';

/*----------------------INSTANCIA 1---------------------- */
// La instancia vue une la logica del negocio con el DOM
// Entendiendo logica de negocio como: el, data, methods, computed
const vm1 = new Vue({
  // Propiedad 'el', es el punto de montaje
  el: 'main',
  // Propiedades del modelo
  data: {
    mensaje: 'Hola instancia 1'
  },
  beforeUpdate() {
    console.log('Before update: ', this.mensaje);
  },
  updated() {
    console.log('Updated:', this.mensaje);    
  },

  // Metodos que se ocuparan en la instancia(manipular o muestran el modelo)
  methods: {
    alReves() {
      this.mensaje = this.mensaje.split('').reverse().join('');
      
      // Accediendo a la instancia vm2 desde la vm1
      // vm2.mensaje = 'Hola desde instancia 1';
    }
  },
  // Metodos para modificar el modelo y representar en la vista de un modo diferente
  // sin intervenir en el DOM
  computed: {
    mensajeMayusculas() {
      return this.mensaje.toUpperCase();
    }
  }
});

/*----------------------INSTANCIA 2---------------------- */
const vm2 = new Vue({
  el: '#app',
  data: {
    mensaje: 'Hola instancia 2'
  }
});

/**
 * Dentro del ciclo de vida de la instancia de Vue(),
 * tenemos varios métodos que se ejecutan,
 * para ver mas acerca de estos métodos, visitar la documentación oficial
 * de Vue.js
 * 
 * Para ejecutar estos métodos se ponen directamente en la raíz de la 
 * instancia, en este caso añadiremos beforeUpdate() y updated()
 */