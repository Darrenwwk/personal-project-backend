import { Router } from "express";
// import { useError } from '../../../middlewares/error';
import * as controller from "./login.controller";
const router = Router();

router.route("/login").get(controller.login);
export default router;
