import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true },
  routes,
  fastRefresh: {},
  base: '/',
  publicPath: '/static/',
  qiankun: {
    master: {
      // 注册子应用信息
      // apps: [
      //   {
      //     name: 'vue', // 唯一 id
      //     entry: 'http://localhost:3000', // html entry
      //   },
      // ],
    },
  },
});
