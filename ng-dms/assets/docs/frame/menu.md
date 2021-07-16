菜单本身是一套配置化的 `json` 数据, 包含了菜单名称、路由地址、图标等。

## 加载菜单

菜单在 `assets/menu.json` 中配置, 在框架页激活守卫( `app/core/router/frame.guard.ts` )里加载.
> 这是一个完整的配置, 菜单的渲染取决于当前用户的权限.

## 菜单定义

```ts
interface menu {
    /**
     * 菜单名称
     */
    name: string,

    /**
     * 菜单Tooltip提示(简短的提示作用)
     */
    title?: string,

    /**
     * NG-ZORRO图标(nzType 属性)
     */
    icon?: string,

    /**
     * iconfont图标(nzIconfont 属性)
     */
    nzIconfont?: string,

    /**
     * 路由地址(/a/b/c) 或 完整URL(http://a.b.c)
     * 1. 父节点不需要设置
     * 2. 作为顶部模块菜单可以设置点击后自动跳转到一个默认页面(不建议)
     */
    path?: string,

    /**
     * 链接打开方式(path为URL时有效, 默认: _blalnk(新窗口))
     */
    target: '_self' | '_blalnk'

    /**
     * 默认的查询参数
     */
    queryParams?: object,

    /**
     * 权限代码(父节点选填)
     * acl: 'a'     //是否具有 a 权限
     * acl: 'a,b'   //是否具有 a和b 权限
     * acl: 'a|b'   //是否具有 a或b 权限
     */
    acl?: string,
    
    /**
     * 子菜单列表
     * 如果所有子节点都没有权限则不渲染该节点, 所以作为父节点时可以不配置acl
     */
    children?: menu[],

    /**
     * CRUD页面挂载标识(父节点有效, 唯一性)
     */
    key?: string,

    /**
     * tab是否可以关闭(默认true)
     */
    canClose?: boolean,
}
```

> 使用 iconfont 图标:  
> 需要先在 `app/core/core.module.ts` 中配置 `iconfontScriptUrl` (<a target="_blank" href="https://ng.ant.design/components/icon/zh#%E8%87%AA%E5%AE%9A%E4%B9%89-font-%E5%9B%BE%E6%A0%87">iconfont项目在线生成的 js 地址</a>)

## 示例
> 你可以简单的把 `acl` 和 `path` 配置成一样(唯一性)  
> 如果配置了 `acl` 没有权限则不显示  

> 如果一个节点没有配置 `path` 则不会作为菜单来处理(不显示), 例如页面中的按钮权限

```json
{
    "code": 0,
    "data": [
        // 单模块(没有子节点)
        { "name": "首页", "path": "/dashboard" },
        // 单页面(独立于框架页)
        { "name": "数据大屏", "path": "http://localhost:4201/data-lsd" },
        {
            "name": "公众号管理",
            "children": [
                {
                    "name": "公众号列表", 
                    "path": "/wx/list", 
                    "acl": "/wx/list",
                    "children": [
                        { "name": "列表", "acl": "/wx/list" },
                        // 按钮权限
                        { "name": "添加", "acl": "/wx/list/create" },
                        { "name": "修改", "acl": "/wx/list/update" },
                        { "name": "删除", "acl": "/wx/list/delete" },
                    ]
                },
                { "name": "用户管理", "path": "/wx/wxuser", "acl": "/wx/wxuser" },
                { "name": "消息管理", "path": "/wx/message", "acl": "/wx/message" }
            ]
        },
        {
            "name": "销售管理",
            "children": [
                { "name": "市场营销", "path": "/sell/marketing", "acl": "/sell/marketing" },
                { "name": "线索管理", "path": "/sell/clues", "acl": "/sell/clues" },
                { "name": "合同管理", "path": "/sell/contract", "acl": "/sell/contract" }
            ]
        },
        {
            "name": "库存管理",
            "children": [
                { "name": "商品管理", "path": "/stock/goods", "acl": "/stock/goods" },
                { "name": "商品分类管理", "path": "/stock/category", "acl": "/stock/category" },
                { "name": "供应商管理", "path": "/stock/factory", "acl": "/stock/factory" }
            ]
        }
    ]
}
```

## 布局

### 主题设置
<img src="./assets/docs/frame/主题设置.png" height="730">

### 顶部模块菜单(默认)
> 根据业务将页面组织为功能模块(顶部菜单), 点击顶部菜单切换左侧菜单.  
> 适合于具有大量页面的模块化的管理系统. 

<img src="./assets/docs/frame/顶部模块带单.png" height="600">

### 仅左侧菜单
> 传统模式只有左侧菜单.

<img src="./assets/docs/frame/仅左侧菜单.png" height="600">

### 简洁模式
> 尽可能的节省页面空间.

<img src="./assets/docs/frame/简洁模式.png" height="600">

### 面包屑导航(不建议)
>  关闭标签页(路由复用), 使用面包屑导航来显示.

<img src="./assets/docs/frame/面包屑导航.png" height="600">
