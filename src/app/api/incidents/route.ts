import { NextRequest } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const page = searchParams.get('page');

  const incidents = await prisma.incident.findMany({
    skip: page ? (parseInt(page) - 1) * 10 : 0,
    take: 10,
  });
  const meta = await prisma.incident.count();

  return Response.json({
    incidents,
    meta: {
      totalCount: meta,
      pageIndex: page ? parseInt(page) - 1 : 0,
      perPage: 10,
    },
  });
}
