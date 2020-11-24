# 开发
1. ng build ng-easy-mock --watch #增量构建lib
2. ng serve #启动demo调试lib

# 发行
1. ng build ng-easy-mock --prod
2. cd dist/ng-easy-mock
3. npm login
4. nrm use npm
5. npm publish



https://www.baidu.com/s ?ie=UTF-8&wd=456456465

[url]
./a/b/c
/a/b/c
/a/b/c/
a/b/c
https://www.baidu.com/a/:id/c
https://www.baidu.com/a/123/c

[rule]
a/b/c
a/:id/b/:id

[匹配逻辑]
let url = getPath(req.urlWithParams);
ruleUrlList.filter(method).find(ruleUrl => {
    let urlSegmentList = getUrlSegment(url);    //split('/')
    let ruleSegmentList = getUrlSegment(url);
    if(urlSegmentList.length == ruleSegmentList.length) {
        return getUrlSegment.some((segment, i) => {
            if()
        });
    } else {
        return false;
    }
})