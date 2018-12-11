'use strict';

Vue.component("alerta", {
  props: ["tipo", "posicion"],
  // template: '#alerta-template'
  template: `
          <section class="alerta" :class="[tipo, posicion]">
            <header class="alerta__header">
            <a href="#" @click="ocultarAlerta">Cerrar</a>
              <slot name="header">Soy un el HEADER</slot>
            </header>
            <div class="alerta__contenido">
              <slot>Contenido por default :P</slot>
            </div>
            <footer class="alerta__footer">
              <slot name="footer">Soy un FOOTER</slot>
            </footer>
          </section>`,
  methods: {
    ocultarAlerta() { 
      console.log('%c Ocultando 😜', 'color: orange; font-weight: bold;');
      this.$emit('ocultar');
    }
  }
});

new Vue({
  el: 'main',
  data: {
    mostrarExito: false,
    mostrarAdvertencia: false,
    mostrarError: false
  }
});
