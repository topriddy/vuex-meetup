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
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                this.count++;
            },
            decrement() {
                this.count--;
            }
        }
    }
</script>
