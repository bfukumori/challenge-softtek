import {
  GetIncidentsResponseType,
  IncidentStatusType,
} from '@/@types/incidents';

export interface FetchIncidentsParams {
  page: string;
  status: IncidentStatusType;
  incidentId: string;
}

export async function fetchIncidents({
  page,
  status,
  incidentId,
}: FetchIncidentsParams): Promise<GetIncidentsResponseType> {
  const url = new URL('http://localhost:3000/api/incidents');

  if (page) {
    url.searchParams.append('page', page);
  }

  if (status) {
    url.searchParams.append('status', status);
  }

  if (incidentId) {
    url.searchParams.append('incidentId', incidentId);
  }

  const response = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
