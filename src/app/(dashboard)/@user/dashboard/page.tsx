import { fetchIncidents } from "../../@admin/incidents/actions/fetch-incidents";
import Cards from "./cards";

export default async function DashboardUser() {
  const incidentResults = await fetchIncidents({
    page: "",
    status: "",
    incidentId: "",
  });
  return <Cards incidents={incidentResults.incidents}></Cards>;
}
