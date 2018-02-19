
'use strict';
// Si se quiere usar el método filter() de vue, se tiene que 
// declarar antes de la instancia vue.
Vue.filter('uppercase', (valor) => valor.toUpperCase());

const vm = new Vue({
  el: 'main',
  data: {
    busqueda: '',
    puntuacionMinima: 6,
    juegos: [
      
      {
        titulo: 'Assassins Creed',
        genero: 'Acción',
        puntuacion: 8
      },
      {
        titulo: 'The Witcher 3',
        genero: 'Rol',
        puntuacion: 9
      },
      {
        titulo: 'Paladins',
        genero: 'Free to play',
        puntuacion: 5
      },
      {
        titulo: 'Halo',
        genero: 'FPS',
        puntuacion: 10
      }
    ]
  },
  computed: {
    // Filtro por propiedades
    mejoresJuegos() { 
      return this.juegos.filter((juego) => juego.puntuacion >= this.puntuacionMinima);
    },
    // Filtro por coincidencia en propiedades
    buscarJuego() {
      return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
    }
  }
});