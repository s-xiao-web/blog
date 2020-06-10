import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'blog-client',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],

  alias:{
    theme: `${__dirname}/src/theme/`,
  },
  
  cssLoaderOptions:{
    localIdentName:'[local]'
  },

  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:3000',
      'changeOrigin': true,
      // 'pathRewrite': { '^/api' : '' },
    },
  },
}

export default config;
