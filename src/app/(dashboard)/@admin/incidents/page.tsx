import { Pagination } from '@/components/custom/pagination';
import { Table, TableBody } from '@/components/ui/table';

import { IncidentTableBody } from './incident-table-body';
import { IncidentTableFilters } from './incident-table-filters';
import { IncidentTableHeader } from './incident-table-header';
import { IncidentTableSkeleton } from './incident-table-skeleton';
import { incidentResults } from './mock';

export default function Incidents() {
  const isLoadingIncidents = false;

  return (
    <div className="flex flex-col gap-4 p-4 lg:p-8">
      <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      <div className="space-y-2.5">
        <IncidentTableFilters />
        <div className="rounded-md bincident">
          <Table>
            <IncidentTableHeader />
            <TableBody>
              {isLoadingIncidents && <IncidentTableSkeleton />}
            </TableBody>
            {incidentResults && (
              <IncidentTableBody incidents={incidentResults.incidents} />
            )}
          </Table>
        </div>
        {incidentResults && (
          <Pagination
            pageIndex={incidentResults.meta.pageIndex}
            totalCount={incidentResults.meta.totalCount}
            perPage={incidentResults.meta.perPage}
          />
        )}
      </div>
    </div>
  );
}
