/**
 * FILTRO CURRENCY
 */
Vue.filter('currency', value => value.toFixed(2));

/** 
 * BUS PARA TRANSFERENCIA DE DATOS
 * El bus actua como un canal en el cual se transmite la información,
 * aprovechando las caracteristicas de una instancia.
 */
const EVENT_BUS = new Vue();

/**
 * Componente lista-productos
 */
Vue.component('lista-productos', {
  props: ['productos'],
  template: '#template-lista-productos',
  methods: {
    quitarProducto(precio) {
      console.log(`%c Quitando Producto ${precio}`, 'color: tomato; font-weight: bold;');
      // Emitiendo evento 'quitar' con los datos al bus EVENT_BUS
      EVENT_BUS.$emit('quitar', precio);
    },
    agregarProducto(precio) {
      console.log(`%c Agregando Producto ${precio}`, 'color: green; font-weight: bold;');
      // Emitiendo evento 'agregar' con los datos al bus EVENT_BUS
      EVENT_BUS.$emit('agregar', precio);
    }
  }
});

/**
 * Componente carrito-compra-total
 */
Vue.component('carrito-compra-total', {
  template: '#template-carrito-compra',
  data() {
    return {
      costoTotal: 0,
      cantidadProductos: 0
    };
  },
  created() {
    // Escuchando evento 'quitar' 
    EVENT_BUS.$on('quitar', precio => {
      console.log('Q', precio);
      if (this.costoTotal > 0) {
        this.costoTotal -= precio;
        this.cantidadProductos -= 1;
      }

    });
    // Escuchando evento 'agregar'
    EVENT_BUS.$on('agregar', precio => {
      console.log('A', precio);
      if (this.costoTotal >= 0) {
        this.costoTotal += precio;
        this.cantidadProductos += 1;
      }
    });
  }
});


/**
 * Instancia principal Vue
 */
new Vue({
  el: 'main',
  data: {
    productos: [{
        nombre: 'Monitor 15 pulgadas',
        precio: 500
      },
      {
        nombre: 'Iphone',
        precio: 8800
      },
      {
        nombre: 'Mouse',
        precio: 30
      },
      {
        nombre: 'Escritorio Ejecutivo',
        precio: 3678
      },
      {
        nombre: 'Disco Estado Solido 1tb',
        precio: 450
      }
    ]
  }
});


/** 
 * Para comunicar dos componentes, una manera sin usar estados ni una arquitectura vuex
 * es creando un canal de comunicacion entre los dos, el cual solo escucharán los componentes
 * involucrados. Esto se hace creando un bus de comunicacion entre estos.
 * Un bus de comunicación es creado como una instancia mas de vue:
 * const EVENT_BUS = new Vue();
 * 
 * Para desencadenar un evento, lo hacemos de la misma forma de siempre, pero NO haciendo referencia a
 * la instancia 'this', en sustitución usaremos el bus creado.
 * EVENT_BUS.$emit('quitar', precio);
 * 
 * Para escuchar el evento que se esta mandando, usamos el método '$on', que nos 
 * sirve para cachar dicho evento.
 * EVENT_BUS.$on('quitar', (value) => {});
 *   
 * En el ejemplo lo recibimos el evento y adicional ejecutamos una funcion anonima
 * con una arrow function y usamos el parametro de entrada para hacer uso de el.
 * Esto lo montamos en método 'created()' del ciclo de vida. 
 * created() {
    EVENT_BUS.$on('quitar', precio => {
      if (this.costoTotal > 0) {
        this.costoTotal -= precio;
        this.cantidadProductos -= 1;
      }
    });
  }
 */