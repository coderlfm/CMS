import React, { useRef, lazy, memo } from 'react';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Tag, Space, Menu, Dropdown } from 'antd';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { useHistory, useLocation } from 'react-router-dom'
import request from 'umi-request';

import { requestTest } from '@/services/request'

const columnss = [
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
const menu = (
    <Menu>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
);


export default memo((props) => {
    // console.log('props', props);

    // 刷新时取不到时从sessionStorage中取
    const state = props.props || JSON.parse(sessionStorage.getItem('init'))
    // const history = useHistory();
    const location = useLocation();

    console.log(location);

    // console.log('props.', state);
    const actionRef = useRef();

    const toolBar = () => {
        const CmsModal = lazy(() => import('../modal'))
        const toolBarArr = [
            <Button key="button" icon={<PlusOutlined />} type="primary">
                新建
                {/* 动态判断是否需要渲染新增 */}
            </Button>,
            // <CmsModal key="modal" />,
            <Dropdown key="menu" overlay={menu}>
                <Button>
                    <EllipsisOutlined />
                </Button>
            </Dropdown>,
        ]
        if (true) {
            toolBarArr.push(<CmsModal key="modal" />)
        }
        return toolBarArr
    }


    return (
        <ProTable

            columns={state.columns}
            actionRef={actionRef}
            // rowSelection={{
            //     type: 'radio'
            // }}
            request={
                async (data = {}) => {
                    console.log('查询', data);
                    const result = await requestTest({ url: location.pathname + '/data', method: 'post', data })
                    // const result = require('../mork/mork-data.json')
                    let res = {
                        data: result.result.list,
                        success: true,
                        total: result.result.total
                    }
                    return Promise.resolve(res)
                }

                // request('https://proapi.azurewebsites.net/github/issues', {
                //     params,
                // })
            }
            postData={(data) => {
                // console.log('data', data);
                return data
            }}
            rowKey={state.rowKey}
            search={{
                labelWidth: 'auto',
            }}
            // type="form"
            pagination={state.pagination}
            dateFormatter="string"
            headerTitle={state.headerTitle}
            toolBarRender={toolBar}
            {...state}

        />
    );
})
