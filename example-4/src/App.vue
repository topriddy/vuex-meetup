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
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
