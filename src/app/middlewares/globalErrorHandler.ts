/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
// import { ZodError } from 'zod';
// import config from '../config';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //ultimate return
  return res.json(err);
};

export default globalErrorHandler;