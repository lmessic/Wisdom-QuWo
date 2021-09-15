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
});
