<template>
  <body>
    <div id="app">
      <router-view/>
    </div>
  </body>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
margin: 0px;
padding: 0px;
font-variant-numeric: tabular-nums;
font-feature-settings: "tnum";
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:#43434b;
}
</style>
