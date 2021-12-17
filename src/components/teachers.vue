<template>
  <div class ref="box">
    <top />
    <logo />
    <div class="content">
      <center>
        <h2 v-text="teacher.name"></h2>
        <h3 v-text="teacher.zhicheng"></h3>
        <p class="newsTime" v-text="'工作时间：'+teacher.worktime"></p>
      </center>
      <div class="vhtml">
          <img :src="teacher.mainpic">
        <p v-html="teacher.detail"></p>
      </div>
      
    </div>
    <bottom />
  </div>
</template>

<script>
import logo from "./logo";
import bottom from "./bottom";
export default {
  components: {
    logo,
    bottom
  },
  data() {
    return {
      msg: "Hello Vue",
      teeacherID : this.$route.params.id,
      teacher: {}
    };
  },

  mounted() {
    //console.log(this.newsID);
    this.axios.get("api/getteacher?id="+this.teeacherID).then(res=>{
      this.teacher = res.data;
      //console.log("thisteacher->",this.teacher);
    });

  }
};
</script>
<style scoped>
.vhtml{
    display: flex;
    flex-direction: column;
}
img{
    height: 300px;
    margin: auto;
}
.content {
  width: 80vw;
  max-width: 1080px;
  min-height: 80vh;
  margin: 0 auto;
}
p {
  text-align: justify;
  text-indent:30px;
}
.newsTime{
  text-align: center;
}
</style>
