import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import login from "./login/login.route";
import db from "./utils/prisma";

const router = Router();
router.use("/", [login]);
export default router;
