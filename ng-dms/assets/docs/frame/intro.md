# NG-DMS
`ng-dms` ("DMS: data manage system" 数据管理系统)是一个基于 <a href="https://angular.cn/" target="_blank">Angular</a> + <a href="https://ng.ant.design/docs/introduce/zh" target="_blank">NG-ZORRO</a> 的企业级中后台前端解决方案.

## 特性
* 主题(布局)切换  
* 标签页(路由复用)
* 登录认证 + 权限控制
* mock数据 + 服务端设计文档
* CRUD页面构建器
* 文档完善

## 浏览器环境
| ![](./assets/docs/frame/edge.png) | ![](./assets/docs/frame/chrome.png) | ![](./assets/docs/frame/firefox.png) | ![](./assets/docs/frame/safari.png) |
| ---- | ---- | ---- | :----: |
| Edge | Chrome | Firefox | Safari 13.1+|
> 移动端: 框架页以1366*768分辨率缩放显示

## 当前版本
| NG-DMS | Angular | NG-ZORRO |
| - | - | - |
| 12.0.1 | 12.1.1 | 12.0.1 |

## 目录结构
    项目根目录
    │          
    │ angular.json
    │ package.json
    │          
    ├─src
    │  ├─app
    │  │  │ app.module.ts
    │  │  │  
    │  │  ├─core 核心模块
    │  │  │  │  
    │  │  │  │ app.service.ts
    │  │  │  │ common.service.ts
    │  │  │  │ tool.service.ts
    │  │  │  │  
    │  │  │  ├─net    HTTP拦截器
    │  │  │  └─router 路由守卫
    │  │  │          
    │  │  ├─layout 布局模块
    │  │  │  │  
    │  │  │  ├─login       登录页
    │  │  │  ├─frame       框架页
    │  │  │  ├─page404     404页面
    │  │  │  └─data-screen 数据大屏
    │  │  │          
    │  │  ├─routes 业务级路由模块
    │  │  │  │              
    │  │  │  ├─dashboard    首页
    │  │  │  ├─user-setting 个人中心
    │  │  │  ├─system       系统设置模块
    │  │  │  ├─example      示例模块
    │  │  │  └─其他业务级模块...
    │  │  │              
    │  │  └─shared 分享模块
    │  │      │  
    │  │      ├─components 组件
    │  │      ├─directives 指令
    │  │      └─pipes      管道
    │  │                  
    │  ├─assets 静态资源
    │  │  │  
    │  │  │ menu.json 菜单配置
    │  │  ├─images    图片
    │  │  └─lib       第三方库
    │  │                      
    │  ├─environments 环境变量
    │  │      
    │  └─styles 全局样式
    │              
    └─_mock MOCK规则

> **起步之前**  
> 了解关于 <a href="https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML" target="_blank">HTML</a>、<a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps" target="_blank">CSS</a> 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript" target="_blank">JavaScript</a> 的中级知识  
> 了解 <a href="https://angular.cn/" target="_blank">Angular</a> 基础知识  
> 熟悉 <a href="https://ng.ant.design/docs/introduce/zh" target="_blank">NG-ZORRO</a> 常用组件  