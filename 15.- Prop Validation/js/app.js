'use strict';
Vue.component('candidato', {
  // props: ['nombre', 'correo', 'imagen', 'mobil'],
  props: {
    nombre: {
      type: String,
      required: true
    },
    edad: {
      type: Number
    },
    correo: {
      type: String
    },
    imagen: {
      type: String
    },
    mobil: {
      type: [String, Number]
    }
  },
  template: '#candidato-template'
});

new Vue({
  el: 'main',
  mounted() {
    this.obtenerCandidatos();
  },
  data: {
    candidatos: []
  },
  methods: {
    obtenerCandidatos() {
      axios.get('https://randomuser.me/api/?results=10')
        .then((response) => {
          this.candidatos = response.data.results;
        });
    }
  }
});
  
/**
 * Validación de propiedades.
 * 
 * Es posible especificar en un componente los tipos de datos de entrada.
 * Si no se cumple el requerimiento, Vue emitirá advertencias.
 * Esto es útil cuando se estan creando componentes con la intención de ser utilizados por otros.
 * 
 * En lugar de defunir un arreglo de cadenas de texto, se puede usar un objeto 
 * con los requerimientos(criterios) de validación.
 * 
 */

 /**
  * Ejemplo de objeto con requerimientos de validación:
  * 
  */
// Vue.component('example', {
//   props: {
      // verificación de tipo básica (`null` significa que acepta cualquier tipo)
//     propA: Number,
      // múltiples tipos posibles
//     propB: [String, Number],
      // cadena de texto requerida
//     propC: {
//       type: String,
//       required: true
//     },
      // un número con valor por defecto
//     propD: {
//       type: Number,
//       default: 100
//     },
      // Los valores por defecto de objectos/arreglos deben ser devueltos
      // desde una función fábrica
//     propE: {
//       type: Object,
//       default: function () {
//         return { message: 'hello' }
//       }
//     },
      // función de validación personalizada
//     propF: {
//       validator: function (value) {
//         return value > 10
//       }
//     }
//   }
// });

/**
 * El type puede ser uno de los siguientes constructores nativos:
 * String
 * Number
 * Boolean
 * Function
 * Object
 * Array
 * Además, type puede ser una función constructora personalizada 
 * y la verificación será hecha con instanceof. ==> Revisar la documentación oficial
 * https://es-vuejs.github.io/vuejs.org/v2/guide/components.html#Pasando-datos-a-traves-de-propiedades
 */

 /**
  * En las validaciones tambien se pueden especificar si las props son requeridas obligatoriamente
  * Esto especificando mediante un parametro boleano llamado require:
  */
  // propC: {
  //       type: String,
  //       required: true
  //     },


/**
 * Tambien se pueden especificar valores por default en el caso de que no se especifiquen esas propiedades,
 * se asignara un valor por defecto.
 * Obviamente no podria ser required, porque es caeriamos en ambiguedad, ya que es un campo opcional por default.
 * Esto especificando mediante un parametro(Cualquier valor y objetos) llamado default:
 */
  // propD: {
  //       type: Number,
  //       default: 100
  //     },