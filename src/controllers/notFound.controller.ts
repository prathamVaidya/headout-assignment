import { RequestI, ResponseI } from "../types/index.js";

const NotFoundController =  async (_: RequestI, res: ResponseI) : Promise<void> => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
}

export default NotFoundController
