import prisma from "@repo/db";

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: "alicea@example.com",
      password: "password123",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "bobb@example.com",
      password: "password456",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
