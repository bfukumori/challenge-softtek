'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useCustomSearchParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const setSearchParams = (name: string, value: string) => {
    return router.push(pathname + '?' + createQueryString(name, value));
  };

  const deleteSearchParams = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
    },
    [searchParams]
  );

  return {
    setSearchParams,
    deleteSearchParams,
    searchParams,
  };
}
