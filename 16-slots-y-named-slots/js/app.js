'use strict';

Vue.component('alerta', {
  props: ['tipo', 'posicion'],
  // template: '#alerta-template'
  template: `
          <section class="alerta" :class="[tipo, posicion]">
            <header class="alerta__header">
              <slot name="header">Soy un el HEADER</slot>
            </header>
            <div class="alerta__contenido">
              <slot>Contenido por default :P</slot>
            </div>
            <footer class="alerta__footer">
              <slot name="footer">Soy un FOOTER</slot>
            </footer>
          </section>`
});

new Vue({
  el: 'main',
  //  NOTA 1: Si nosotros queremos pasar desde data evaluando los valores de
  // las entradas de nuestras props, acudimos a asignarlas en un parametro dentro de nuestro
  // modelo de datos:
  // data: {
  //   posicionData: 'alerta--abajo-derecha',
  //   tipoData: 'alerta--exito'
  // }
});

