'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useCustomSearchParams } from './useCustomSearchParams';

const incidentFiltersSchema = z.object({
  incidentId: z.string().optional(),
  status: z
    .enum(['all', 'open', 'in-analysis', 'canceled', 'resolved'])
    .optional(),
});

export type IncidentFiltersSchema = z.infer<typeof incidentFiltersSchema>;

export function useIncidentFilter() {
  const { setSearchParams, searchParams, deleteSearchParams } =
    useCustomSearchParams();

  const incidentId = searchParams.get('incidentId');
  const status = searchParams.get('status') as IncidentFiltersSchema['status'];

  const { register, control, handleSubmit, reset } =
    useForm<IncidentFiltersSchema>({
      defaultValues: {
        incidentId: incidentId ?? '',
        status: status ?? 'all',
      },
      resolver: zodResolver(incidentFiltersSchema),
    });

  function handleFilter({ incidentId, status }: IncidentFiltersSchema) {
    if (incidentId) {
      setSearchParams('incidentId', incidentId);
    }

    if (status) {
      setSearchParams('status', status);
    }
  }

  function handleClearFilters() {
    deleteSearchParams('incidentId');
    deleteSearchParams('status');
    setSearchParams('page', '1');

    reset({
      incidentId: '',
      status: 'all',
    });
  }

  return {
    handleClearFilters,
    handleFilter,
    register,
    control,
    handleSubmit,
    incidentId,
    status,
  };
}
