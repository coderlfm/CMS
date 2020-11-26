
## 表单配置项
|   属性    |	描述    |	类型    |	默认值  |
| :-----    | ---- | ---- |---- |
|searchText|	查询按钮的文本	|string|	查询
|resetText|	重置按钮的文本	|string|	重置
|submitText|	提交按钮的文本	|string|	提交
|labelWidth|	标签的宽度	|number \|  'auto'|	80
|span|	配置查询表单的列数	|number \| 'ColConfig'	|defaultColConfig
|defaultCollapsed|	默认是否收起|	boolean|	true
|collapsed|	是否收起|	boolean	

<br/>

## 表格配置项
```js
rowSelection: {         // 批量操作
     type: 'radio'      // radio | checkbox 
},
rowKey: "id",           // 唯一key值
pagination: {           // 分页器配置
    pageSize: 5,            
},
headerTitle: 'test',    // 表格标题
```