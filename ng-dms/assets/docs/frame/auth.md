## 登录认证

### Token令牌 
通过登录接口完成登录后颁发的一种标识登录状态的令牌, 存储在浏览器本地( `localStorage` 或 `sessionStorage` ), 在调用后续的业务接口中会携带该令牌让后端验证.

#### 登录接口 
> 示例使用 `/_mock/_system.ts` 中定义的mock数据

    POST(JSON) /user/login

请求参数
```json
{
    "username": "admin",
    "password": "123456",
}
```

响应结果
```json
{
    "code": 0,
    "data": {
        "token": "xxx"
    }
}
```

### HTTP拦截器对Token的处理
* 拦截请求: 默认情况下在请求头中添加 `token`
* 拦截响应: 识别接口返回的 `code` , 在需要重新登录的情况下( `code = -1` )自动跳转到登录页

> 关于拦截器更多的信息请参考文档中 HTTP 章节

### TokenGuard 路由守卫
`app/core/router/token.guard.ts` 在需要验证登录状态的路由上使用, 如果未登录则跳转到登录页

```ts
{
    path: 'xxx',
    canActivate: [TokenGuard]
}
```

### JWT
> 在本项目中并没有使用 jwt 认证, 如果需要请自行修改拦截器.

<a target="_blank" href="http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html">JWT(JSON Web Token)</a>: 是一个跨域认证解决方案.  
通过签名算法和过期时间来确定token的真实性和有效性, 从而尽可能的减少查询数据库的频率.  
意味着在token过期之前, 服务器端没办法主动销毁一个token(这是本项目不用jwt的主要原因).  

## 权限控制
一个权限对应一个权限代码. 在 `FrameGuard.canActivate` 激活守卫中加载当前用户具有的权限列表.

### 页面菜单的权限控制
在菜单中配置 `acl` 属性.

### 路由的权限控制
在菜单中配置 `acl` 属性 或 在路由data中配置 `acl` (对于不在菜单中的路由).

### 按钮的权限控制(ACL指令)
> ACL指令可以用在任意的元素上面

```html
<!-- 当无权限时使用 style="display: none;" 来隐藏元素 -->
<button acl="a">按钮</button>
<button acl="a,b">按钮</button>
<button acl="a|b">按钮</button>

<!-- 当无权限时不渲染元素 -->
<button *acl="'a'">按钮</button>
<button *acl="'a,b'">按钮</button>
<button *acl="'a|b'">按钮</button>
```

### 手动检测权限
> 一般情况下你无需手动调用

```ts
import { Component, OnInit } from '@angular/core';

import { AppService } from '@core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(public appService: AppService) {
    // 是否具有权限 a
    this.appService.hasAuth('a')
    // 是否具有权限 a 和 b
    this.appService.hasAuth('a,b')
    // 是否具有权限 a 或 b
    this.appService.hasAuth('a|b')
  }

  ngOnInit() {}

}
```

## 关系型数据库
> 这只是一个最小化的可行性版本, 你可以根据实际情况自行调整  
> 在 [修改了用户的角色、删除角色、修改角色的权限] 应该销毁所关联用户的token

<img src="./assets/docs/frame/auth_er.png" height="231">

## [系统设置 / 角色权限管理] 页面
<img src="./assets/docs/frame/角色权限管理.png" height="635">

### 加载权限树
> 这是完整的配置, 与具体的角色无关
#### 方式一: 与菜单共用一套配置(当前)
大多数情况下 `菜单树` 和 `权限树` 是一一对应的, 可以和菜单共用一套配置( `assets/menu.json` ).  
> `acl` 和 `path` 一样, 具有唯一性.   
> 页面访问权限可以把 `acl` 和 `path` 设置为相同, 例如 `"acl": "/wx/list"`  
> 页面中按钮权限可以在 `path` 上延伸, 例如 `"acl": "/wx/list/create"`、`"acl": "/wx/list/update"`  

> 不配置 `path` 则不出现在 `菜单树` 中  
> 不配置 `acl` 则不出现在 `权限树` 中  

