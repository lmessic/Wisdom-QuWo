import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true },
  routes,
  fastRefresh: {},
  base: '/docs/',
  publicPath: '/static/',
});
