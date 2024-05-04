import IncidentCard from '@/components/custom/incident-card';

import { fetchIncidents } from '../@admin/incidents/actions/fetch-incidents';

export default async function UserDashboard() {
  const incidents = await fetchIncidents();

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 m-3 justify-items-center">
        <h2>Open</h2>
        <h2>In-analysis</h2>
        <h2>Resolved</h2>
        <h2>Canceled</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-4">
        {incidents.incidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
}
