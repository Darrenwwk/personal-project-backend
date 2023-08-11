import { Request, Response } from "express";
import * as service from "./login.service";

export const login = async (req: Request, res: Response) => {
  const response = await service.loginService();

  res.status(200).json({
    success: true,
    message: "Login Successful",
    data: response,
  });
};
