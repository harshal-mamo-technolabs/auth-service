import express from "express";
import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import type { HttpError } from "http-errors";
import logger from "./config/logger.js";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get("/error", async (req: Request, res: Response) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw createHttpError(400, "Bad Request");
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);

  res.status(err.statusCode || 500).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: req.path,
        location: "",
      },
    ],
  });
});

export default app;
