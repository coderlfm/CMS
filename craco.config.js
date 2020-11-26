const path = require('path');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const CracoLessPlugin = require('craco-less');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src')
        },
        plugins: [
            new SimpleProgressWebpackPlugin(),

        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // 修改主题色 
                        modifyVars: { '@primary-color': '#1890ff' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    babel: {
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }]
        ]
    }
}
