import { IncidentsCardList } from '@/components/custom/incidents-card-list';

export default async function UserDashboard() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 m-3 justify-items-center">
        <IncidentsCardList status="open" title="Em aberto" />
        <IncidentsCardList status="in-analysis" title="Em análise" />
        <IncidentsCardList status="resolved" title="Concluído" />
        <IncidentsCardList status="canceled" title="Cancelado" />
      </div>
    </div>
  );
}
