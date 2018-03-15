<template>
    <div id='basket'>
        <h2>
            Order Summary
        </h2>
        <div id="summary-list" v-if="items.length > 0">
            <ul>
                <li v-for="item in items" :key="item">{{ item }}</li>
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
        props: ['items']
    }
</script>
<style scoped>

</style>
