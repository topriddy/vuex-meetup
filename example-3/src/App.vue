<template>
    <div id="app">
        <catalogue></catalogue>
        <basket></basket>
    </div>
</template>

<script>
    import Catalogue from './components/Catalogue'
    import Basket from './components/Basket'
    export default {
        name: 'app',
        components: {
            Catalogue,
            Basket
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
