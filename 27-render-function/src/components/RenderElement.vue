<template>
  <div>
    <h1>😄</h1>
    <section>
      <h2>{{ msg }}</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: "RenderElement",
  props: {
    msg: {
      type: String
    }
  }
};
</script>

<style>
h1 {
  font-size: 6em;
}
section {
  border: 1px solid #3de475;
}
</style>
