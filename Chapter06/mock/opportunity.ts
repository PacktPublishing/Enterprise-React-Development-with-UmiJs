import * as faker from 'faker';
import { Opportunity, Activity } from '@/types/opportunity.d';
import { Request, Response } from 'express';

const opportunity: Opportunity[] = [];
const activities: Activity[] = [];

for (let index = 0; index < 5; index++) {
  activities.push({
    id: index,
    type: faker.datatype.number({ max: 3, min: 0, precision: 1 }),
    schedule: faker.date.recent(),
    createdBy: faker.name.findName(),
    summary: faker.lorem.words(6),
  });
}

for (let index = 0; index < 30; index++) {
  opportunity.push({
    id: index,
    topic: faker.commerce.productName(),
    customer: {
      id: index,
      name: faker.name.findName(),
      company: faker.company.companyName(),
      phone: faker.phone.phoneNumber(),
      role: faker.name.jobTitle(),
      email: faker.internet.email(),
    },
    budget: faker.finance.amount(100000),
    status: faker.datatype.number({ max: 3, min: 0, precision: 1 }),
  });
}

const listOppotunities = (req: Request, res: Response) => {
  const { slice } = req.query;

  res.send({
    data: opportunity.slice(0, slice ? Number(slice) : undefined),
    success: true,
  });
};

const getOpportunity = (req: Request, res: Response) => {
  const { opportunityId } = req.query;

  res.send(opportunity[Number(opportunityId)]);
};

export default {
  '/api/opportunity/list': listOppotunities,

  '/api/opportunity': getOpportunity,

  '/api/opportunity/activities': (_: any, res: Response) =>
    res.send({ data: activities, success: true }),

  'POST /api/opportunity': (_: any, res: Response) =>
    res.status(201).send({ success: true }),

  'PUT /api/opportunity/disable': (_: any, res: Response) =>
    res.send({ success: true }),

  'PUT /api/opportunity': (_: any, res: Response) =>
    res.send({ success: true }),
};
