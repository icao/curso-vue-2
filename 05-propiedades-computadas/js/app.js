
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
    // este metodo agrega un nuevo registro al array peliculas
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
    // Esta propiedad imprime un string al reves
    mensajeAlReves() {
      return this.mensaje.split('').reverse().join('');
    },
    // Esta propiedad filtra todas las peliculas nominadas
    peliculasOrdenadas() { 
      return this.peliculas.filter((pelicula) => pelicula.nominada);
    },
    // Esta propiedad ordena las peliculas por el parametro año
    peliculasPorAntiguedad() {
      return this.peliculas.sort((a, b) => a.año - b.año);
    }
  }
  
});
