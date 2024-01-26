import http, { IncomingMessage, ServerResponse } from 'http';
import url from 'url';
import RouteHandler from './routes/index.js';
import { HttpErrorI } from './types/index.js';
import ErrorHandler from './utils/ErrorHandler.js';

const port = 3000;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url || '', true);

  try {
    const controllerFunction = RouteHandler(req.method, parsedUrl.pathname);
    // process the controller logic
    controllerFunction(req, res);
  } catch (error : unknown) {
    // if error is encountered then handle and send back the client as JSON
    ErrorHandler(req, res, error as HttpErrorI)
  }
  // if req is not ended then
  // Todo: end logic
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
