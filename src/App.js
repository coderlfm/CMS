import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button, Tag, Space, Menu, Dropdown } from 'antd';
import { TableDropdown } from '@ant-design/pro-table';

import { useCreateRoutes } from '@/utils/utils'
import { getTestApi } from '@/services/home'
import { requestTest } from '@/services/request'
import BaseLayout from '@/components/layout'


import routes from '@/router'
import './App.less';

const columns = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '30%',
    search: false,

  },
  {
    title: '创建者',
    width: 120,
    dataIndex: 'creator',
    valueType: 'select',
    fieldProps: {
      options: [
        {
          label: 'item 1',
          value: 'a',
        },
        {
          label: 'item 2',
          value: 'b',
        },
        {
          label: 'item 3',
          value: 'c',
        },
      ],
    },
  },
  {
    title: '进度',
    key: 'progress',
    dataIndex: 'progress',
    valueType: (item) => ({
      type: 'progress',
      status: item.status !== 'error' ? 'active' : 'exception',
    }),
  },
  {
    title: '状态',
    dataIndex: 'state',
    initialValue: 'open',
    filters: true,
    valueType: 'select',
    valueEnum: {
      all: {
        text: '全部',
        status: 'Default',
      },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    render: (_, row) => (
      <Space>
        {row.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),

  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, row, _, action) => [
      <a href={row.url} target="_blank" rel="noopener noreferrer" key="link">
        链路
    </a>,
      <a href={row.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
    </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action.reload()}
        menus={[
          {
            key: 'copy',
            name: '复制',
          },
          {
            key: 'delete',
            name: '删除',
          },
        ]}
      />,
    ],
  },
];

const search = {
  labelWidth: 'auto',
  resetText: '重置按钮的文字',
  searchText: '搜索按钮的文字',
  defaultCollaspsed: true,   //  是否默认收起
  // span: 10
  collapsed: true
}
// console.clear();
function App() {

  const routesList = useCreateRoutes(routes)
  const history = useHistory();

  const setting = {
    columns,
    rowSelection: { type: 'radio' },
    rowKey: "id",
    pagination: {
      pageSize: 6,
    },
    headerTitle: 'test',
    search
  }

  return (
    <BaseLayout routers={routesList} />
  );
}

export default App;
