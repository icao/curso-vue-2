Vue.component('listado', {
  template: //html
    `
    <div>
      <h1 class="main_title">HOLA SOY UN COMPONENTE</h1>
    </div>
    `
});


new Vue({
  el: 'main',
  data: {
    lista: ['lol', 'hahaha', 'xD'],
    mensaje: 'Hello Nesting Components'
  }
});
