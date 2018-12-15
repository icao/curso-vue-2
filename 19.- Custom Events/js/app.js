Vue.component('button-counter', {
  template: '#template-button-counter',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementarContador() { 
      this.counter += 1;
      // Emite un evento al metodo incrementarTotal del padre
      this.$emit('incrementar');
    }
  }
});

new Vue({
  el: 'main',
  data: {
    total: 0
  },
  methods: {
    incrementarTotal() { 
      this.total += 1
    }
  }
});