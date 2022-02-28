import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  locale: {
    default: 'en-US',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
