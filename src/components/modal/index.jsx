import React, { memo } from 'react';
import { Button, message } from 'antd';
import ProForm, {
    ModalForm,
    ProFormText,
    ProFormDateRangePicker,
    ProFormSelect,
} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';

const waitTime = (time = 100) =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });

export default memo(() => {
    // console.log('modal');
    return (
        <ModalForm
            title="新建表单"
            trigger={
                <Button type="primary">
                    <PlusOutlined />
            新建表单
          </Button>
            }
            onFinish={async values => {
                await waitTime(2000);
                console.log(values);
                message.success('提交成功！');
                return true;
            }}
        >
            <ProForm.Group title="第一行">
                <ProFormText
                    width="m"
                    name="name"
                    label="签约客户名称"
                    tooltip="最长为 24 位"
                    placeholder="请输入名称"
                />

                <ProFormText width="m" name="company" label="我方公司名称" placeholder="请输入名称" />
            </ProForm.Group>
            <ProForm.Group title="第二行">
                <ProFormText width="m" name="contract" label="合同名称" placeholder="请输入名称" />
                <ProFormDateRangePicker name="contractTime" label="合同生效时间" />
            </ProForm.Group>
            <ProForm.Group>
                <ProFormSelect
                    options={[
                        {
                            value: 'chapter',
                            label: '盖章后生效',
                        },
                    ]}
                    width="xs"
                    name="useMode"
                    label="合同约定生效方式"
                />
                <ProFormSelect
                    width="xs"
                    options={[
                        {
                            value: 'time',
                            label: '履行完终止',
                        },
                    ]}
                    name="unusedMode"
                    label="合同约定失效效方式"
                />
            </ProForm.Group>
            <ProFormText width="s" name="id" label="主合同编号" />
            <ProFormText name="project" disabled label="项目名称" initialValue="xxxx项目" />
            <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" />
        </ModalForm>
    )
})
