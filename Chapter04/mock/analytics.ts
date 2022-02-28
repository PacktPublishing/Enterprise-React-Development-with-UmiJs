import * as faker from 'faker';
import { Response } from 'express';

export default {
  '/api/analytics/top/opportunity': (_: any, res: Response) =>
    res.send({
      data: [
        { name: faker.commerce.productName(), revenue: 15000 },
        { name: faker.commerce.productName(), revenue: 30000 },
        { name: faker.commerce.productName(), revenue: 40000 },
        { name: faker.commerce.productName(), revenue: 50000 },
      ],
      success: true,
    }),
  '/api/analytics/leads/source': (_: any, res: Response) =>
    res.send({
      data: [
        { source: 'Social Media', count: 40, percent: 0.4 },
        { source: 'Email Marketing', count: 21, percent: 0.21 },
        { source: 'Campaigns', count: 17, percent: 0.17 },
        { source: 'Landing Page', count: 13, percent: 0.13 },
        { source: 'Events', count: 9, percent: 0.09 },
      ],
      success: true,
    }),
  '/api/analytics/bymonth/opportunity': (_: any, res: Response) =>
    res.send({
      data: [
        { name: 'Won', month: 'Jan.', value: 18 },
        { name: 'Won', month: 'Feb.', value: 28 },
        { name: 'Won', month: 'Mar.', value: 39 },
        { name: 'Won', month: 'Apr.', value: 81 },
        { name: 'Won', month: 'May', value: 47 },
        { name: 'Won', month: 'Jun.', value: 20 },
        { name: 'Won', month: 'Jul.', value: 24 },
        { name: 'Won', month: 'Aug.', value: 35 },
        { name: 'Lost', month: 'Jan.', value: 12 },
        { name: 'Lost', month: 'Feb.', value: 23 },
        { name: 'Lost', month: 'Mar.', value: 34 },
        { name: 'Lost', month: 'Apr.', value: 99 },
        { name: 'Lost', month: 'May', value: 52 },
        { name: 'Lost', month: 'Jun.', value: 35 },
        { name: 'Lost', month: 'Jul.', value: 37 },
        { name: 'Lost', month: 'Aug.', value: 42 },
      ],
      success: true,
    }),
};
