# 校园新闻站Vue

这是一个前端基于Vue的前后端分离项目,项目将常用的增删改查集成于一体,可在首页浏览新闻,登陆门户.本项目还编写了功能丰富的后台管理系统,方便修改各种数据. 本项目后端在本人Github中可找到!

<!-- PROJECT LOGO -->
<br />

<p align="center">
  <a href="https://tuchuang-8gc21lyy9d16036f-1251529691.ap-shanghai.app.tcloudbase.com/2021/12/15/4db3834930a6b.jpg">
    <img src="https://tuchuang-8gc21lyy9d16036f-1251529691.ap-shanghai.app.tcloudbase.com/2021/12/15/4db3834930a6b.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">校园新闻站Vue</h3>
  <p align="center">
    希望以此项目取得课设优秀成绩
    <br />
    <br />
    <a href="http://8.141.64.60:8080/#/">查看Demo</a>
    ·
    <a href="https://github.com/shaojintian/Best_README_template/issues">报告Bug或贡献想法</a>
  </p>
</p>

 
## 目录

- [校园新闻站Vue](#校园新闻站vue)
  - [目录](#目录)
    - [上手指南](#上手指南)
          - [开发前的配置要求](#开发前的配置要求)
          - [安装步骤](#安装步骤)
          - [功能展示](#功能展示)
    - [文件目录说明](#文件目录说明)
    - [技术栈](#技术栈)
    - [部署](#部署)
    - [使用到的框架](#使用到的框架)
    - [版本控制](#版本控制)
    - [作者](#作者)
    - [版权说明](#版权说明)
    - [鸣谢](#鸣谢)

### 上手指南

克隆本项目至本地,修改config中的配置信息,执行serve即可



###### 开发前的配置要求

1. node.js
2. npm
3. 本人测试环境:
├─┬ element-ui@2.12.0
│ └── vue@2.6.10 deduped
├─┬ vue-axios@2.1.5
│ └── vue@2.6.10 deduped
└── vue@2.6.10

###### 安装步骤

1.  克隆至本地

```sh
git clone hhttps://github.com/z729063706/SchoolNews_VUE.git
```
2. npm安装项目依赖
```
cd ./SchoolNews_VUE
npm install
```
3. 开启本地测试环境
```
npm run serve
```
###### 功能展示
- 首页可登陆
- 可以手动加载更多
- 权限校验及log记录
- 轮播图,新闻均可后台管理


### 文件目录说明

```
.
├── README.MD  //本文档
├── babel.config.js  //兼容老旧浏览器的插件
├── package-lock.json  //项目依赖
├── package.json   //项目依赖
├── prod.env.js    //环境配置
├── public  //静态文件夹
├── src //VUE核心结构
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── Global.vue
│   │   ├── admin
│   │   │   ├── admin.vue //管理页面路由
│   │   │   ├── mainpic.vue //轮播图管理
│   │   │   ├── manage.vue //新闻管理
│   │   │   ├── publish.vue //新闻发布
│   │   │   ├── teacher.vue //教师管理
│   │   │   └── userManage.vue //用户管理
│   │   ├── bottom.vue //底部信息
│   │   ├── index //首页
│   │   │   ├── index.vue
│   │   │   └── indexIndex.vue
│   │   ├── logo.vue //logo及导航栏,头部信息
│   │   ├── readNew.vue //新闻页面
│   │   ├── teachers.vue //教师介绍页面
│   │   └── tool //用到的第三方工具
│   │       └── wangeditor.vue
│   ├── global.js //存储全局user变量
│   ├── main.js 
│   ├── router
│       └── index.js //VUE路由
└── vue.config.js //配置文件

```



### 技术栈

前端: VUE+HTML+CSS+JS

### 部署

TODO: 使用Git Action一键部署

### 使用到的框架

- [VUE](https://vuejs.org/v2/guide/)


### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

### 作者

@一支魔仙棒 [个人主页](a.magicbang.cn)

*您也可以在贡献者名单中参看所有参与该项目的开发者。*

### 版权说明

该项目签署了MIT 授权许可

### 鸣谢


- [wangEdior](https://github.com/wangeditor-team/wangEdior-with-vue)
- [VUE](https://vuejs.org/v2/guide/)
- [VSCode](https://github.com/microsoft/vscode)
- [GitHub Action](https://pages.github.com)
- [BaiyunU](https://github.com/dengzhixin/baiyunU)

