import * as faker from 'faker';
import { Response } from 'express';
import { Customer } from '@/types/customer.d';

const customers: Customer[] = [];

for (let index = 0; index < 30; index++) {
  customers.push({
    id: index,
    name: faker.name.findName(),
    company: faker.company.companyName(),
    phone: faker.phone.phoneNumber(),
    role: faker.name.jobTitle(),
    email: faker.internet.email(),
  });
}

export default {
  'PUT /api/customer': (_: any, res: Response) => res.send({ success: true }),

  'PUT /api/customer/disable': (_: any, res: Response) =>
    res.send({ success: true }),

  '/api/customer/list': (_: any, res: Response) =>
    res.send({ data: customers, success: true }),

  'POST /api/customer': (_: any, res: Response) =>
    res.status(201).send({ success: true }),
};
