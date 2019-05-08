/** 
 * Componente listado de tareas
*/
Vue.component('listado-tareas', {
  props: ['tareas'],
  template: //html 
    `
    <div>
      <section class="contenedor__tareas">
        <h1><slot>Hi..!</slot></h1>
        <!-- Componente Anidado - Tarea -->
        <ol>
          <tarea v-for="tarea in tareas" :key="tarea" :actividad="tarea"></tarea>
        </ol>
      </section>
      
    </div>
    `
});

/** 
 * Componente que visualiza las tareas en individual
*/
Vue.component('tarea', {
  props: ['actividad'],
  template: //html
    `
    <li class="tarea__actividad">{{actividad}}</li>
    `
});

/** 
 * Instancia de Vue principal
*/
new Vue({
  el: 'main',
  data: {
    tareas: [
      'Finalizar Nesting Components',
      'Finalizar Dynamic Components',
      'Finalizar Custom imput Components',
      'Inicializar Capitulo de WORKFLOW con vue',
      'Comenzar con Vue CLI'
    ]
  }
});


/**
 * El uso de componentes anidados es como tratar un elemento mas, solo con la diferencia de
 * que nuestros componentes necesitan ser alimentados por datos, como es el caso de este ejemplo.
 * Tenemos un componente que tiene la informacion para ser rendereada -listado-tareas-
 * y adicional anidado otro componente que solo despliega el elemento -tarea-
 * 
 * La estructura seria:
 * Instancia Vue
 *  - Componente listado-tareas
 *    - Componente tarea
 * 
 * Se observa que el componente -tarea- es utilizado como un elemento 'li', y la propiedad
 * actividad que alimenta al componente, es obtenida de la propiedad que a su vez alimenta la lista.
 */