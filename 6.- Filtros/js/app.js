
'use strict';

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
    mejoresJuegos() { 
      return this.juegos.filter((juego) => juego.puntuacion >= this.puntuacionMinima);
    },
    buscarJuego() {
      return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
    }
  }
});