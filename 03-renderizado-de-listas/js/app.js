
'use strict';

const vm = new Vue({
  el: 'main',
  data: {
    dias: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
    personas: [
      { nombre: 'Juan', nacionalidad: 'mexicano' },
      { nombre: 'Carlos', nacionalidad: 'colombiano' },
      { nombre: 'Chepe', nacionalidad: 'argentino' },
      { nombre: 'Riverinho', nacionalidad: 'brasileño' }
    ],
    perro: {
      nombre: 'solobino',
      raza: 'Pastor Belga',
      pedigree: 'Sí'
    }
  }
});
