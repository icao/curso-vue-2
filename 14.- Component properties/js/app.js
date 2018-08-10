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
      this.nombre = this.nombre.toUpperCase();
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
 * Un componente esta aislado del resto por lo que se necesita pasar información a él a travez de propiedades.
 * Las propiedades en este caso son pasadas desde el template.
 * Si estas son modificadas automaticamente los hijos se ven afectados.
 * Una restricción importante es que las propiedades jamás tienen que mutar "directamente dentro del componente", es decir, no tienen que modificarse.
 * 
 */

// Si nosotros intentamos modificar una propiedad, como en este caso:   this.nombre = this.nombre.toUpperCase();
// Vue nos notificara con un error de que la propiedad sera sobre escrita, no es buena idea porque
// el data flow es de arriba a abajo, de padre a hijo.
