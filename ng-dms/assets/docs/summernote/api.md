## API

|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| [(html)] | string | null | 富文本内容, 双向绑定 |
| [config] | object | 默认配置 defaultConfig| <a target="_blank" href="https://summernote.org/deep-dive">Summernote 配置</a> |
| (inited) |  |  | 初始化完成事件, 抛出 `summernote` 实例 |


#### 默认配置 defaultConfig

```ts
{
    lang: 'zh-CN',
    height: 320,
    // minHeight: null,
    // maxHeight: null,
    placeholder: '在这里进行创作...'
    callbacks: {
      /**
       * 图片上传
       * 默认情况下对图片进行base64编码, 你也可以提供文件上传接口
       */
      // onImageUpload: (files) => {
      //   let formData = new FormData();
      //   formData.append('file', files[0]);
      //   this.http.post<any>('/upload', formData).subscribe(res => {
      //     if (res.code == 0) {
      //       //插入图片
      //       this.$note.summernote('insertImage', res.data.url);
      //     }
      //   });
      // }
    }
}
```

#### 富文本渲染

为富文本内容提供类似于 `bootstrap` 样式.

```html
<summernote-preview [html]="html"></summernote-preview>
```
