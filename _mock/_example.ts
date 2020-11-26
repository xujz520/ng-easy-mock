import { MockStatusError, MockRequest } from 'ng-easy-mock';
import * as Mock from 'mockjs';

/**
 * 示例
 */
export const Example = {
  // GET
  'GET /example/getUserList': { code: 0, data: null },
  '/example/getUserList': null, // 默认 GET
  // POST
  'POST /example/createUser': null,
  // RESTful风格(路由参数)
  'GET /example/user/:userId': null,
  'POST /example/user': null,
  'PUT /example/user/:userId': null,
  'DELETE /user/:userId': null,
  // 完整的URL
  'https://angular.io': null,
  // 注入请求参数(动态生成数据)
  '/example/user/:userId/card/:cardId': (req: MockRequest) => {
    /**
     * interface MockRequest {
     *    // 路由参数(键值对)
     *    params: { [key: string]: string },
     *    // 查询字符串(键值对)
     *    queryString: { [key: string]: string },
     *    // 自定义请求头(键值对)
     *    headers: { [key: string]: string },
     *    // 载荷数据
     *    body: any,
     *    // 原始请求对象
     *    original: HttpRequest<any>
     * }
     */
    console.log(req);
    return { code: 0, data: null };
  },
  // 使用 MockJS
  '/example/getMockList': Mock.mock({
    'code': 0,
    'data': {
      'data|20': [{
        'id|+1': 1,
        'name': '@cname',
        'age|0-150': 0,
      }]
    }
  }),
  // 发送 Status 错误
  '/example/500': () => { throw new MockStatusError(500); }
};