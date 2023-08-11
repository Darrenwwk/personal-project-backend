import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export default db;

export const prismaInitialization = async () => {
    console.log('Database Initialized'.green);
};
