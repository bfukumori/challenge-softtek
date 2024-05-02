import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

enum Priority {
  HIGH = 1,
  MEDIUM = 2,
  LOW = 3,
}

enum Status {
  OPEN = 'open',
  IN_ANALYSIS = 'in-analysis',
  RESOLVED = 'resolved',
  CANCELED = 'canceled',
}

function generateIncidents() {
  const incidents = [];
  for (let i = 0; i < 40; i++) {
    incidents.push({
      status: faker.helpers.enumValue(Status),
      description: faker.lorem.paragraph(1),
      openedBy: faker.person.fullName(),
      priority: faker.helpers.enumValue(Priority),
    });
  }
  return incidents;
}

async function main() {
  await prisma.incident.createMany({
    data: [
      {
        status: 'in-analysis',
        description: faker.lorem.paragraph(1),
        openedBy: faker.person.fullName(),
        updatedAt: faker.date.past(),
        assignedTo: faker.person.fullName(),
        priority: faker.helpers.enumValue(Priority),
      },
      {
        status: 'resolved',
        description: faker.lorem.paragraph(1),
        createdAt: faker.date.past(),
        openedBy: faker.person.fullName(),
        updatedAt: faker.date.past(),
        resolvedAt: faker.date.past(),
        canceledAt: null,
        assignedTo: faker.person.fullName(),
        comment: 'lorem ipsum dolor sit amet',
        priority: faker.helpers.enumValue(Priority),
      },
      {
        status: 'canceled',
        description: faker.lorem.paragraph(1),
        createdAt: faker.date.past(),
        openedBy: faker.person.fullName(),
        updatedAt: faker.date.past(),
        resolvedAt: null,
        canceledAt: faker.date.past(),
        priority: faker.helpers.enumValue(Priority),
      },
      {
        status: 'open',
        description: faker.lorem.paragraph(1),
        openedBy: faker.person.fullName(),
        priority: faker.helpers.enumValue(Priority),
      },
      ...generateIncidents(),
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
