import { Incident } from '@/@types/incidents';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { dateFormatter } from '@/utils/dateFormatter';

interface IncidentCardProps {
  incident: Incident;
}

export default function IncidentCard({ incident }: IncidentCardProps) {
  return (
    <Card key={incident.id}>
      <CardHeader>
        <CardTitle>{incident.status}</CardTitle>
        <CardDescription>{incident.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{dateFormatter(incident.createdAt)}</p>
        <p>{incident.assignedTo}</p>
      </CardContent>
      <CardFooter>
        <p>{incident.priority}</p>
      </CardFooter>
    </Card>
  );
}
