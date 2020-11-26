import { createRouters } from '@/utils/utils';

const files = require.context('@/pages', true, /index\.jsx/);
export default createRouters(files);

/**
 * 路由表结构
    path: "/home",  // 路由path
    key: "/home",   // 服务器中的key、此处项目设计时未做好设计，因此前端key和后端key不一致，此key用来tree树形菜单选中
    title: '首页',   // tree树形菜单中的title
    icon: 'HomeOutlined', //左侧导航菜单中的icon
    componentPath: "pages/home/statistics", //组件的path路径
    exact: true,    // 是否精准匹配路由
    children:[      // 二级导航
        {
            path: '/home/promotion',
            key: '/home/promotion',
            disabled: true,     // 不可取消勾选
            permanent: true,    // 默认菜单，常驻
            title: '我的推广',
            icon: 'RiseOutlined',
            componentPath: 'pages/home/promotion'
        }
    ]    
 */

