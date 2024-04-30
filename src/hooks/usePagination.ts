'use client';
import { z } from 'zod';

import { useCustomSearchParams } from './useCustomSearchParams';

export function usePagination() {
  const { setSearchParams, searchParams } = useCustomSearchParams();

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1');

  function handlePageChange(pageIndex: number) {
    setSearchParams('page', String(pageIndex + 1));
  }

  return {
    pageIndex,
    handlePageChange,
  };
}
