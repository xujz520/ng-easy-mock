## 开发与构建
### 模式
| npm | 环境变量 | 说明 | 输出目录 |
| ------------ | ------------ | ------------ | ------------ |
| `npm run start` | environment.ts | 本地开发 | - |
| `npm run start:proxy`  | environment.ts | 本地开发(启用代理) | - |
| `npm run build` | environment.prod.ts | 线上正式环境 | /dist/staging |
| `npm run build:staging` | environment.staging.ts | 线上测试环境 | /dist/prod |

### 关于代理
> 代理用于解决开发时跨域问题(不推荐), 尽可能的让服务端接口支持 <a href="http://www.ruanyifeng.com/blog/2016/04/cors.html" target="_blank">CORS</a> 

`npm run start:proxy` 启用代理模式, 你需要编辑 <a href="https://angular.cn/guide/build#proxying-to-a-backend-server" target="_blank">src/proxy.conf.json</a> 文件  

### 模式中的环境变量
* `apiUrl: string` 后端接口基础地址
* `hasFullAuth: boolean` 是否不进行权限控制, 在本地开发( `environment.ts` )时为 `true`

### 引用环境变量
```ts
import { environment } from '@env';

console.log(environment.apiUrl);
```
如果仅仅需要 apiUrl 则可以:
```ts
import { apiUrl } from '@core';
```

## 核心模块
`app/core/core.module.ts` 包含一些全局配置, 只能被 `AppModule` 模块导入.

### AppService
`app/core/app.service.ts` 框架核心服务

```ts
import { AppService } from '@core';

constructor(public appService: AppService) {}
```

实例成员
```ts
/**
 * 当前用户信息
 */
userInfo: {
    // 姓名
    name: string,
    // 登录用户名
    username: string,
    // 头像URL
    avatarUrl?: string,
    // 当前用户的角色列表(从服务端加载 CRUD页面 时有用)
    roleList?: Array<{ id: number, name: string }>,
    // 其他自定义信息
    [key: string]: any,
}

/**
 * 设置token
 * @param token (token为空时, 则清除)
 * @param type 存储类型
 */
setToken(token: string = null, type: 'localStorage' | 'sessionStorage' = 'localStorage')

/**
 * 获取token
 */
getToken(): string

/**
 * 权限检测
 * @param code 权限代码
 * hasAuth('a') 是否具有权限 a
 * hasAuth('a,b') 是否具有权限 a 和 b
 * hasAuth('a|b') 是否具有权限 a 或 b
 */
hasAuth(code: string): boolean

/**
 * 关闭当前Tab, 默认跳转到上一个Tab
 * callback?: (prevTab, currentTab) => void 如果提供了回调, 则需要自行决定跳转
 */
closeCurrentTab(callback?: (prevTab, currentTab) => void)

/**
 * 全局 loading
 */
loading: boolean
```

### ToolService
`app/core/app.service.ts` 框架所依赖的工具服务

```ts
import { ToolService } from '@core';

constructor(public toolService: ToolService) {}
```

### CommonService
`app/core/common.service.ts` 公共服务 (你的业务级的全局服务)

```ts
import { CommonService } from '@core';

constructor(public commonService: CommonService) {}
```

## 分享模块
`app/shared/shared.module.ts` 包含一些全局组件、指令、管道, 被其他业务模块导入.

引用方式:
```ts
import { SharedModule } from '@shared';
```

## 全局的 NG-ZORRO 组件
`app/shared/ng-zorro/ng-zorro-antd.module.ts` 包含了部分常用的 ng-zorro 组件.
> 对于使用频度较低的组件, 建议在各自的业务模块中导入.

## 全局样式
`styles/styles.scss` 在这里定义你的全局样式  
`styles/ng-zorro/index.less` 在这里修改 ng-zorro 的全局样式

## 创建一个业务模块/页面
1. 执行 `ng g m routes/sell` 在 routes 目录中创建一个 `销售管理(sell)` 模块
2. 在上级模块中配置路由
    ```ts
    // 销售管理
    { path: 'sell', loadChildren: () => import('./sell/sell.module').then(m => m.SellModule) },
    ```
3. 执行 `ng g c routes/sell/contract` 在销售管理模块中创建一个 `合同管理(contract)` 页面
4. 在销售管理模块中配置路由
    ```ts
    // 合同管理
    { path: 'contract', component: ContractComponent }
    ```
5. 在 `assets/menu.json` 中添加菜单和权限
    ```json
    {
        "name": "销售管理",
        "icon": "pay-circle",
        "children": [
            {
                "name": "合同管理",
                "path": "/sell/contract",
                "acl": "/sell/contract"
            }
        ]
    }
    ```

## 初始化项目
> 拿到项目之后正式开发前你需要做的准备工作

* 调整HTTP拦截器( `app/core/net/default-interceptor.service.ts` )
  > 全局查找调整

  * 业务状态码字段, 默认: `code`
  * 登录状态验证不通过状态码, 默认: `code == -1`
  * 业务成功状态码, 默认: `code == 0`
* [登录页] 接口对接
* 框架页守卫( `app/core/router/frame.guard.ts` )接口对接
  * 加载当前用户信息
  * 加载当前用户权限
  * 如果不需要 `CURD页面构建器` 移除相关代码即可
* [个人设置] 接口对接
  * 头像上传
  * 修改密码
* [系统设置 / 角色权限管理] 接口对接
* [系统设置 / 用户管理] 接口对接
* 移除示例模块/页面( `app/routes/routes.module.ts` )
* 按需精简分享模块( `app/shared/shared.module.ts` )
  * 移除 `MdPreviewModule markdown预览` 模块
  * 移除 `SummernoteModule 富文本编辑器` 模块
  * 移除 `TinymceModule 富文本编辑器` 模块
  * 移除 `XFormRenderModule 表单渲染器` 模块
  * 移除 `XPageRenderModule CRUD页面渲染器` 模块
* 移除水印( `app/layout/frame/frame.component.ts` )