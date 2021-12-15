<template>
  <div id="app">
    
    <router-view></router-view>
   
    
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
   
  },
  data() {
    return {
      activeName: "first"
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content {
  width: 80vw;
  max-width: 1080px;
  margin: 0 auto;
}
.layout-row{
  display: flex;
}
.layout-col{
  display: flex;
  flex-direction: column;
}

</style>
