
'use strict';

Vue.component('mis-tareas', {
  //No se declaran propiedades, porque busca la data dentro del modelo
  template: `<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>`,
  mounted() { 
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        this.tareas = response.data;
      });
  },
  // Funcion data(): Una nueva instancia de data dentro del componente.
  data() {
    // El componente busca la fuente de datos ya desde dentro
    return {
      tareas: []
    }
  }
});


new Vue({
  el: 'main'
});


/**
 * Cuandose usan componentes, la forma de declarar el modelo cambia,
 * en ves de tener un objeto mas como propiedad dentro de la instancia Vue,
 * se declara dentro del componente como una función.
 * 
 * Los componentes tienen las mismas propiedades que la instancia Vue,
 * por lo que igual pueden ser declaradas dentro de un componente.
 * 
 * Ahora el modelo de datos es unicamente del componente,
 * el data ya no es el mismo que el de la instancia de vue.
 */


// ---------------------------------------------------------------------------

/**
 * Un oomponente puede ser con entradas dinamicas usando la instancia de Vue,
 * aunque no es del todo una buena forma de tener a nuestros componentes.
 * Ejemplo:  
 */

// Vue.component('mis-tareas', {
//   props: ['tareas'],
//   template: `<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>`
// });
// // Este compoenente es Agnostico, no importa cual sea el listado de entrada de tareas

// new Vue({
//   el: 'main',
//   mounted() { 
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//       .then((response) => {
//         this.tareasAjax = response.data;
//       });
//   },
//   data: {
//     tareasAjax: [],
//     tareasLocales: [
//       {title:'Hacer la compra'},
//       {title:'Ir al gimnasio'},
//       {title:'Estudiar Vue haciendo Deep Work'}
//     ]
//   }
// });