import { IncidentPriorityEnum, IncidentStatusType } from '@/@types/incidents';
import { TableBody } from '@/components/ui/table';

import { IncidentTableRow } from './incident-table-row';

export type Incident = {
  incidentId: string;
  status: IncidentStatusType;
  description: string;
  createdAt: Date;
  userName: string;
  updatedAt: Date;
  resolvedAt: Date | null;
  canceledAt: Date | null;
  assigneeName: string | null;
  comments: string | null;
  priority: IncidentPriorityEnum;
};

interface IncidentTableBodyProps {
  incidents: Incident[];
}

export function IncidentTableBody({ incidents }: IncidentTableBodyProps) {
  return (
    <TableBody>
      {incidents.map((incident) => (
        <IncidentTableRow key={incident.incidentId} incident={incident} />
      ))}
    </TableBody>
  );
}
