<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/manage' }">新闻管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/publish' }">编辑</el-breadcrumb-item>
      <el-button
        size="mini"
        type="success"
        class="right"
        icon="el-icon-check"
        @click="updateNew"
      >立即更新</el-button>
    </el-breadcrumb>
    <div style="margin:10px"></div>
    <el-row>
      <el-col :span="20">
        <el-input v-model="news.title" placeholder="新闻标题"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="news.type" @change="selectorChange" popper-class="selector">
        <el-option value="1" label="教学教务">教学教务</el-option>
        <el-option value="2" label="通知公告">通知公告</el-option>
        <el-option value="3" label="战果捷报">战果捷报</el-option>
        </el-select>
      </el-col>
    </el-row>
    <!-- <wangeditor :setContent="news.content" /> -->
    <div id="wang">
      <textarea name="" id="" cols="200" rows="20" v-model="news.content"></textarea>
    </div>
    
  </div>
</template>

<script>
import wangeditor from "../tool/wangeditor";
import E from "wangeditor";
// import newsTypeAdapterToEng from "../../tool/newsTypeAdapterToEng.js";
export default {
  components: {
    wangeditor
  },
  data() {
    return {
      msg: "Hello Vue",
      newsID : this.$route.params.id,
      news:{},
      editor: null,
      editorData: '111111'
    };
  },

  computed: {
    newType() {
      
    }
  },
  watch: {},
  methods: {
    selectorChange(newtype) {
      this.news.type = newtype;
    },
    updateNew() {
      console.log("update");
    },
    catchData(n) {
      this.news.content = n;
    },
    
     getEditorData() {
      // 通过代码获取编辑器内容
      let data = this.editor.txt.html()
      alert(data)
    },
    beforeDestroy() {
      // 调用销毁 API 对当前编辑器实例进行销毁
      this.editor.destroy()
      this.editor = null
    }



  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.axios.get("api/getnews?id="+this.newsID).then(res=>{
      this.news = res.data;
      //console.log("thisnews->",this.news);
    });
  },
  mounted(){
    this.editor = new E(this.$refs.editorElem);
    this.editor.customConfig.uploadImgShowBase64 = true
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.editorContent = html;
      //this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
      console.log (this.editorContent);
    };
    //console.log(this.catchData);
    this.editor.customConfig.menus = [
      // 菜单配置
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    this.editor.customConfig.zIndex = 2
    this.editor.create(); // 创建富文本实例
    this.editor.txt.html(this.Setcontent)
    console.log(this.Setcontent)
    //console.log(this.$parent.news.content)
  }
};
</script>
<style scoped>
.right {
  float: right;
  padding: 10px;
  margin-right: 10px;
}
</style>
