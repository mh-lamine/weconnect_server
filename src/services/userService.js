const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createUser = async (data) => {
  return await prisma.user.create({ data });
};

exports.getProvidersByFilters = async (filters) => {
  const { tags, dayOfWeek, startTime, endTime } = filters;

  const query = {
    where: {
      isProvider: true,
      ...(tags && {
        tags: {
          some: {
            name: {
              in: tags,
            },
          },
        },
      }),
      ...(dayOfWeek &&
        startTime &&
        endTime && {
          availabilities: {
            some: {
              dayOfWeek: dayOfWeek,
              startTime: {
                lte: new Date(startTime),
              },
              endTime: {
                gte: new Date(endTime),
              },
            },
          },
        }),
    },
    include: {
      providerCategories: true,
      availabilities: true,
    },
  };

  const providers = await prisma.user.findMany(query);
  console.log("providersssssss", providers, "query", query);
  if (!providers) {
    throw new Error("No providers found");
  }
  return providers ? providers : "No providers found";
};

exports.getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
    include: {
      providerCategories: true,
      availabilities: true,
    },
  });
};

exports.updateUser = async (id, data) => {
  return await prisma.user.update({ where: { id }, data });
};

exports.deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id } });
};
