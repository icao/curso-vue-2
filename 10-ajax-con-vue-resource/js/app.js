
'use strict';

new Vue({
  el: 'main',
  mounted() {
    console.log('Instancia montada');
    this.cargarUsuarios();
  },
  data: {
    usuarios:[]
  },
  methods: {
    cargarUsuarios() {
      this.$http.get('https://randomuser.me/api/?results=500')
        .then((response) => {
          console.log(response);
          this.usuarios = response.body.results;
        });
    }
  }

  /**
   * vue-resource
   * 
   * Es un plugin de Vue.js con una colección de métodos y bindings (asados en el API promise)
   * para realizar ppeticiónes HTTP.
   * 
   * Como se ve en el ejemplo, tiene una similitud con el API fetch.
   * El uso de promesas nos permite gestionar el recurso de una forma más organizada.
   * 
   */

});