'use client';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { dateFormatter } from '@/utils/dateFormatter';

import { IncidentStatus } from './incident-status';
import { Incident } from './incident-table-body';

interface IncidentTableRowProps {
  incident: Incident;
}

const actionButtonText = {
  open: 'Analisar',
  ['in-analysis']: 'Concluir',
};

export function IncidentTableRow({ incident }: IncidentTableRowProps) {
  const {
    incidentId,
    updatedAt,
    description,
    status,
    priority,
    assigneeName,
    userName,
  } = incident;

  return (
    <TableRow>
      <TableCell className="font-mono text-xs font-medium">
        {incidentId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {dateFormatter(updatedAt)}
      </TableCell>
      <TableCell>{priority}</TableCell>
      <TableCell>
        <IncidentStatus status={status} />
      </TableCell>
      <TableCell className="font-medium">{description}</TableCell>
      <TableCell className="font-medium">{userName}</TableCell>
      <TableCell className="font-medium">{assigneeName}</TableCell>
      <TableCell>
        {['open', 'in-analysis'].includes(status) && (
          <Button variant="outline" size="sm" onClick={() => {}}>
            <ArrowRight className="mr-2 h-3 w-3" />
            {actionButtonText[status as keyof typeof actionButtonText]}
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
}
