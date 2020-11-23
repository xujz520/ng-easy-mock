import { MockStatusError } from 'ng-easy-mock';
import * as Mock from 'mockjs';

/**
 * 公共
 */
export const Common = {
  // GET 成功
  '/get': { code: 0 },
  // POST 成功
  'POST /post': { code: 0 },
  // 文件上传
  // 'POST /upload': { code: 0, data: { url: Mock.Random.image('150x150', Mock.Random.color(), Mock.Random.color(), 'png', 'MockJS') } },
};

/**
 * 示例
 */
export const Example = {
  // GET
  'GET /api/users': {},
  '/api/users/1': {},
  // POST 请求
  'POST /api/users/1': {},
  // 注入请求参数
  '/api/qs': (params) => {
    console.log(params);
    return {
      code: 0,
      // queryString: req.queryString,
      // body: req.body
    }
  },
  // 使用 MockJS
  '/api/user/list': Mock.mock({
    'code': 0,
    'data': {
      'data|5': [{
        'id|+1': 1,
        'name': '@cname'
      }]
    }
  }),
  // 发送 Status 错误
  '/api/404': () => { throw new MockStatusError(500); }
};