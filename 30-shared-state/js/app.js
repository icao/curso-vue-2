const usuario = {
  nombre: "Billy Mandy",
  edad: 35
};

/*
  Una forma de asegurar la actualización de los datos en varios componentes es hacer uso de los métodos que ya conocimos:
  Hacer un bus de transmisión de datos, el uso de eventos o en este caso hacer uso de una constante global, que funcione 
  para compartir el estado.
  Ya sea que la actualización se realice directamente en la constante global o en cada modelo de ñas instancias.
*/

new Vue({
  el: "#app1",
  data: {
    usuario
  }
});

new Vue({
  el: "#app2",
  data: {
    usuario
  }
});

/*
  Para estos problemas, Vue ha diseñado un patron, una arquitectura para manejar los estados
  conocido como Vuex.
  https://vuex.vuejs.org
*/
