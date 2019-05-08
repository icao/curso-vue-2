/** 
 * Componente para obtener los usuarios
*/
Vue.component('lista-usuarios', {
  template: //html
    `
    <div>
      <section class="header">
        <slot></slot>
        <input type="text" placeholder="Filtrar Usuario" v-model="busqueda" class="input__finder">
      </section>
      <section class="resultado">
        <!--Anidacion de componente usuario-->
        <usuario :datos="usuario" v-for="usuario in usuariosFiltrados" :key="usuario.id"></usuario>
      </section>
    </div>
    `,
  created() {
    axios.get('https://randomuser.me/api/?results=300')
      .then(response => {
        const LISTADO = response.data.results.map(usuario => { 
          return {
            nombre: `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`,
            correo: usuario.email,
            celular: usuario.cell,
            foto: usuario.picture.large,
            id: usuario.login.md5
          }
        });

        this.usuarios = LISTADO;
        
      });
  },
  data() { 
    return {
      usuarios: [],
      busqueda: ''
    }
  },
  computed: {
    usuariosFiltrados() {
      return this.usuarios.filter(usuario => usuario.nombre.includes(this.busqueda));
    }
  }
});
// NOTA: created() se ejecuta solo cuando se crea el componente, mounted() cuando se renderiza, 
// conviene usar created en etse caso para no mandar a llamar al a API a cada rato.


/**
 * Componente que visualiza los datos de un usuario
 */
Vue.component('usuario', {
  props: ['datos'],
  template: //html
    `
      <div class="resultado__elemento">
        <img :src="datos.foto" :alt="datos.nombre" class="foto__resultado">
        <div class="contenedor__datos">
          <h2 class="dato__nombre">{{datos.nombre}}</h2>
          <small>{{datos.correo}}</small>
          <p>{{datos.celular}}</p>
        </div>
      </div>
    `,

});

new Vue({
  el: 'main',
});