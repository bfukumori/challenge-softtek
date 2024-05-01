import { IncidentPriorityEnum, IncidentStatusType } from '@/@types/incidents';
import { TableBody } from '@/components/ui/table';

import { IncidentTableRow } from './incident-table-row';

export type Incident = {
  id: string;
  status: IncidentStatusType;
  description: string;
  openedBy: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt: Date | null;
  canceledAt: Date | null;
  assignedTo: string | null;
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
        <IncidentTableRow key={incident.id} incident={incident} />
      ))}
    </TableBody>
  );
}
