import React, { useState, useEffect, memo } from 'react';
import ProLayout, { PageContainer, MenuDataItem } from '@ant-design/pro-layout';
import { Button } from 'antd';

import { useHistory, Switch } from 'react-router-dom'

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

    console.log('routers', routers);

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
        console.log(e);
        if (e.key === '/table') {
            // requestNew({ url: '../mork/mork.json', method: 'get' }).then(res => {
            setTimeout(() => {
                const res = require('../mork/mork-search.json')
                // if (res.code === '0') {
                history.push({
                    pathname: '/table',
                    state: {
                        ...res.result.config,
                        columns: res.result.column,
                        search: { ...res.result.search, span: null },
                        url: ''
                    }
                })
                // }
                // console.log('res', res);
            }, 500)
            // })
            // requestTest({ url: '/init', method: 'get' }).then(res => {
            //     if (res.code === '0') {
            //         history.push({
            //             pathname: '/table',
            //             state: {
            //                 ...res.result.config,
            //                 columns: res.result.column,
            //                 search: { ...res.result.search, span: null },
            //                 url: ''
            //             }
            //         })
            //     }
            //     console.log('res', res);
            // })
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
                }}
                location={{
                    pathname: '/welcome/welcome',
                }}
                // onMenuHeaderClick={(e) => { console.log(e); }}
                // onPageChange={(e) => { console.log(e); }}
                menuDataRender={() => menuData}
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
