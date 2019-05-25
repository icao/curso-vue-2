<template>
  <div class="hello">
    <h1 :class="{ [$style.main_title]: mainTitle }">{{ msg }}</h1>
    <button :class="$style.button">Soy un boton</button>
    <!-- Al hacer uso de '$style' accedemos a la lista de propiedades(clases) disponibles -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      mainTitle: true
    }
  }
}
</script>

<style module>
.main_title {
  text-transform: capitalize;
  margin: 40px 0 0;
  text-decoration: underline;
}

.button {
  /* Con composes podemos hacer uso de importacion de archivos css */
  /* composes: [NOMBRE_CLASE a usar] from '[RUTA_FUENTE]' */
  composes: button from '@/assets/button.css';
  color: #004e00;
  text-transform: uppercase;
  font-size: 1em;
}
</style>
<!-- 
  Aparte de usar los atributos como 'scope' para aislar el css de nuestro componente únicamente aplicado al mismo, 
  tenemos una herramienta poderosa para usar css dinamico, esto gracias a CSS Modules. 
  
  Con CSS Modules, podemos usar el mismo código en otras partes, no importándonos también las metodologías como BEM, etc.  
  La diferencia es que podemos tener un archivo .css con una clase y pueda ser usada por varios componentes, al momento 
  de compilar el código del single file component, webpack con el vue-loader nos asigna un nombre distinto inyectando un hash en
  vez de un nombre asignado por nosotros.  
  
  Podemos tener una clase .button en un archivo externo.  
  Si importamos este archivo en varios componentes y lo usamos directamente como .button, y haciendo uso del atributo 'module'  
  Como resultado de la compilación nos generara cada componente con los mismo estilos, pero con diferente nombre, un hash único. 

  Resumen:
  - Los "Módulos CSS" nos permite encapsular las reglas de estilos renombrando o namespacing (clasificando) los nombres de las clases,minimizando los choques en la especificidad del selector a medida que crece la base de código.
  - Esto también nos permite escribir los nombres de las clases más cómodamente en lugar de atenernos a una metodología en particular.
  - Por último, como las reglas de estilo se acoplan a cada componente, los estilos también se eliminarán cuando ya no utilices el componente.
-->

<!-- 
  NOTA: 
  Mas Info sobre Modulos CSS: 
  https://webdesign.tutsplus.com/es/tutorials/solve-your-specificity-headaches-with-css-modules--cms-28973
-->
