import { IncomingMessage, ServerResponse } from "http"

export interface RequestI extends IncomingMessage{
  query: {
    [key: string]: string
  }
}

export type ResponseI = ServerResponse

export type ControllerFunctionI = (req: RequestI, res: ResponseI) => Promise<void>

export type HttpErrorI = {
  statusCode: number,
  message: string,
  name: string,
  cause?: unknown,
  stack?: string,
}
