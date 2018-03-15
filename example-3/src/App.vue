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
