/** 
 * Componente listado de tareas
 */
Vue.component('listado-tareas', {
  // props: ['tareas'],
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
      <hr>
    </div>
    `,
  data() {
    return {
      tareas: [
        'Finalizar Nesting Components',
        'Finalizar Dynamic Components',
        'Finalizar Custom imput Components',
        'Inicializar Capitulo de WORKFLOW con vue',
        'Comenzar con Vue CLI'
      ]
    }
  }
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
 * Componente que consume un array del padre para visualizar una biografia
 */
Vue.component('biografia', {
  props: ['imagen', 'nombre', 'email'],
  template: //html
    `
    <div>
      <section>
        <img :src="imagen" alt="imagen de perfil">
        <h2>{{nombre}}</h2>
        <h3>{{email}}</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam nulla accusantium animi commodi nesciunt totam reprehenderit dolorem veritatis pariatur, error inventore rem velit architecto iste harum minus impedit quis doloremque. </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae suscipit ratione quos earum!Vel sed adipisci error quos aut dignissimos voluptatibus itaque nobis non, inventore atque, alias, veritatis placeat distinctio ? </p>
      </section>
      <hr>
    </div>
    `
});


/**
 * Componente para visualizar direcion del usuario
 */
Vue.component('direccion', {
  props: {
    location: Object
  },
  template: //html
    `
    <div>
      <h2>Datos de contacto</h2>
      <h3>Direccion:</h3>
      <p>Calle: {{location.street}}</p>
      <p>Ciudad: {{location.city}}</p>
      <p>Estado: {{location.state}}</p>
      <p>C.P.: {{location.postcode}}</p>
      <hr>
    </div>
    `
});


/** 
 * Instancia de Vue principal, manda a obtener los datos para el modelo usuario
 */
new Vue({
  el: 'main',
  created() {
    console.log('Usuarios solicitados');
    this.montarUsuario();
  },
  data: {
    usuario: [],
    datos: {},
    nombre: null,
    email: null,
    imagen: null,
    direccion: {},
    // Esta propiedad define por defaul que componente se mostrara,
    // Usamos el nombre del componente con el que se registran al momento de crearse
    seleccionado: 'listado-tareas'
  },
  methods: {
    montarUsuario() {
      axios.get('https://randomuser.me/api/')
        .then(response => {
          this.usuario = response.data.results;
        })
        .then(() => {
          // Como es un API que nos devuelve un array de un solo objeto,
          // solo en este caso procedemos a una destructuracion, ya que el API de Random User, regresa un array de usuarios.
          // En el ejemplo solo usaremos un elemento, y nos adecuaremos al API.
          // En otro caso no se tendria que hacer este procedimiento, en vez de usar: this.usuario[0].picture.medium.
          const [datos] = this.usuario;
          this.datos = datos;
          // Aprovechamos para asignar valores del recurso consumido
          this.nombre = `${this.datos.name.title} ${this.datos.name.first} ${this.datos.name.last}`;
          this.email = this.datos.email;
          this.imagen = this.datos.picture.large;
          this.direccion = this.datos.location;
        });
    }
  }

});
