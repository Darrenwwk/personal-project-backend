import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mainRoute from './app/';
import { prismaInitialization } from './app/utils/prisma';
import colors from 'colors';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT);

const app = express();
colors.enable();
app.use([
    express.urlencoded({ extended: true, limit: '100mb' }),
    express.json({ limit: '100mb' }),
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }),
]);

// Initialize Prisma
prismaInitialization();

app.use('/api', mainRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
