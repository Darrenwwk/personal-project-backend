import db from "../utils/prisma";

export const loginService = async () => {
  const allIds = await db.user.findMany();
  return allIds;
};
