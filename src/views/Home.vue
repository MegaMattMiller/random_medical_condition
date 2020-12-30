<template>
  <b-jumbotron header="Random Ailment" lead="What's wrong with you?" class="text-center">
    <p>Press generate to get a new ailment</p>
    <p class="condition-box" id="ailment">{{ condition }}</p>
    <b-button variant="dark" @click="updateCondition(getRandomCondition())">Generate</b-button>
    <footer>
      <a href="https://github.com/MegaMattMiller/random_medical_condition"
        ><b-icon icon="github" class="github-icon"></b-icon
      ></a>
    </footer>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      condition: '. . .',
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
      return newCon;
    },
    updateCondition: function (randomCondition) {
      this.animateCSS('#ailment', 'flipOutX').then(() => {
        this.condition = randomCondition;
        this.animateCSS('#ailment', 'flipInX');
      });
    },
    animateCSS: function (element, animation, prefix = 'animate__') {
      // We create a Promise and return it
      return new Promise((resolve) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName, 'animate__faster');

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
          event.stopPropagation();
          node.classList.remove(`${prefix}animated`, animationName, 'animate__faster');
          resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.condition-box {
  text-transform: capitalize;
  font-size: 40pt;
  background-color: #c2ccd6;
  border-radius: 20px;
  padding: 10px 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 95%;
  max-width: 550px;
}

.github-icon {
  width: 50px;
  height: 50px;
}

footer {
  margin-top: 50px;
}

a {
  color: inherit;
}

a:hover {
  color: inherit;
}
</style>
