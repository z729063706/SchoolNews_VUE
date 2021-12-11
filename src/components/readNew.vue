<template>
  <div class ref="box" v-title :data-title="news.title">
    <top />
    <logo />
    <div class="content">
      <center>
        <h2 v-text="news.title"></h2>
        <p class="newsTime" v-text="status+'发布时间：'+news.creatTime"></p>
      </center>
      <div class="vhtml">
        <p v-html="news.content"></p>
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
      newsID : this.$route.params.id,
      news: {}
    };
  },

  computed: {
    status:function(){
      if(this.news && this.news.statu==0){
        return '草稿'
      }else{
        return ''
      }
    }
  },
  watch: {},
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //console.log(this.newsID);
    this.axios.get("api/getnews?id="+this.newsID).then(res=>{
      this.news = res.data;
      console.log("thisnews->",this.news);
    });

  },
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {}
};
</script>
<style scoped>
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
