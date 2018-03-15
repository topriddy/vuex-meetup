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
    html, body {
      background-color: #000;
    }
    #app {
      text-align: center;
      margin: 0 auto;
      color: #fff;
      padding: 20px;
    }

    h2 {
      font-size: 50px;
    }

    ul {
      list-style: none;
    }

    li,
    p {
      font-size: 32px;
    }

    button {
      margin: 0 10px;
      padding: 10px 20px;
      font-size: 32px;
    }
</style>
