
'use strict';

new Vue({
  el: 'main',
  mounted() {
    console.log('Instancia montada');
    this.cargarUsuarios();
  },
  data: {
    usuarios: []
  },
  methods: {
    cargarUsuarios() {
      axios.get('https://randomuser.me/api/?results=500')
        .then((response) => {
          console.log(response);
          this.usuarios = response.data.results;
        });
    }
  }


  /**
   * Axios
   * 
   * Axios es un cliente HTTP basado en Promesas para Javascript, 
   * el cual puede ser utilizado tanto en Front-end como en el Back-end con Nodejs. 
   * 
   * Utilizando Axios, es muy sencillo enviar peticiones a endpoints REST y realizar operaciones CRUD. 
   * Además, Axios puede ser utilizada desde una aplicación desarrollada con Javascript plano, 
   * al igual que utilizando un Framework como Vuejs. 
   * 
   * 
   */



});