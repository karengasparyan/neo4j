import { NextFunction, Request, Response } from "express";
import HttpError from "http-errors";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  return req.originalUrl.startsWith("/api")
    ? next(HttpError(404, "Api not found"))
    : next();
}
