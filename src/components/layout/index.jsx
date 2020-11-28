import React, { useState, useEffect, memo } from 'react';
import ProLayout, { PageContainer, MenuDataItem } from '@ant-design/pro-layout';
import { Button, message } from 'antd';

import { useHistory, useLocation, Switch } from 'react-router-dom'

import { requestTest } from '@/services/request'
import { requestNew } from '@/services/request'
import customMenuDate from './customMenu.js';

/**
 * @param {Object } routers 路由数组
 */
export default memo(({ routers }) => {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    const history = useHistory();
    const location = useLocation();

    // console.log('routers', routers);

    // 请求服务端菜单数据
    useEffect(() => {
        setMenuData([]);
        setLoading(true);
        setTimeout(() => {
            setMenuData(customMenuDate);
            setLoading(false);
        }, 2000);
    }, [index]);

    /**
     * 菜单跳转页面
     * @param {Object} e 
     */
    const handleMenuClick = (e) => {
        // console.log(e);
        if (e.key.includes('cms')) {

            requestTest({ url: e.key + '/init', method: 'get' }).then(res => {
                if (res.code === '0') {
                    const state = {
                        ...res.result.config,
                        columns: res.result.column,
                        search: { ...res.result.search, span: null },
                        url: ''
                    }
                    sessionStorage.setItem('init', JSON.stringify(state))

                    history.push({
                        pathname: e.key,
                        state
                    })

                }
                // console.log('res', res);
            }).catch(err => {
                message.warning('请求超时', err.response)
            })
        } else {
            history.push({
                pathname: e.key,
                state: {
                    //   ...res.result.config,
                    //   columns: res.result.column,
                    //   search: { ...res.result.search, span: null },
                    //   url: ''
                }
            })
        }
    }

    return (
        <>
            {/* <Button
                onClick={() => setIndex(index + 1)}
                style={{
                    margin: 8,
                }}
            >
                重新加载
            </Button> */}
            <ProLayout
                style={{
                    height: '100vh',
                    //   border: '1px solid #ddd',
                }}
                // title={false}
                menu={{
                    loading,
                    defaultOpenAll: true
                }}
                location={{
                    pathname:  location.pathname,
                }}
                // onMenuHeaderClick={(e) => { console.log(e); }}
                // onPageChange={(e) => { console.log(e); }}
                // menuDataRender={() => menuData}
                route={{
                    routes: menuData,
                }}
                // selectedKeys={{ selectedKeys: location.pathname }}
                menuProps={{
                    onClick: handleMenuClick
                }}
            >
                <PageContainer content="">
                    <Switch>{routers}</Switch>
                </PageContainer>

            </ProLayout>
        </>
    );
})
