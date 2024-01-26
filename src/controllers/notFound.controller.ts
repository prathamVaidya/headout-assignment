import { RequestI, ResponseI } from "../types/index.js";

const NotFoundController = (_: RequestI, res: ResponseI) : void => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
}

export default NotFoundController
