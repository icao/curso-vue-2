/** 
 * Ejemplo de componente tratando de usar vmodel
*/
Vue.component('contrasena-vmodel', {
  props: ['password'],
  template: //html
    `
    <input v-model="password">
    `
});


/** 
 * Ejemplo de componente con v-model
 * Vue especifica en la documentacion especifica  que para que 
 * realmente funcione, el input dentro del componente debe:
 * 1.- Enlazar el ATRIBUTO value a un valor de la PROP.
 * 2.- El input, emita su propio evento de entrada personalizado
 * con el nuevo valor.
 * Acontinuacion el ejemplo.
*/
Vue.component('custom-input', {
  props: ['value'],
  template: //html
  `
    <input 
    :value="value" 
    @input="$emit('input', $event.target.value)">
  `
});
// Ahora v-model debería funcionar perfectamente con este componente:
// <custom-input v-model="searchText"> </custom-input>


/** 
 * 
 * Ejemplo del input dentro de un componente de la manera correcta
*/

// Para hacer los ejemplos con v-model y descomponiendo v-model,
// reemplazar el input por el siguiente:
// @input="$emit('input', $event.target.value)" >
Vue.component('contrasena-validation', {
  props: ['password'],
  template: //html 
    `
    <!--NOTA: Para no mmutar el estado de la propiedad, ejecutamos un evento al cual le pasamos la contrasena -->
    <input 
    :value="password" 
    @input="comprobarContrasena($event.target.value)" 
    ref="pass">
    `,
  methods: {
    comprobarContrasena(value) {
      console.log('%c Comprobando contrasena 🖥️ 🔍', 'color: cyan; font-weight: bold;');
      if (this.novalidas.includes(value)) {
        console.warn('CONTRASENA NO VALIDA, INTRIDUCE OTRA');
        this.$refs.pass.value = value = '';
      }

      // Emitimos el evento para actualizar el valor de nuestro input
      this.$emit('input', value);
    }
  },
  data() { 
    return {
      novalidas: ['admin', 'password', 'root', 'contrasena']
    }
  }
});
/*
IMPORTANTE:
Si en nuestro template del componente al atributo ":value", le asignamos una propiedad
especificamente llamada "value", no es necesario especificar en la instancia del componente desde el HTML, 
el valor de la propiedad.
  EJEMPLO:
  props: ['password'],
  template:  
    `
    <input 
    :value="password" 
    @input="comprobarContrasena($event.target.value)" >
    `,

    En el HTML :
    <contrasena-validation v-model="contrasenaComponent"></contrasena-validation>
*/


/**
 * Instancia de Vue principal
 */
new Vue({
  el: 'main',
  data: {
    contrasenaInput: 'Ramona123',
    contrasenaVmodel: 'Ramona987',
    contrasenaValue: 'Ramona_123456789',
    contrasenaCustomInput: 'Ramona_654',
    contrasenaComponent: 'Ramona.456'
  }
});
