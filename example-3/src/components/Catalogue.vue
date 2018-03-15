<template>
    <div id="catalogue">
        <h2>
            List of Products
        </h2>
        <ul>
            <li v-for="product in products" :key="product">
                {{ product }}
                <input type="checkbox" :id="product" :value="product" v-model="selectedProducts">
            </li>
        </ul>
    </div>
</template>

<script>
    import EventBus from '../event-bus';

    export default {
        name: 'Catalogue',
        data() {
            return {
                selectedProducts: [],
                products: [
                    'Milk',
                    'Sugar',
                    'Tea'
                ]
            }
        },
        watch: {
            selectedProducts() {
                EventBus.$emit('UPDATE_BASKET', this.selectedProducts);
            }
        }
    }
</script>

