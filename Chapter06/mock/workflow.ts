import { Request, Response } from 'express';

const workflow = [
  {
    id: 0,
    name: 'AssignEmail',
    table: 'Opportunity',
    type: 0,
    trigger: 0,
  },
  {
    id: 1,
    name: 'NewOpportunity',
    table: 'Analytics',
    type: 1,
    trigger: 1,
  },
];

export default {
  'POST /api/workflow': (_: any, res: Response) => res.send({ success: true }),

  '/api/workflow/list': (_: any, res: Response) =>
    res.send({ data: workflow, success: true }),

  'DELETE /api/workflow': (_: any, res: Response) =>
    res.send({ success: true }),

  'PUT /api/workflow': (_: any, res: Response) => res.send({ success: true }),
};
