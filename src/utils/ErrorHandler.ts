import { HttpErrorI } from "../types/index.js";
import { RequestI, ResponseI } from "../types/index.js";
import HttpError from "./HttpError.js";

const DEFAULT_RESPONSE_TYPE = { 'Content-Type': 'application/json' }

const ErrorHandler = (_: RequestI, res: ResponseI, error: Error) : void => {
  if(error instanceof HttpError){
    const httpError = error as HttpErrorI
    res.writeHead(httpError.statusCode, DEFAULT_RESPONSE_TYPE);
    res.end(JSON.stringify({
      error: true,
      message: httpError.message
    }));
    return;
  }

  res.writeHead(500, DEFAULT_RESPONSE_TYPE);
  res.end(JSON.stringify({
    error: true,
    message: error.message
  }));
}


export default ErrorHandler
