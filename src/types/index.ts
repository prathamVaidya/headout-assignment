import { IncomingMessage, ServerResponse } from "http"

export type RequestI = IncomingMessage
export type ResponseI = ServerResponse

export type ControllerFunctionI = (req: RequestI, res: ResponseI) => void

export type HttpErrorI = {
  statusCode: number,
  message: string,
  name: string,
  cause?: unknown,
  stack?: string,
}
