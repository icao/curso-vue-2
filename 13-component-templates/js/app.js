'use strict'; 

Vue.component('elegir-ganador', {
  props: ['listado'],
  template: `<section>
            <h2 v-if="ganador">El ganador es {{ ganador }}</h2>
            <template v-else="!ganador">
              <ul>
                <li v-for="persona in listado">{{persona}}</li>
              </ul>
            </template>
            <button @click="elegirGanador">Escoger Ganador</button>
            </section>`,
  methods: {
    elegirGanador() {
      let cantidad = this.participantes.length;
      let indice = Math.floor((Math.random() * cantidad));
      this.ganador = this.participantes[indice];
    }
  },
  // Un componente tiene su propio modelo de datos, en este caso las props son asignadas al
  // parametro 'participantes', de nuestro modelo.
  // NOTA: Al tener en cada componente un ambito de data(), ya no comparte el modelo con la 
  // Instancia de Vue.
  // Se asignan las props a nuestro modelo ya que existe un principio que dice que las props 
  // jamas tienen que mutar, se pueden modificar solo si se asignan al modelo del componente.
  data() {
    return {
      ganador: false,
      participantes: this.listado
    };
  }
});

new Vue({
  el: 'main',
  data: {
    personas: ['Juan', 'Ruperto', 'Pedro', 'Javier', 'Marcos', 'Ramona']
  }
}); 


/**
 * Una forma de tener el template de nuestro componente es declarandolo dentro del mismo,
 * haciendo uso de las template strings de ES& en el parametro template.
 */

// props: ['listado'],
// template: `<section>
//           <h2 v-if="ganador">El ganador es {{ ganador }}</h2>
//           <template v-else="!ganador">
//             <ul>
//               <li v-for="persona in listado">{{persona}}</li>
//             </ul>
//             <button @click="elegirGanador">Escoger Ganador</button>
//           </template>
//           </section>`,


/**
 * Otro caso para sacar el template y dejarlo en otra parte, en este caso en el index html,
 * se puede hacer referencia mediante un indentificador.
 * 
 * El template puede ser declarado como: inline-template; Etiquetas: template, script.
 */

// template: '#elegir-ganador-template',
