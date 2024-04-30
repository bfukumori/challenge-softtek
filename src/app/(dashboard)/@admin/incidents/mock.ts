import { Incident } from './incident-table-body';

export type IncidentResults = {
  incidents: Incident[];
  meta: {
    totalCount: number;
    pageIndex: number;
    perPage: number;
  };
};

export const incidentResults: IncidentResults = {
  incidents: [
    {
      incidentId: '1',
      status: 'open',
      description: 'lorem ipsum dolor sit amet',
      createdAt: new Date(),
      userName: 'Fiap',
      updatedAt: new Date(),
      resolvedAt: null,
      canceledAt: null,
      assigneeName: null,
      comments: null,
      priority: 0,
    },
    {
      incidentId: '2',
      status: 'in-analysis',
      description: 'lorem ipsum dolor sit amet',
      createdAt: new Date(),
      userName: 'Fiap',
      updatedAt: new Date(),
      resolvedAt: null,
      canceledAt: null,
      assigneeName: 'John Doe',
      comments: null,
      priority: 0,
    },
    {
      incidentId: '3',
      status: 'resolved',
      description: 'lorem ipsum dolor sit amet',
      createdAt: new Date(),
      userName: 'Fiap',
      updatedAt: new Date(),
      resolvedAt: new Date(),
      canceledAt: null,
      assigneeName: 'John Doe',
      comments: 'lorem ipsum dolor sit amet',
      priority: 0,
    },
    {
      incidentId: '4',
      status: 'canceled',
      description: 'lorem ipsum dolor sit amet',
      createdAt: new Date(),
      userName: 'Fiap',
      updatedAt: new Date(),
      resolvedAt: null,
      canceledAt: new Date(),
      assigneeName: null,
      comments: null,
      priority: 0,
    },
  ],
  meta: {
    totalCount: 4,
    pageIndex: 0,
    perPage: 10,
  },
};
