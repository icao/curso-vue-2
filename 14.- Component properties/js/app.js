'use strict';

Vue.component('creador', {
  props: ['nombre', 'edad', 'programas'],
  mounted() {
    // Las propiedades que se crean desde el componente son accesibles desde 'this'.
    console.warn(this.nombre);
    console.warn(typeof this.edad);
    console.warn(typeof this.programas);
  },
  template: `<section>
              <h2>El creador es {{ nombre }}</h2>
              <button @click="cambiarProp">Cambiar Prop</button>
            </section>`,
  methods: {
    cambiarProp() {
      this.nombre = this.nombre.toUpperCase(); // Esto jamás tiene que hacerse.
    }
  }
});

new Vue({
  el: 'main',
  data: {
    creador: 'Juanito Banana'
  }
});

/**
 * PROPIEDADES DE LAS PROPS
 * Un componente esta aislado del resto por lo que se necesita pasar información a él a travez de propiedades.
 * Las propiedades en este caso son pasadas desde el template.
 * Si estas son modificadas automaticamente los hijos se ven afectados.
 * Una restricción importante es que las propiedades jamás tienen que mutar "directamente dentro del componente", 
 * es decir, no tienen que modificarse.
 */

/**
 * Si nosotros intentamos modificar una propiedad, como en este caso:
 * this.nombre = this.nombre.toUpperCase();
 * Vue nos notificara con un error de que la propiedad sera sobre escrita, 
 * Esto no es una buena practica, ya que se contradice el data flow es de arriba a abajo, de padre a hijo.
 * Culquier tipo de transformación directamente a las PROP's esta phohibido.
 * 
 * Hay usualmente dos casos en los que puede ser tentador modificar una propiedad:
 * 1.- La propiedad es utilizada solo para dar un valor inicial, el componente hijo solo quiere utilizarla como una propiedad de datos local luego;
 * 2.- La propiedad es pasada como un valor crudo que luego necesita ser transformado.
 * 
 * Las respuestas apropiadas a estos casos de uso son:
 * 
 * 1.- Define una propiedad de datos local que utilice el valor inicial de la propiedad como su valor inicial:
 * props: ['initialCounter'],
 * data: function () {
 *  return { counter: this.initialCounter }  // Asociando el valor de la Prop a counter
 * }
 * 
 * 2.- Define una propiedad computada que sea calculada en base al valor de la propiedad pasada:
 * 
 * props: ['size'],
 * computed: {
 *  normalizedSize: function () { // Propiedad computada para transformar el valor de la prop.
 *    return this.size.trim().toLowerCase()
 *  }
 * }
 */
