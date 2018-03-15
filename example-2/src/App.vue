<template>
    <div id="app">
        <h2>
            List of Products
        </h2>
        <ul>
            <li v-for="product in products" :key="product">
                {{ product }}
                <input type="checkbox" :id="product" :value="product" v-model="selectedProducts">
            </li>
        </ul>
        <basket :items="selectedProducts"></basket>
    </div>

</template>

<script>
    import Basket from './components/Basket'

    export default {
        name: 'app',
        components: {
            Basket
        },
        data() {
            return {
                selectedProducts: [],
                products: [
                    'Milk',
                    'Sugar',
                    'Tea'
                ]
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
