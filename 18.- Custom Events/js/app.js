'use strict';

Vue.component("alerta", {
  props: ["tipo", "posicion"],
  template: '#alerta-template',
  methods: {
    ocultarAlerta() { 
      console.log('%c Ocultando 😜', 'color: orange; font-weight: bold;');
      // $emit nos ayuda a customizar un evento que sera emitido al padre.
      this.$emit('ocultar');
    },
    mostrarMensaje() { 
      console.log("%c HO HAY MENSAJE OCULTO 😛🤷🙈", "color: tomato; font-weight: bold; font-size: 2em; ");
    }
  }
});

new Vue({
  el: 'main',
  // El modelo habilita la aparicion del componente en sus 3 variantes
  // Valores que viven en la intancia Vue
  data: {
    mostrarExito: false,
    mostrarAdvertencia: false,
    mostrarError: false
  }
});

// En nuestro template tenemos un evento que sera invocado 
// y este a su vez emitira un evento custom al padre.
// <a href="#" @click="ocultarAlerta" > CERRAR</a>

// HTML COMPONENTE
// Nosotros especificamos el evento custom, en este caso: @ocultar="mostrarExito = false" 
// <alerta @ocultar="mostrarExito = false" v-show="mostrarExito" tipo = "alerta--exito" posicion = "alerta--arriba-derecha" >
// <alerta @[nombre_evento_custom]="[logica_evento_customizado]" >

// Donde:
//  @[nombre_evento_custom] : Es el nombre que nosotros establecemos, dentro
// del metodo que fue especificado en el evento click.
// En este caso el metodo 'ocultarAlerta" del componente, tiene
// como evento custom a 'ocultar' this.$emit('ocultar');

// [logica_evento_customizado] : Es el codigo que se ejecuta, puede ser
// simple codigo de una linea o tambien un evento mismo.

// De esta manera nosotros podemos emitir un evento al padre y este escuchara
// dicho evento, en el ejemplo le emitimos las propiedades que van a cerrar nuestra Alerta,
// mostrarExito = true, mostrarAdvertencia = true, mostrarError = true, estas propiedades
// se encuentran en el modelo de la instancia Vue (padre del componente).
