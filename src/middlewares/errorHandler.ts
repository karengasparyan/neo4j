import { NextFunction, Request, Response } from "express";
const { NODE_ENV } = process.env;

export default async function (err: any, req: Request, res: Response, next: NextFunction) {
    res.locals.message = err.message;
    res.locals.error = NODE_ENV === 'development' ? err : {};
    return res.status(err.status || 500).json({
        status: "error",
        message: err.message,
        stack: NODE_ENV === 'development' ? err.stack : undefined,
    });
}
