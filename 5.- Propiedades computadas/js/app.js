
'use strict';

const vm = new Vue({
  el: 'main',
  data: {
    mensaje: 'Hola Vue.js!!! :D',
    nuevaPelicula: null,
    peliculas: [
      {
        titulo: 'Gigantic',
        nominada: true,
        director: 'Jaime Cameron',
        año: 1991
      },
      {
        titulo: 'Zombilandia',
        nominada: false,
        director: 'Franki Monster',
        año: 1960
      },
      {
        titulo: '777',
        nominada: true,
        director: 'James Bond',
        año: 2010
      }
    ]
  },
  methods: {
    agregarPelicula() {
      this.peliculas.unshift({
        titulo: this.nuevaPelicula,
        nominada: false,
        director: 'Jhon Doe',
        año: 3000
      });
      this.nuevaPelicula = null;
    }
  },
  computed: {
    mensajeAlReves() {
      return this.mensaje.split('').reverse().join('');
    }
  }
  
});
