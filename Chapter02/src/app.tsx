import routes from '../config/routes';
import { RunTimeLayoutConfig } from 'umi';
import HeaderOptions from './components/HeaderOptions';

export const layout: RunTimeLayoutConfig = () => {
  return {
    routes,
    rightContentRender: () => <HeaderOptions />,
    onPageChange: () => {},
  };
};
