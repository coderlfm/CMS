import React, { memo } from 'react';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { LockOutlined , UserOutlined } from '@ant-design/icons';
import './index.less'

const waitTime = (time = 100) =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });

export default memo(() => (
    <div
        className="login-wrap"
    >
        {/* { message.success('提交成功！')} */}
        <ProForm
            onFinish={async () => {
                await waitTime(2000);
                message.success('提交成功！');
            }}
            submitter={{
                searchConfig: {
                    submitText: '登录',
                },
                render: (_, dom) => dom.pop(),
                submitButtonProps: {
                    size: 'large',
                    style: {
                        width: '100%',
                    },
                },
            }}
        >
            <h1
                style={{
                    textAlign: 'center',
                }}
            >
                <img
                    style={{
                        height: '44px',
                        marginRight: 16,
                    }}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                />
        Ant Design
      </h1>
            <div
                style={{
                    marginTop: 12,
                    textAlign: 'center',
                    marginBottom: 40,
                }}
            >
                Ant Design 是西湖区最具影响力的 Web 设计规范
      </div>
            <ProFormText
                fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined />,
                }}
                name="username"
                placeholder="请输入用户名"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名!',
                    },
                    {
                        // pattern: /^1\d{10}$/,
                        // message: '不合法的手机号格式!',
                    },
                ]}
            />
            <ProFormText
                fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined />,
                }}
                name="password"
                placeholder="请输入密码"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                    {
                        // pattern: /^1\d{10}$/,
                        // message: '不合法的手机号格式!',
                    },
                ]}
            />
            {/* <ProFormCaptcha
                fieldProps={{
                    size: 'large',
                    prefix: <MailTwoTone />,
                }}
                captchaProps={{
                    size: 'large',
                }}
                name="captcha"
                rules={[
                    {
                        required: true,
                        message: '请输入验证码！',
                    },
                ]}
                placeholder="请输入验证码"
                onGetCaptcha={async () => {
                    await waitTime(1000);
                    message.success('验证码发送成功!');
                }}
            /> */}
        </ProForm>
    </div>
));
