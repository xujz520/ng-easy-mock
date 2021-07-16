## 路由模块
`app/routes` 包含根路由配置 以及 所有业务级模块/页面.

### 全局一级路由
`app/routes/routes.module.ts` 包含了全局一级路由配置.
```ts
const routes: Routes = [
    // 框架页
    {
        path: '',
        component: FrameComponent,
        canActivate: [TokenGuard, FrameGuard],
        canActivateChild: [FrameGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            // 首页
            { path: 'dashboard', component: DashboardComponent },
            // 公众号管理
            { path: 'wx', loadChildren: () => import('./wx/wx.module').then(m => m.WXModule) },
            // 销售管理
            { path: 'sell', loadChildren: () => import('./sell/sell.module').then(m => m.SellModule) },
            // 库存管理
            { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule) },
            // 个人设置
            { path: 'user-setting', component: UserSettingComponent, data: { name: '个人设置', icon: 'setting' } },
        ]
    },
    // 登录
    { path: 'login', component: LoginComponent },
    // 数据大屏
    { path: 'data-lsd', component: DataLsdComponent, canActivate: [TokenGuard, AclGuard], data: { acl: 'lsd' } },
    // 404
    { path: '**', component: Page404Component },
];
```

### `route.data` 定义

> 为 不在菜单接口中的页面(例如: 个人设置) 配置一些参数

```ts
interface Data {
    // 页面名称
    name?: string,
    // 菜单Tooltip提示(简短的提示作用)
    title?: string,
    // NG-ZORRO图标(nzType 属性)
    icon?: string,
    // iconfont图标(nzIconfont 属性)
    nzIconfont?: string,
    // tab是否可以关闭(默认true)
    canClose ?: boolean,
    // 路由复用(默认true)
    keep?: boolean,
    // 权限代码
    acl?: string,
}
```

### 业务模块
各个业务模块负责它本身的路由.

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared';

import { DemoComponent } from './demo/demo.component';
import { ContractComponent } from './contract/contract.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';

/**
 * 销售管理模块
 */

const routes: Routes = [
    // 市场营销
    { path: 'marketing', component: DemoComponent },
    // 线索管理
    { path: 'clues', component: DemoComponent },
    // 售前管理
    { path: 'pre-sales', loadChildren: () => import('./pre-sales/pre-sales.module').then(m => m.PreSalesModule) },
    // 合同管理
    { path: 'contract', component: ContractComponent },
    // 合同详情(参数路由)
    { path: 'contract-detail/:id', component: ContractDetailComponent },
];

@NgModule({
    declarations: [DemoComponent, ContractComponent, ContractDetailComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class SellModule { }
```

## FrameGuard 守卫
`app/core/router/frame.guard.ts` 作用于 `FrameComponent` (框架页 `/frame/frame.component` ).

### `canActivate` 激活守卫, 用于加载资源

> 你也可以将它们合并为一个接口

```ts
//加载系统配置
await this.appService.loadConfig();
//加载当前用户信息
await this.loadUserInfo();
//加载当前用户权限
await this.loadUserAuth();
//加载菜单
await this.loadUserMenu();
```
#### 加载 [当前用户信息] 接口
> 示例使用 `/_mock/_system.ts` 中定义的mock数据

    GET /user/info

响应结果
```json
{
    "code": 0,
    "data": {
        "name": "张三",
        "username": "aaa@aaa.com",
        "avatarUrl": "assets/images/avatar/qq_765550360.jpg"
    }
}
```

#### 加载 [当前用户权限] 接口
> 示例使用 `/_mock/_system.ts` 中定义的mock数据

    GET /user/auth

响应结果
```json
{
    "code": 0,
    // 权限代码列表
    "data": [
        "/wx/list",
        "/wx/list/add",
        "/wx/list/edit",
        "/wx/material_image",
        "/wx/material_image/add"
    ]
}
```

### `canActivateChild` 子页面激活守卫, 用于验证权限

## TokenGuard 守卫
`app/core/router/token.guard.ts` 在需要验证登录状态的路由上使用, 如果未登录则跳转到登录页

```ts
{
    path: 'xxx',
    canActivate: [TokenGuard]
}
```

## AclGuard 守卫
`app/core/router/acl.guard.ts` 验证是否拥有 `data.acl` 配置的权限, 如果没有则跳转到404页  
> 仅仅用于非菜单接口中的页面, 因为菜单接口中已经配置了 `acl` , 并且在 `FrameGuard.canActivateChild` 进行了验证  

```ts
{
    path: 'xxx',
    canActivate: [AclGuard],
    data: { acl: 'xxx' }
}
```

## Tabs标签页(路由复用)
> 适用于多页面的、多任务的、操作流程依赖的后台管理系统，提高工作效率.  

### 页面切换钩子(回调)
如果你需要捕捉Tab切换事件, 可以在页面组件上添加 onTabEnter 和 onTabLeave 钩子.
* `onTabEnter(snapshot: ActivatedRouteSnapshot)` 进入这个Tab触发
* `onTabLeave(snapshot: ActivatedRouteSnapshot)` 离开这个Tab触发
* `ngOnDestroy()` 关闭这个Tab触发

### 参数路由 & 页面跳转传参
两种参数的概念:
* 参数路由 `/detail/:id` 参数 id 是路由 path 的组成部分, 为参数创建单独的实例
* URL查询参数 `/detail/:id?a=1&b=2` 参数 a&b 与路由无关

#### 示例(销售管理模块 / 合同管理)
<img src="./assets/docs/frame/参数路由1.png" height="371">
<img src="./assets/docs/frame/参数路由2.png" height="187">

#### 路由配置
```ts
/**
 * 销售管理模块
 */
const routes: Routes = [
    // 合同管理
    { path: 'contract', component: ContractComponent },
    // 合同详情(参数路由)
    { path: 'contract-detail/:id', component: ContractDetailComponent },
];
```
#### 导航到合同详情
> 查询参数 `name` 为保留字段, 作为Tab标签页名称

```html
<a  routerLink="../contract-detail/{{rowData.id}}" [queryParams]="{ name: '合同详情('+ rowData.id +')' }">{{rowData.id}}</a>
```
或者使用命令式导航:
```ts
this.router.navigate([`/sell/contract-detail/${rowData.id}`], { queryParams: { name: `合同详情(${rowData.id})` } });
```
#### 合同详情页面
```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '@core';

@Component({
    selector: 'app-contract-detail',
    template: `
        <p>params: {{route.snapshot.params | json}}</p>
        <p>queryParams: {{route.snapshot.queryParams | json}}</p>
        <br>
        <button type="button" (click)="appService.closeCurrentTab()">关闭当前Tab</button>
    `
})
export class ContractDetailComponent implements OnInit {

    constructor(public route: ActivatedRoute, public appService: AppService) {}

    ngOnInit() {
        console.log('ngOnInit');
    }

    // 进入Tab
    onTabEnter(snapshot) {
        console.log('onTabEnter', snapshot);
    }

    // 离开Tab
    onTabLeave(snapshot) {
        console.log('onTabLeave', snapshot);
    }

    // Tab关闭
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

}
```

## 更新检查
> 重新部署后可能会导致一些还未加载的分包(懒加载路由模块)报404的错误, 此刻重新刷新页面即可:

<img src="./assets/docs/frame/ChunkLoadError.png" height="179">



