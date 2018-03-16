<template>

    <div id="catalogue">
        <h2>
            List of Products
        </h2>
        <ul>
            <li v-for="product in products">
                {{ product }}
                <input type="checkbox" :id="product" :value="product" :key="product" v-model="selectedProducts">
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: 'Catalogue',
        computed: {
            products() {
                return this.$store.state.products;
            },
            selectedProducts: {
                get() {
                    return this.$store.state.selectedProducts;
                },
                set(products) {
                    this.$store.commit('updateProducts', products);
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
