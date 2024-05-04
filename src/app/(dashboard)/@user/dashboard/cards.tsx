import { Incident } from "@/@types/incidents";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dateFormatter } from "@/utils/dateFormatter";

interface CardIncidentProp {
  incidents: Incident[];
}

export default function Cards({ incidents }: CardIncidentProp) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 m-3 justify-items-center">
        <h2>Open</h2>
        <h2>In-analysis</h2>
        <h2>Resolved</h2>
        <h2>Canceled</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-4">
        {incidents.map((incident) => (
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
        ))}
      </div>
    </div>
  );
}
