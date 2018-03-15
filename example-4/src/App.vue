<template>
    <div id="app">
        <h2>
            Counter Example
        </h2>
        <p>
            Counter: <span> {{ count }} </span>
        </p>
        <button @click="increment"> +</button>
        <button @click="decrement"> -</button>
    </div>
</template>

<script>

    export default {
        name: 'app',
        computed: {
            count() {
                return this.$store.state.count
            }
        },
        methods: {
            increment() {
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            }
        }
    }
</script>

<style>
  html, body {
    background-color: #000;
  }
  #app {
    text-align: center;
    margin: 0 auto;
    color: #fff;
    padding: 20px;
    transform: translateY(75%);
  }

  h2 {
    font-size: 50px;
  }

  p {
    font-size: 32px;
  }

  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 32px;
  }
</style>
