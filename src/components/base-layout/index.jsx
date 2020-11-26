import React, { useState, useEffect } from 'react';
import ProLayout, { PageContainer, MenuDataItem } from '@ant-design/pro-layout';
import { Button } from 'antd';

import { useHistory ,Switch} from 'react-router-dom'


import customMenuDate from './customMenu.js';

/**
 * @param {Object } routers 路由数组
 */
export default ({ routers }) => {
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

    const handleMenuClick = (e) => {
        console.log(e);
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

    return (
        <>
            <Button
                onClick={() => setIndex(index + 1)}
                style={{
                    margin: 8,
                }}
            >
                重新加载
            </Button>
            <ProLayout
                style={{
                    height: '100vh',
                    //   border: '1px solid #ddd',
                }}
                menu={{
                    loading,
                }}
                location={{
                    pathname: '/welcome/welcome',
                }}
                onMenuHeaderClick={(e) => { console.log(e); }}
                onPageChange={(e) => { console.log(e); }}
                menuDataRender={() => menuData}
                menuProps={{
                    onClick: handleMenuClick
                }}
            >
                <PageContainer content="欢迎使用">Hello World
                <Switch>

                {routers}
                </Switch>
                </PageContainer>

            </ProLayout>
        </>
    );
};