示例
```json
{
    "code": 0,
    "data": [
        // 没有 acl 则不做控制(不出现在权限树中)
        { "name": "首页", "path": "/dashboard" },
        { "name": "数据大屏", "path": "http://localhost:4201/data-lsd" },
        {
            "name": "公众号管理",
            "children": [
                {
                    "name": "公众号列表",
                    "path": "/wx/list",
                    "acl": "/wx/list",
                    "children": [
                        // 页面中按钮权限
                        { "name": "列表", "acl": "/wx/list" }, 
                        { "name": "添加", "acl": "/wx/list/create" }, 
                        { "name": "修改", "acl": "/wx/list/update" }, 
                        { "name": "删除", "acl": "/wx/list/delete" }
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

#### 方式二: 单独的权限树配置
如果权限树和菜单树完全不相同, 则可以单独维护一套权限树配置, 亦可以通过服务端接口加载.

### 加载角色列表
> 示例使用 `/_mock/_system.ts` 中定义的mock数据

    GET /role/list

响应结果

```js
{
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "普通管理员",
            // 权限列表
            "auths": [
                "/example/curd",
                "/example/curd/add",
                "/example/curd/update",
                "/example/curd/delete",
                "/wx/list",
                "/wx/material_image",
                "/wx/material_voice",
                "/sell/marketing",
                "/sell/clues",
                "/sell/pre-sales/trademark",
                "/sell/pre-sales/customer",
                "/sell/pre-sales/product"
            ]
        },
        {
            "id": 2,
            "name": "高级管理员",
            "auths": []
        },
        {
            "id": 3,
            "name": "超级管理员",
            "auths": []
        }
    ]
}
```

### 添加角色
    POST(JSON) /role/add

请求参数
```json
{ "name": "角色名称" }
```

响应结果
```json
{ "code": 0 }
```

### 修改角色(修改名称、保存权限)
    POST(JSON) /role/update
    
请求参数
```json
{
    "id": 1,
    "name": "普通管理员",
    // 已勾选的节点, 包含半选节点(父节点)
    "auths": [
        "/example/curd",
        "/example/curd/add",
        "/example/curd/update",
        "/example/curd/delete",
        "/wx/list",
        "/wx/material_image",
        "/wx/material_voice",
        "/sell/marketing",
        "/sell/clues",
        "/sell/pre-sales/trademark",
        "/sell/pre-sales/customer",
        "/sell/pre-sales/product"
    ]
}
```

响应结果
```json
{ "code": 0 }
```

### 删除角色
    POST(JSON) /role/delete

请求参数
```json
{ "id": 1 }
```

响应结果
```json
{ "code": 0 }
```

## [系统设置 / 用户管理] 页面
<img src="./assets/docs/frame/用户列表.png" height="410">

### 用户列表
> 示例使用 `/_mock/_system.ts` 中定义的mock数据

    GET /user/list

请求参数
```json
{
    "pageIndex": "1",
    "offsetStart": "0",
    "pageSize": "20",
    "name": "张三",
    "username": "zhangsan"
}
```

响应结果
```js
{
    "code": 0,
    "data": {
        "total": 100,
        "data": [
            {
                "id": 1,
                "name": "张三",
                "username": "zhangsan",
                "avatarUrl": null,
                "createTime": "1973-05-20 19:57:51",
                "lastLoginTime": "2012-11-21 10:28:09",
                "status": 0,
                // 该用户拥有的角色列表
                "roleList": [
                    {"id":2,"name":"高级管理员"},
                    {"id":3,"name":"超级管理员"}
                ]
            }
        ]
    }
}
```

### 添加用户
<img src="./assets/docs/frame/添加用户.png" height="481">
<br>
<br>

    POST(JSON) /user/add

请求参数
```json
{
    "id": null,
    "name": "张三",
    "username": "zhangsan",
    "status": 1,
    "password": "123456",
    "rePassword": "123456",
    "roleList": [
        {"id":1,"name":"普通管理员"},
        {"id":2,"name":"高级管理员"}
    ]
}
```

响应结果
```json
{ "code": 0 }
```

### 修改用户
<img src="./assets/docs/frame/修改用户.png" height="485">
<br>
<br>

    POST(JSON) /user/update

请求参数  
> 修改时可以不输入密码

```json
{
    "id": 2,
    "name": "张三",
    "username": "zhangsan",
    "status": 1,
    "roleList": [
        {
            "id": 1,
            "name": "普通管理员"
        },
        {
            "id": 2,
            "name": "高级管理员"
        }
    ]
}
```

响应结果
```json
{ "code": 0 }
```

### 删除用户
    POST(JSON) /user/delete

请求参数

```json
{ "id": 1 }
```

响应结果
```json
{ "code": 0 }
```