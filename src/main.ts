import http, { IncomingMessage, ServerResponse } from 'http';
import url from 'url';
import RouteHandler from './routes/index.js';
import { RequestI } from './types/index.js';
import ErrorHandler from './utils/ErrorHandler.js';

const port = 3000;

const server = http.createServer(async (hReq: IncomingMessage, hRes: ServerResponse) => {
  // Parse the request URL
  const parsedUrl = url.parse(hReq.url || '', true);
  const query = parsedUrl.query
  const req = {...hReq, query} as RequestI

  try {
    const controllerFunction = RouteHandler(hReq.method, parsedUrl.pathname);
    // process the controller logic
    await controllerFunction(req, hRes);
  } catch (error) {
    // if error is encountered then handle and send back the client as JSON
    ErrorHandler(req, hRes, error)
  }
  // if req is not ended then
  // Todo: end logic
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
