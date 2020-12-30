<template>
  <b-jumbotron header="Random Ailment" lead="What's wrong with you?">
    <p class="condition-box">{{ condition }}</p>
    <b-button variant="primary" @click="getRandomCondition()">Generate</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      condition: 'Press generate to get a new ailment',
    };
  },
  mounted() {
    this.$store.dispatch('getData');
  },
  methods: {
    getRandomCondition: function () {
      var newCon = '';
      var adjective = this.$store.state.data.adjectives[
        Math.floor(Math.random() * this.$store.state.data.adjectives.length)
      ];
      var noun = this.$store.state.data.bodyParts[Math.floor(Math.random() * this.$store.state.data.bodyParts.length)];
      newCon = `${adjective} ${noun}`;
      this.condition = newCon;
    },
  },
};
</script>

<style lang="scss" scoped>
.condition-box {
  text-transform: capitalize;
}
</style>
