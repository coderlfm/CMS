
## 表单配置项
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|searchText|	查询按钮的文本	|string|	查询|
|resetText|	重置按钮的文本	|string|	重置|
|submitText|	提交按钮的文本	|string|	提交|
|labelWidth|	标签的宽度	|number \|  'auto'|	80|
|span|	配置查询表单的列数	|number \| 'ColConfig'	|defaultColConfig|
|defaultCollapsed|	默认是否收起|	boolean|	true|
|collapsed|	是否收起|	boolean	|

<br/>

## 表格配置项
```jsx
rowSelection: {         // 批量操作
     type: 'radio'      // radio | checkbox 
},
rowKey: "id",           // 唯一key值
pagination: {           // 分页器配置
    pageSize: 5,            
},
headerTitle: 'test',    // 表格标题
```
---
## 表单配置项
该表单配置项搜索表格中的表单配置非一致

### `ProForm.Group` 配置项

|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|title|	标题|	string|

---
## 输入框配置项

+ 宽度C:\lvze\hexo\test\koa\koa.js
    - XS = 104px 适用于短数字、短文本或选项。
    - S = 216px 适用于较短字段录入、如姓名、电话、ID 等。
    - M = 328px 标准宽度，适用于大部分字段长度。
    - L = 440px 适用于较长字段录入，如长网址、标签组、文件路径等。
    - XL = 552px 适用于长文本录入，如长链接、描述、备注等，通常搭配自适应多行输入框或定高文本域使用。

示例

```jsx
 <ProFormText width="m" name="name" label="签约客户名称" tooltip="最长为 24 位" placeholder="请输入名称" />
```

#### 通用配置
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|name|	属性名|	string|
|label|	输入框名称|	string|
|placeholder|	提示字|	string|
|rules|表单提交时该输入框的校验规则|*rulesConfig*| |

示例：
[{ required: true, message: 'Please select your country!' }]
<br/>

|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|required |是否必填 |boolean | |
|message |提示字 |string | |

<br/>


#### ProFormText
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|bordered	|	是否有边框|	boolean| true|
|allowClear	|	可以点击清除图标删除内容|	boolean| false|
|showCount	| 是否展示字数|	boolean|	false|
<br/>

#### ProFormTextArea 多行文本域
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|allowClear|	可以点击清除图标删除内容|	boolean|	false	|
|autoSize|	自适应内容高度，可设置为 true \| false 或对象：{ minRows: 2, maxRows: 6 }	|boolean \|object	|false	|
|bordered|	是否有边框|	boolean	|true	|
|defaultValue|	输入框默认内容|	string		|
|maxLength|	内容最大长度|	number		|
|showCount|	是否展示字数|	boolean	|false		|
<br/>

#### ProFormText.Password 密码框
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|visibilityToggle|是否显示切换按钮	|boolean|	true|
<br/>

#### ProFormCheckbox 多选框
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|defaultChecked|	初始是否选中|	boolean	|false	|
|disabled|	不可选中	|boolean|	false	|
|options|与 select 相同，根据 options 生成子节点，推荐使用。|string[] \| {label:ReactNode,value:string}[]|
<br/>

#### ProFormSelect [下拉选择](https://ant.design/components/select-cn/#API)
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
| valueEnum | 当前列值的枚举 valueEnum | {[key:string\|number]:any} |  |
|options|	数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能	|{ label, value }[]|
| mode | 	设置 Select 的模式为多选或标签 | "multiple" \| "tags" | |
| placeholder | 选择框默认文本	 | string | |
|listHeight|	设置弹窗滚动高度	|number	|256|
|size|	选择框大小|	"large" \| "middle" \| "small" |	middle|
|showSearch|	使单选模式可搜索|	boolean|	false|
| allowClear | 支持清除 | boolean | false|
|autoClearSearchValue|	是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效|	boolean|	true	|
|autoFocus|	默认获取焦点|	boolean|	false|
|bordered|	是否有边框|	boolean|	true	|
|defaultActiveFirstOption|	是否默认高亮第一个选项|	boolean	|true|
|defaultOpen	|是否默认展开下拉菜单|	boolean|	|
|disabled|	是否禁用|	boolean|	false|
<br/>



#### ProFormSwitch switch开关
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|disabled|	是否禁用|	boolean|	false|
|defaultChecked|初始是否选中|	boolean	|false	|
|size|	开关大小，可选值：`default` `small`|	string	|default	|
|checkedChildren|	选中时的内容|	string \| ReactNode	|
|unCheckedChildren|	非选中时的内容|	string \| ReactNode	|
<br/>

#### ProFormRate Rate评分
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|character|	自定义字符|string \| (RateProps) => ReactNode| 星星|
|allowClear|	是否允许再次点击后清除|	boolean|	true|
|allowHalf|	是否允许半选|	boolean|	false|
|count|	star 总数	|number|	5	|
|defaultValue|	默认值|	number|	0	|
|disabled|	只读，无法进行交互|	boolean|	false|
<br/>

#### ProFormSlider 滑动输入条
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |
|range	|双滑块模式|	boolean|	false|
|defaultValue	|设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]|	number \| [number, number]|	0 \| [0,0]|
|max|	最大值|	number|	100|
|min|	最小值	|number	|0|
|disabled|	值为 true 时，滑块为禁用状态	|boolean|	false|
|tooltipVisible| 值为 true 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时|	boolean|
<br />

#### ProFormDatePicker 日期框
|   属性    |	描述    |	类型    |   默认值  |
| :------- | -------- | --------- | -------- |

















