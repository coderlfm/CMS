import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom'


/**
 * 生成路由配置表
 * @param {Objest} paths 
 */
const createRouters = (paths) => {
    const router = []
    let childRouter = [];

    //一级路由
    paths.keys().forEach(item => {
        const path = '/' + item.replace('./', '').replace('/index.jsx', '');
        const componentPath = 'pages' + item.replace('.', '');

        if (item.split('/').length < 4) {
            router.push({
                path,
                key: path,
                title: 'title',
                icon: 'HomeOutlined',
                componentPath,
                exact: true,
                children: []
            })
        } else {
            childRouter.push(item.replace('.', '').replace('/index.jsx', ''))
        }
    })

    /**
     * 添加子路由
     * @param {Array} rootRouter 父路由
     * @param {Array} routers 子路由
     */
    const createChildren = (rootRouter, routers) => {

        for (let i = 0; i < routers.length; i++) {
            for (let j = 0; j < rootRouter.length; j++) {

                if (routers[i].split(rootRouter[j].path) && routers[i].split(rootRouter[j].path)[1]?.split('/').length === 2) {
                    const current = routers[i]
                    const index = rootRouter[j].children.findIndex(item => current.split(item.path)[1]?.split('/').length === 2)

                    if (index > -1) {
                        rootRouter[j].children[index].push({
                            path: routers[i],
                            key: routers[i],
                            title: 'title',
                            icon: 'HomeOutlined',
                            componentPath: 'pages' + routers[i],
                            exact: true,
                            children: []
                        })
                        routers.splice(i, 1);
                        i = i - 1;
                    } else {
                        rootRouter[j].children.push({
                            path: routers[i],
                            key: routers[i],
                            title: 'title',
                            icon: 'HomeOutlined',
                            componentPath: 'pages' + routers[i],
                            exact: true,
                            children: []
                        })
                        routers.splice(i, 1);
                        i = i - 1;
                    }
                    break;
                } else if (routers[i].split(rootRouter[j].path) && routers[i].split(rootRouter[j].path)[1]?.split('/').length > 2) {

                    if (i + 1 === routers.length) {
                        createChildren(rootRouter[j].children, JSON.parse(JSON.stringify(routers)).slice(i))
                    } else {
                        createChildren(rootRouter[j].children, JSON.parse(JSON.stringify(routers)).slice(i, 1))
                    }
                    break;
                }
            }

        }
    }

    childRouter = childRouter.sort();
    createChildren(router, childRouter)
    router.push({
        path: '*',
        key: "/",
        title: 'title',
        icon: 'HomeOutlined',
        componentPath: 'pages' + '/404',

    })
    return router
}


/**
 * 生成路由
 * @param {Array} routes 路由配置表
 */
const createRoutes = (routes) => {
    return routes.map(item => {
        const ComponentName = lazy(() => import(`@/${item.componentPath}`));
        const Component = (<Route path={item.path} render={(routerData) => {
            return <Suspense fallback={<div>Loading...</div>}><ComponentName {...routerData}></ComponentName></Suspense>
        }} key={item.path} exact />)

        if (item.children && item.children.length) {
            return [Component, ...createRoutes(item.children)]
        } else if (item.componentPath) {
            return Component
        } else {
            return null;
        }
    })

}


/**
 * 创建路由
 * @param {Array} routes 
 */
const useCreateRoutes = (routes) => createRoutes(routes)


export { useCreateRoutes, createRouters }

