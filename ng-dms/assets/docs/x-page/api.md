## 使用方式二: 从服务端加载配置
将 `配置(包含菜单和权限)` 存储在服务端, 页面打开时加载配置列表根据角色信息生成页面菜单.

### 数据表
```sql
CREATE TABLE `curd_design_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '配置名称',
  `icon` varchar(255) NOT NULL DEFAULT '' COMMENT '图标',
  `menu_path_list` text COMMENT '菜单路径json',
  `role_list` text COMMENT '角色json',
  `config` text COMMENT '配置json',
  `status` bit(1) NOT NULL DEFAULT b'1' COMMENT '状态(1: 有效, 0: 无效)',
  `create_operator_name` varchar(255) NOT NULL DEFAULT '' COMMENT '创建人姓名',
  `create_operator_username` varchar(255) NOT NULL DEFAULT '' COMMENT '创建人账号',
  `update_operator_name` varchar(255) DEFAULT NULL COMMENT '更新人姓名',
  `update_operator_username` varchar(255) NOT NULL DEFAULT '' COMMENT '更新人账号',
  `create_time` bigint(20) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='CRUD页面构建配置表';
```

### CRUD页面构建列表
> 请参考 在线演示[系统设置 / CRUD页面构建列表]  
> 请参考 在线演示[演示模块 / CRUD构建页面 / 测试页面(服务端加载)]  

当前页面的子权限: `管理所有(/systemx-page-list/owner)`, 默认情况下只能在该列表看到自己创建的.
#### 加载列表
    GET /xpage/list
请求参数

| 参数  | 必填  | 说明  |
| ------------ | ------------ | ------------ |
| name | 否 | 配置名称 |
| status | 否 | 状态 |

响应结果
```json
{
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "测试页面(服务端加载)",
            "status": 1,
            "menuPathList": "[{\"name\":\"演示模块\",\"key\":\"/example\"},{\"name\":\"CRUD构建页面\",\"key\":\"/example/x-page\"}]",
            "roleList": "[{\"name\":\"普通管理员\",\"id\":1},{\"name\":\"高级管理员\",\"id\":2}]",
            "createOperatorName": "崔芳",
            "createOperatorUsername": "v.fsudk@gcbnb.bo",
            "createTime": 1609403364274,
            "updateOperatorName": null,
            "updateOperatorUsername": null,
            "updateTime": null
        }
    ]
}
```
> 列表接口不返回 config 字段(数据量较大, 需要单独的详情接口)  
> 当前在前端根据是否具有 `/systemx-page-list/owner` 权限进行了过滤.

#### 添加
    POST(JSON) /xpage/save
请求参数
```json
{
    "name": "测试页面(服务端加载)",
    "status": 1,
    "menuPathList": "[{\"name\":\"演示模块\",\"key\":\"/example\"},{\"name\":\"CRUD构建页面\",\"key\":\"/example/x-page\"}]",
    "roleList": "[{\"name\":\"普通管理员\",\"id\":1},{\"name\":\"高级管理员\",\"id\":2}]",
    "createOperatorName": "崔芳",
    "createOperatorUsername": "v.fsudk@gcbnb.bo",
    "createTime": 1609403364274,
    "config": { /*...*/ }
}
```

响应结果
```json
{ "code": 0 }
```

#### 修改
    POST(JSON) /xpage/save
请求参数
```json
{
    "id": 1,

    "name": "测试页面(服务端加载)",
    "status": 1,
    "menuPathList": "[{\"name\":\"演示模块\",\"key\":\"/example\"},{\"name\":\"CRUD构建页面\",\"key\":\"/example/x-page\"}]",
    "roleList": "[{\"name\":\"普通管理员\",\"id\":1},{\"name\":\"高级管理员\",\"id\":2}]",
    "createOperatorName": "崔芳",
    "createOperatorUsername": "v.fsudk@gcbnb.bo",
    "createTime": 1609403364274,
    
    "updateOperatorName": "唐洋",
    "updateOperatorUsername": "g.uhbhqmsp@upjhdnhmm.ly",
    "updateTime": 1614681981111,

    "config": { /*...*/ }
}
```

响应结果
```json
{ "code": 0 }
```
> 提示: 接口应当判断是否是自己创建的 或 是否具有 `/systemx-page-list/owner` 权限.

#### 删除
    POST(JSON) /xpage/delete
请求参数
```json
{ "id": 1 }
```

响应结果
```json
{ "code": 0 }
```
> 提示: 接口应当判断是否是自己创建的 或 是否具有 `/systemx-page-list/owner` 权限.

### 获取配置详情
调用时机
1. 在构建列表点击修改按钮获取配置详情为设计器赋值
2. 点击页面菜单打开渲染器获取配置详情


    GET /xpage/getDetail

请求参数
```json
{ "id": 1 }
```

响应结果
```json
{
    "id": 1,
    "name": "测试页面(服务端加载)",
    "status": 1,
    "menuPathList": "[{\"name\":\"演示模块\",\"key\":\"/example\"},{\"name\":\"CRUD构建页面\",\"key\":\"/example/x-page\"}]",
    "roleList": "[{\"name\":\"普通管理员\",\"id\":1},{\"name\":\"高级管理员\",\"id\":2}]",
    "createOperatorName": "崔芳",
    "createOperatorUsername": "v.fsudk@gcbnb.bo",
    "createTime": 1609403364274,
    "updateOperatorName": "唐洋",
    "updateOperatorUsername": "g.uhbhqmsp@upjhdnhmm.ly",
    "updateTime": 1614681981111,
    // 详情接口返回config
    "config": { /*...*/ }
}
```

### 获取系统中所有角色列表
在设计器中加载, 为 `CRUD页面` 指定角色.

    GET /role/list

响应结果
```json
{
    "code": 0,
    "data": [
        { "id": 1, "name": "普通管理员" },
        { "id": 2, "name": "高级管理员" },
        { "id": 3, "name": "超级管理员" }
    ]
}
```

### 生成页面菜单
在框架页激活守卫( `app/core/router/frame.guard.ts` )里加载 `CRUD构建菜单` 和 `预定义菜单(assets/menu.json)` 组合在一起(通过 `key` 来识别父级菜单).
#### 菜单挂载方式
在设计器从 `菜单树` 中选定一个父节点作为该 `CRUD页面` 的挂载节点, 将该节点的数据(`key`)保存在配置中(`menuPathList`).  
> `菜单树` 来源于 `预定义菜单(assets/menu.json)` 设置了 `key(唯一性)` 的父节点.
#### CRUD页面菜单权限处理方式
在设计器从 `角色列表` 中选定一些能够看到该 `CRUD页面` 的角色, 保存在配置中(`roleList`), 不指定则不进行权限控制(所有人可见).  

方案一: 在前端匹配(当前)  
依然使用 `[系统设置 / CRUD页面构建列表]` 中的列表接口获取所有记录, 再根据当前用户的角色信息进行过滤.  

前提是用户信息中存在当前角色列表:
```ts
appService.userInfo.roleList: Array<{ id: number, name: string }>
```

方案二: 在后端匹配  
使用专门的 `CRUD构建菜单` 加载接口, 只返回当前用户角色匹配的菜单.

