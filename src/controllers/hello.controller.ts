import { RequestI, ResponseI } from "../types/index.js";

const HelloController = async (_: RequestI, res: ResponseI) : Promise<void> => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("Hello Headout, It's Pratham");
}

export default HelloController
