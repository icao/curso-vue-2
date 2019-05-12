<!--
  Hay casos en los que vamos a querer renderear en nuestro componente, un elemento html customizado,
  en este caso ponemos ejemplos de tags, aunque podrian ser igual h1,h2,h3, y dependiendo
  de cierta condición o requerimientos para generar nuestros componentes. 
  Es ahí donde entra la función render de vue. Con render podemos crear elementos
  especificando el tipo de elemento a crear, su contenido, sus atributos, hasta 
  los eventos, condiciones y propiedades.
  Acontinuación vemos un ejemplo cencillo.
  Para mas información sobre el método render, consultar la documentación oficial de vue: 
  https://vuejs.org/v2/guide/render-function.html#ad
-->
<!--
<template>
  <div class="main">
    <h1>😄</h1>
    <section v-if="typeElement === 'section'">
      <slot></slot>
    </section>

    <nav v-if="typeElement === 'nav'">
      <slot></slot>
    </nav>

    <nav v-if="typeElement === 'header'">
      <slot></slot>
    </nav>

    <nav v-if="typeElement === 'footer'">
      <slot></slot>
    </nav>

    <nav v-if="typeElement === 'aside'">
      <slot></slot>
    </nav>
  </div>
</template>
-->

<script>
export default {
  name: "RenderElement",
  props: {
    typeElement: {
      type: String
    }
  },
  render(createElement) {
    return createElement("div", [
      createElement("h1", "😄"),
      createElement(this.typeElement, this.$slots.default)
    ]);
  }
};
</script>

<style>
h1 {
  font-size: 6em;
  margin: 0.3em;
}
.main {
  width: 100%;
  height: auto;
  border: 1px solid #3de475;
  border-radius: 5px;
  box-sizing: border-box;
}

section {
  width: auto;
  height: auto;
  background-color: #64cbfa;
  padding: 2em;
}

nav {
  width: auto;
  height: auto;
  background-color: #fade64;
  padding: 2em;
}

header {
  width: auto;
  height: auto;
  background-color: #fd3175;
  padding: 2em;
}
</style>
