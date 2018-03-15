<template>
    <div id="basket">
        <h2>
            Order Summary
        </h2>
        <div id="summary-list" v-if="items.length > 0">
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
            <p>
                Number of Products: <span>{{items.length}}</span>
            </p>
            <button>Checkout</button>
        </div>
        <div v-else>
            <p>
                No items selected
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Basket',
        computed: {
            items() {
                return this.$store.state.selectedProducts;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
