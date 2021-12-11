<template>
  <div class>
    <logo />
    <router-view></router-view>
    
    <bottom />
  </div>
</template>

<script>
//import top from "../top";
import logo from "../logo";
import bottom from "../bottom";
export default {
  components: {
    logo,
    bottom
  },
  data() {
    return {
  
    };
  },

  computed: {
    
  },
  watch: {},
  methods: {
    
  }
};
</script>
<style scoped>

</style>
