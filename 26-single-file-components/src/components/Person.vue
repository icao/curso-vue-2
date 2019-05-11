<template>
  <div>
    <template v-if="person">
      <h1>{{simplePerson.name}}</h1>
      <img :src="simplePerson.image" alt="imagen">
      <p>
        <strong>{{simplePerson.email}}</strong>
      </p>
    </template>
    <template v-else>
      <span>Loading... ⌛</span>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "person",
  data() {
    return {
      person: null
    };
  },
  created() {
    axios.get("https://randomuser.me/api/").then(response => {
      this.person = response.data.results[0];
    });
  },

  computed: {
    simplePerson() {
      return {
        name: `${this.person.name.first} ${this.person.name.last}`,
        image: this.person.picture.large,
        email: this.person.email
      };
    }
  }
};
</script>

<style scoped>
span {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 2em;
}

* {
  animation-duration: 0.9s;
  animation-fill-mode: both;
  animation-name: fadeIn;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>