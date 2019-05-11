<template>
  <div class="hello">
    <h1>Mensaje recibido: {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
