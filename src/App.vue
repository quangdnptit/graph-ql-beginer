<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        {{queryData}}
    </div>
</template>

<script>

  export default {
    name: 'App',
    components: {},
    data() {
      return {
        queryData: null,
      }
    },
    mounted() {
      let query = '{"query":"{ hello }"}'
      fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: query}).then(data => console.log('data returned:', data));
    }
  }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
