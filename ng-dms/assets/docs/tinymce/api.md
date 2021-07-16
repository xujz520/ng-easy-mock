## API

|   | 类型 | 默认值 | 说明 |
| - | - | - | - |
| [(html)] | string | null | 富文本内容, 双向绑定 |
| [config] | object | 默认配置 defaultConfig| <a target="_blank" href="http://tinymce.ax-z.cn/general/basic-setup.php">TinyMCE 配置</a> |
| (inited) |  |  | 初始化完成事件, 抛出 `editor` 实例 |


#### 默认配置 defaultConfig

```ts
{
  language: 'zh_CN',
  height: 320,
  placeholder: '在这里进行创作...',
  menubar: false,
  plugins: 'lineheight lists table hr link image media codesample code fullscreen searchreplace wordcount',
  toolbar_groups: {
    alignment: {
      icon: 'align-left',
      tooltip: 'alignment',
      items: 'alignleft aligncenter alignright alignjustify',
    },
  },
  toolbar: 'formatselect | forecolor backcolor bold italic underline strikethrough removeformat | lineheight alignment | hr blockquote numlist bullist table | link image media codesample | code fullscreen searchreplace wordcount',
  /**
   * 图片上传
   * 默认情况下对图片进行base64编码, 你也可以提供文件上传接口
   */
  // images_upload_handler: (blobInfo, succFun, failFun) => {
  //   let formData = new FormData();
  //   let file = blobInfo.blob();
  //   formData.append('file', file);
  //   this.http.post<any>('/upload', formData).subscribe(res => {
  //     if (res.code == 0) {
  //       // 插入图片
  //       succFun(res.data.url);
  //     }
  //   });
  // },
}
```
