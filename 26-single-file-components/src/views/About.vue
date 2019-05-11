<template>
  <section>
    <Person></Person>
    <Person></Person>
    <Person></Person>
  </section>
</template>

<script>
import Person from "@/components/Person.vue";
export default {
  name: "about",
  components: {
    Person
  }
};
</script>

<style scoped>
section {
  border: 1px solid #42b983;
  border-radius: 5px;
}
</style>
