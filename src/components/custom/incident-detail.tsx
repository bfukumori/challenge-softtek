import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Incident } from '@/@types/incidents';
import { IncidentStatus } from "@/app/(dashboard)/@admin/incidents/incident-status"

import { dateFormatter } from '@/utils/dateFormatter';

interface IncidentDatailProps {
    incident: Incident
}

export function IncidentDetail({ incident }: IncidentDatailProps) {
    const { id, updatedAt, description, status, priority, assignedTo, openedBy } =
    incident;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Detalhes</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Detalhes</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Id
            </Label>
            <span className="col-span-3">
                {id}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descrição
            </Label>
            <Textarea
              id="description"
              defaultValue={description}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="openedBy" className="text-right">
              Aberto por
            </Label>
            <span className="col-span-3">
                {openedBy}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="assignedTo" className="text-right">
              Atendido por
            </Label>
            <span className="col-span-3">
                {assignedTo}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="priority" className="text-right">
              Prioridade
            </Label>
            <span className="col-span-3">
                {priority}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <IncidentStatus status={status} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="updatedAt" className="text-right">
             Última atualização
            </Label>
            <span className="col-span-3">
                {dateFormatter(updatedAt)}
            </span>
          </div>
         
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
